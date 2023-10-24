import { Field, Formik, Form } from "formik";
import scss from "./login.module.scss";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/auth-operations";

const initialValues = {
    username: "",
    password: "",
};
const Login = () => {
    const dispatch = useDispatch();

    const handleSubmit = (values, actions) => {
        dispatch(login(values));
        actions.resetForm();
    };
    return (
        <>
            <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                <Form>
                    <label>
                        Name
                        <Field type="text" name="username" />
                    </label>
                    <label>
                        Password
                        <Field type="password" name="password" />
                    </label>
                    <button>LogIn</button>
                </Form>
            </Formik>
        </>
    );
};
export default Login;
