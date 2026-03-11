import { useState } from "react";
import "./Form.css";

function Form() {
    const [user, setUser] = useState("");
    const [psw, setPsw] = useState("");
    const [isOpen, setIsOpen] = useState(false);

    return (     
        <>
        <button onClick={() => setIsOpen(true)}>Login</button>

        <div className={`overlay ${isOpen ? "show" : ""}`}>
            <div className="frame">
                <div className='upper'>
                    <button className='close'
                        onClick={() => setIsOpen(false)}>x</button> 
                </div>
                <div className='head'>
                    <h2>Login</h2>
                            
                </div> 
                <div>
                    <input type="text" className='field' name="" id="" 
                    placeholder="Username"/>
                </div>
                <div>
                    <input type="password" className='field' name="" id="" placeholder="Password"/>
                </div>
                <div>
                    <button className='login'>Login</button>
                </div>
            </div>
        </div>
        </>
    );
}

export default Form