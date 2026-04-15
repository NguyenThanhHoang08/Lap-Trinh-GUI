import { useRecoilState } from 'recoil';
import './Login.css'
import userAtom from '../states/userAtom'
import { useRef, useState } from 'react';

function Login() {
    const [user, setUser] = useRecoilState(userAtom);
    const [name, setName] = useState();

    function handleLogin(e) {
        e.preventDefault();
        
        setUser(name)
    }

    return (  
        <>
        <form className="loginCard" onSubmit={handleLogin}>
            <h3>Login Page</h3>
            <div>
                <p>Username:</p>
                <input type="text" 
                onChange={(e) => {
                    setName(e.target.value)
                }}/>
            </div>
            <button type='submit'>Login</button>
        </form>
        </>
    );
}

export default Login;
