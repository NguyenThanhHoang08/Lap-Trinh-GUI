import { useEffect, useState } from "react"
import './bai1.css'

function GetAPI() {
    const [data, setData] = useState([])

    var url = 'https://jsonplaceholder.typicode.com/users'

    // useEffect(() => {
    //     var fetchData = fetch(url);
    //     var res = fetchData.then((response) => {
    //         return response.json();
    //     }).then((dt) => {
    //         console.log(dt);
    //         setData(dt);
    //     })
    // }, [])

    useEffect(() => {
        async function fetchData(url) {
            var res = await fetch(url);
            var dt = await res.json();
            console.log(dt);
            setData(dt);
        }
        fetchData(url);
    }, [])

    return (
        <>
        <ul>
            {data.map((item) => {
               return (<li key={item.id}>
                <p className="iName">{item.name}</p>
                <p className="iEmail">{item.email}</p></li>)
            })}
        </ul>
        </>
    )

}

export default GetAPI