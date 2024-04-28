import { Navigate, useLocation } from "react-router-dom";
import { AuthContex } from "../../Contex/AuthProvider";
import { useContext } from "react";

const PrivateRoute = ({ children }) => {
    const {user, loading} = useContext(AuthContex);
    const location = useLocation();

    //loading
    if(loading){
        return <span className="loading loading-dots loading-lg"></span>;
    }

    if(user){
        return children;
    }


    return <span><Navigate to={'/signin'} state={location.pathname}></Navigate> </span>;
};

export default PrivateRoute;