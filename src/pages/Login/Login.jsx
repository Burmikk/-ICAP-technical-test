import { Field, Formik, Form, ErrorMessage } from "formik";
import scss from "./login.module.scss";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/auth-operations";
import { object, string } from "yup";

const initialValues = {
    username: "",
    password: "",
};

const userSchema = object({
    username: string().min(1).max(150).required("Name is required"),
    password: string().min(1).max(128).required("Password is required"),
});

const Login = () => {
    const dispatch = useDispatch();

    const handleSubmit = (values, actions) => {
        dispatch(login(values));
        actions.resetForm();
    };
    return (
        <>
            <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={userSchema}>
                <Form>
                    <label>
                        Name
                        <Field type="text" name="username" />
                        <ErrorMessage name="username" render={(msg) => <p>{msg}</p>} />
                    </label>
                    <label>
                        Password
                        <Field type="password" name="password" />
                        <ErrorMessage name="password" render={(msg) => <p>{msg}</p>} />
                    </label>
                    <button type="submit">LogIn</button>
                </Form>
            </Formik>
        </>
    );
};
export default Login;
