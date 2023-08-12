import {Link, Route, Routes} from "react-router-dom";

export const Dashboard = () => {
    return(
        <div>
            <h1>Dashboard</h1>
            <Routes>
                <Route path={"welcome"} element={<p> Welcome!!!! </p>}/>
            </Routes>

            {/* Another way to use sub components */}
            <br/>
            <Link to={'welcome'}>
                Say Welcome again!!!
            </Link>
        </div>
    );
}