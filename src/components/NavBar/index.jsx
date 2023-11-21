import { Link } from "react-router-dom";
import * as userService from '../../utilities/users-service';

export default function NavBar({user, setUser}) {
    function handleLogOut() {
        userService.logOut();
        setUser(null);
    }

    return (
        <nav>
            <Link to="/notes">Notes</Link>
            <span> </span>
            <span>You Will Die, { user.name }</span>
            <span> </span>
            <Link to="" onClick={ handleLogOut }>Log Out</Link>
        </nav>
    );
}