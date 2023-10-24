import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import Table from "./pages/Table/Table";
import PublicRoute from "./components/PublicRoute/PublicRoute";
import PrivatRoute from "./components/PrivatRoute/PrivatRoute";

const MainRoute = () => {
    return (
        <>
            <Routes>
                <Route element={<PublicRoute />}>
                    <Route path="/" element={<Login />} />
                </Route>
                <Route element={<PrivatRoute />}>
                    <Route path="/table" element={<Table />} />
                </Route>
            </Routes>
        </>
    );
};
export default MainRoute;
