import { useDispatch, useSelector } from "react-redux";
import scss from "./table.module.scss";
import { fetchAllUsers } from "../../redux/users/users-operations";
import { useEffect } from "react";
import { selectNexPage, selectPrevPage } from "../../redux/users/users-selectors";
import User from "../../components/User/User";
const Table = () => {
    const dispatch = useDispatch();
    const nextPage = useSelector(selectNexPage);
    const prevPage = useSelector(selectPrevPage);
    useEffect(() => {
        dispatch(fetchAllUsers());
    }, [dispatch]);

    const handleNextPage = () => {
        dispatch(fetchAllUsers(nextPage));
    };
    const handlePrevPage = () => {
        dispatch(fetchAllUsers(prevPage));
    };

    return (
        <>
            <h1>Users</h1>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Birthday date</th>
                        <th>Phone number</th>
                        <th>Address</th>
                    </tr>
                </thead>
                <tbody>
                    <User />
                </tbody>
            </table>

            <button disabled={!prevPage} onClick={handlePrevPage}>
                Prev
            </button>

            <button disabled={!nextPage} onClick={handleNextPage}>
                Next
            </button>
        </>
    );
};
export default Table;
