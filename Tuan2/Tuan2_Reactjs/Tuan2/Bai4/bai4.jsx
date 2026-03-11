import { useState } from 'react'
import './bai4.css'

function StatusBadge({initial = 'online'}) {
    const [status, setStatus] = useState(initial);

    return (
        <>
        <div className='statusContainer'>
            <div className={`badge ${status}`}>
                {status}
            </div>
        </div>
        <div className="buttonContainer">
            <button onClick={() => setStatus('online')}>Online</button>
            <button onClick={() => setStatus('offline')}>Offline</button>
            <button onClick={() => setStatus('busy')}>Busy</button>
        </div>
        </>
    )
}

export default StatusBadge