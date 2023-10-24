import { useDispatch, useSelector } from "react-redux";
import scss from "./table.module.scss";
import { fetchAllUsers } from "../../redux/users/users-operations";
import { useEffect } from "react";
import User from "./User/User";
import { selectNexPage, selectPrevPage } from "../../redux/users/users-selectors";
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
            {prevPage && <button onClick={handlePrevPage}>Prev</button>}

            {nextPage && <button onClick={handleNextPage}>Next</button>}
        </>
    );
};
export default Table;
