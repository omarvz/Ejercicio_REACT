import {Link, useNavigate} from "react-router-dom";



export const AboutPage = () => {

    const userId = 10;
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/");
    }

    return(
        <div>
            <h1>About Page </h1>
            <Link to={`/users/${userId}`}>Usuario con id {userId}</Link>
            <br/>
            <button onClick={handleClick}>Logout</button>
        </div>
    );
}