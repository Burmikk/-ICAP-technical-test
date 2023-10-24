import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { selectorStatus } from "../../redux/auth/auth-selectors";

const PrivatRoute = () => {
    const status = useSelector(selectorStatus);
    if (status !== 200) {
        return <Navigate to="/" />;
    }
    return <Outlet />;
};
export default PrivatRoute;
