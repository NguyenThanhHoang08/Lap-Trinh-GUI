import { useRecoilState } from "recoil";
import userAtom from "../states/userAtom";
import './Login.css'

function Logout() {
    const [user, setUser] = useRecoilState(userAtom)

    function handleLogout() {
        setUser('');
    }

    if (user == '') {
        return ( 
            <>
            <div className="loginCard">
                <h3>You have not yet login!</h3>
            </div>
            </>
        );
    }

    return ( 
        <>
        <div className="loginCard">
            <h3>Welcome, {user}</h3>

            <button
            onClick={handleLogout}>Logout</button>
        </div>
        </>
     );
}

export default Logout;