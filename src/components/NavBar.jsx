import {NavLink} from "react-router-dom";
import './navbar.css'

export const NavBar = () => {
    return(
        <div>
            <ul>
                <li>
                    <NavLink className={({isActive}) => isActive ? 'active' : ''} to={'/'}>Home</NavLink>
                </li>
                <li>
                    <NavLink to={'/about'}>About</NavLink>
                </li>
                <li>
                    <NavLink to={'/dashboard'}>Dashboard</NavLink>
                </li>
                <li>
                    <NavLink to={'/meme'}>Meme Generator</NavLink>
                </li>
            </ul>
        </div>
    );
}