import { Navigate, Outlet } from "react-router-dom";
import { selectorStatus } from "../../redux/auth/auth-selectors";
import { useSelector } from "react-redux";

const PublicRoute = () => {
    const status = useSelector(selectorStatus);
    if (status === 200) {
        return <Navigate to="table" />;
    }
    return <Outlet />;
};
export default PublicRoute;
