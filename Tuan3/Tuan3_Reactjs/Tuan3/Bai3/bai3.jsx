import { useEffect, useMemo, useState } from "react";
import './bai3.css'

function ProductList() {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [filter, setFilter] = useState({
        minPrice: 10,
        maxPrice: 1000
    });

    useEffect(() => {
        const fetchData = async() => {
            try {
                const response = await fetch('https://my.api.mockaroo.com/ProductList.json?key=3fb26570');
                if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
                }
                const res = await response.json();
                setData(res);
            } catch (err) {
                setError(err.message);
            } finally {
                setIsLoading(false);
            }                   
        }
        fetchData();
    }, []);

    const resultData = useMemo(() => {
        return data.filter(item => {
            const matchesSearch = item.product_name.toLowerCase().includes(searchTerm.toLowerCase());

            const cleanPrice = typeof item.price === 'string' 
            ? Number(item.price.replace(/[^0-9.-]+/g, "")) 
            : Number(item.price);

            const matchesPrice = cleanPrice >= filter.minPrice 
                && cleanPrice <= filter.maxPrice;
            return matchesSearch && matchesPrice;
        });
    }, [filter, data, searchTerm]);

    const handlePrice = (e) => {
        const { name, value } = e.target;
        setFilter(prev => ({
            ...prev,
            [name]: Number(value)
        }));
    };

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <>
        <div className="searchBar">
            <div className="searchBox">
                <label htmlFor="">Search</label>
                <div>
                    <input type="text" 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Look for a product..."/>
                </div>
            </div>

            <div className="filterBox">          
                <div>
                    <label htmlFor="">Min</label><br />
                    <input type="number" 
                    name="minPrice"
                    value={filter.minPrice}
                    onChange={handlePrice}/>
                </div>
                <p> - </p>  
                <div>
                    <label htmlFor="">Max</label><br />
                    <input type="number" 
                    name="maxPrice"
                    value={filter.maxPrice}
                    onChange={handlePrice}/>
                </div>
            </div>
        </div>

        {resultData.length === 0 ? (
            <p>No products match your criteria.</p>
        ) : (
            <ul className="prodList">
                {resultData.map(item => (
                    <li key={item.id}>{item.product_name} <br /> {item.price}</li>
                ))}
            </ul>
        )}
        </>
    );
}

export default ProductList