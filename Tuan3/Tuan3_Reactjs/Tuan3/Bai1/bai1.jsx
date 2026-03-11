import { useState } from "react";
import './bai1.css'

function UserInfo() {
    const [user, setUser]  = useState({
        name: '',
        email: '',
        age: ''
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setUser({
            ...user,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('User is: ', user);
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <div>
                <input type="text" 
                value={user.name}
                onChange={handleChange}
                name="name"
                placeholder="Input name..."/>
            </div>
            <div>
                <input type="text" 
                value={user.email}
                onChange={handleChange}
                name="email"
                placeholder="Input email..."/>
            </div>
            <div>
                <input type="text" 
                value={user.age}
                onChange={handleChange}
                name="age"
                placeholder="Input age..."/>
            </div>
            
            <button
            type="submit"
            >Save</button>
        </form>

        <div className="info">
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            <p>Age: {user.age}</p>
        </div>
        </>
    );
}

export default UserInfo