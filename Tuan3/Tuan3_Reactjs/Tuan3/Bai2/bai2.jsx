import { useEffect, useState } from "react";
import './bai2.css'

function DigitalClock() {
    const [time, setTime] = useState(new Date())

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        })
    })

    const formatTime = (num) => num.toString().padStart(2, '0');

    const hour = formatTime(time.getHours());
    const min = formatTime(time.getMinutes());
    const sec = formatTime(time.getSeconds());
    
    return (
        <>
        <div className="clockDisplay">
            <p>{hour}:{min}:{sec}</p>
        </div>
        </>
    );
}

export default DigitalClock