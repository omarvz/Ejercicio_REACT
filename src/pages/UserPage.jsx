import {useParams} from "react-router-dom";

export const UserPage = () => {

    const params = useParams();

    return(
        <div> User {params.id} </div>
    );
}