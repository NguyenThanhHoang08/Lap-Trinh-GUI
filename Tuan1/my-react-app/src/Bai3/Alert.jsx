import { useState } from "react";
import "./Alert.css";

function Alert() {
    const [type, setType] = useState("");
    return (     
        <div>        
            <div className={`=alert ${type}`}>
                {type === "success" && "Success!"}
                {type === "warning" && "Warning!"}
                {type === "error" && "Error!"}
                
            </div>

            <div>
                <button onClick={() => setType("success")}>Success</button>
                <button onClick={() => setType("warning")}>Warning</button>
                <button onClick={() => setType("error")}>Error</button>
            </div>

        </div>
    );
}

export default Alert