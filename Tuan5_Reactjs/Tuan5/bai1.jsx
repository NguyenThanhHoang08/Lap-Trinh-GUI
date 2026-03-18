import { useEffect, useState } from "react";
import "./bai1.css"

function ListSearchFilter() {
    const [data, setData] = useState([]);
    const [keyword, setKeyword] = useState("");
    const [category, setCategory] = useState("");
    const [filteredData, setFilteredData] = useState(data);

    var url = "https://jsonplaceholder.typicode.com/posts";

    useEffect(() => {
        var dt = JSON.parse(localStorage.getItem("dataSet"));
        setData(dt);
        setFilteredData(dt);
    }, [])

    useEffect(() => {
        async function fetchDt() {
            var res = await fetch(url);
            var dt = await res.json();
            setData(dt);
            setFilteredData(dt);

            localStorage.setItem("dataSet", JSON.stringify(data));
        }
        if (!data) {
            fetchDt();
        }
    }, [data]);

    function handleSearch(e) {
        setKeyword(e.target.value);
        var filter = data.filter((i) => {
            return i.title.toLowerCase().includes(e.target.value) ||
                i.body.toLowerCase().includes(e.target.value)
        })
        if (!keyword) {
            return data;
        }
        setFilteredData(filter);
    }

    function handleFilter(e) {
        setCategory(e.target.value);
        var filter = data.filter((i) => {
            return i.title.toLowerCase().includes(e.target.value)
        })
        if (!category) {
            return data;
        }
        setFilteredData(filter);
    }

    return (
        <>
        <div className="searchBox">
            <input type="text"  
            placeholder="Search for..."
            value={keyword}
            onChange={handleSearch}
            />

            <select name="" id="" onChange={handleFilter}>
                <option value="">Select a category</option>
                <option value="nihil">nihil</option>
                <option value="dolorem">dolorem</option>
            </select>
        </div>

        <div className="listContainer">
            {
            filteredData.map((i) => {
                return <li key={i.id}>
                  <h2>{i.title}</h2>  
                  <p>{i.body}</p>
                </li>
            })
            }
        </div>
        </>
    );
}

export default ListSearchFilter