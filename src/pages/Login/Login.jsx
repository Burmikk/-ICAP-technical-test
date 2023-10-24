import { Field, Formik, Form } from "formik";
import scss from "./login.module.scss";
const Login = () => {
    const initialValues = {
        username: "",
        password: "",
    };

    const handleSubmit = (values, actions) => {
        console.log(values);
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
