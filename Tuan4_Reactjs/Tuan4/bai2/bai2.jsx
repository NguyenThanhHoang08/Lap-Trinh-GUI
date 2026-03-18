import { useEffect, useState } from "react"
import './bai1.css'

function GetAPI1() {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [err, setErr] = useState('')

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
           try {
            var res = await fetch(url);
            var dt = await res.json();
            console.log(dt);
            setData(dt);
           }
           catch (e) {
            setErr(e.message);
            console.log('We ran into a problem')
           }
           finally {
            setTimeout(() => {
                setLoading(false)
            }, 1000)
           }
        }
        fetchData(url);
    }, [])

    if (err) {
        return (
            {err}
        )
    }

    return (
        <>
        {loading? (<h2>Loading...</h2>) : (
            <ul>
                {data.map((item) => {
                return (<li key={item.id}>
                    <p className="iName">{item.name}</p>
                    <p className="iEmail">{item.email}</p></li>)
                })}
            </ul>
        )}
        </>
    )

}

export default GetAPI1