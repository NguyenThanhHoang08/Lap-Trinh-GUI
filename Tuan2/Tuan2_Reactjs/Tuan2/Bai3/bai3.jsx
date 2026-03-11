import './bai3.css'
import { useState } from 'react'

function StateInput() {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    
    return (
        <>
            <div className='nameField'>
                <input type="text" placeholder='Name'
                value={name}
                onChange={(e) => {setName(e.target.value)}}
                />
            </div>
            <div className='emailField'>
                <input type="text" placeholder='Email'
                value={email}
                onChange={(e) => {setEmail(e.target.value)}}
                />
            </div>

            <div className="info">
                <div className="txtName">
                    <b>Name:</b> &nbsp; {name}
                </div>

                <div className="txtEmail">
                    <b>Email:</b> &nbsp; {email}
                </div>
            </div>
        </>
    )
}

export default StateInput