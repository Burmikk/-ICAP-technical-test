import { useSelector } from "react-redux";
import scss from "./user.module.scss";
import { selectUsers } from "../../../redux/users/users-selectors";
const User = () => {
    const users = useSelector(selectUsers);

    const userList = users.map(({ id, name, email, birthday_date, phone_number, address }) => {
        return (
            <tr key={id}>
                <td>{name}</td>
                <td>{email}</td>
                <td>{birthday_date}</td>
                <td>{phone_number}</td>
                <td>{address}</td>
            </tr>
        );
    });
    return <>{userList}</>;
};
export default User;
