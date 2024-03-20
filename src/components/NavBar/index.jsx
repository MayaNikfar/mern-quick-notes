import { Link } from "react-router-dom";
import * as userService from '../../utilities/users-service';
import "./NavBar.css";
export default function NavBar({user, setUser}) {
    function handleLogOut() {
        userService.logOut();
        setUser(null);
    }

    return (
        <nav>
            <Link to="/notes">Notes</Link>
            <span> </span>
            <span>Hey { user.name }, Welcome To My Page</span>
            <span> </span>
            <Link to="" onClick={ handleLogOut }>Log Out</Link>
        </nav>
    );
}