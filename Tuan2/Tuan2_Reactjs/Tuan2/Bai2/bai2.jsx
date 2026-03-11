import { useState } from "react";
import './bai2.css'

function CounterApp() {
    const [count, setCount] = useState(0);

    return (
        <>
            <div className="counter"
                style={{color: count > 10 ? 'red' : 'white'}}
            >{count}</div>

            <div className="buttonContainer">
                <button onClick={() => {setCount(count+1)}}
                >+</button>

                <button onClick={() =>
                {if (count != 0) setCount(count-1)}}
                >-</button>

                <button onClick={() => setCount(0)}
                >Reset</button>
            </div>
        </>
    )
}

export default CounterApp