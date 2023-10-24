import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import Table from "./pages/Table/Table";
import PublicRoute from "./components/PublicRoute/PublicRoute";
import PrivatRoute from "./components/PrivatRoute/PrivatRoute";
import PageNotFound from "./pages/PageNotFound/PageNotFound";

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
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </>
    );
};
export default MainRoute;
