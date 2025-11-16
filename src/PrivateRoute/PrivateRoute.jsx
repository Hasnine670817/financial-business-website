import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AppContext } from "../Context/AppContext";


const PrivateRoute = ({children}) => {
    const { user } = useContext(AppContext);
    const location = useLocation();

    if (!user) {
        return <Navigate to="/login" replace state={{ from: location }} />;
    }

    return children

}

export default PrivateRoute;