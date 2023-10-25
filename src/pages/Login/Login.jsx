import { Field, Formik, Form, ErrorMessage, setFieldValue } from "formik";
import scss from "./login.module.scss";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/auth-operations";
import { object, string } from "yup";
import { BiSolidLock } from "react-icons/bi";
import { FaUser } from "react-icons/fa6";

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
        <main className={scss.container}>
            <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={userSchema}>
                <Form className={scss.form}>
                    <h1 className={scss.title}>Login</h1>
                    <div className={scss.input_box}>
                        <div className={scss.input_field}>
                            <FaUser className={scss.icon} size={18} />
                            <Field className={scss.input} type="text" name="username" required />
                            <label className={scss.label}>Name</label>
                        </div>
                        <ErrorMessage
                            name="username"
                            render={(msg) => (
                                <div>
                                    <p className={scss.validation_text}>{msg}</p>
                                </div>
                            )}
                        />
                    </div>

                    <div className={scss.input_box}>
                        <div className={scss.input_field}>
                            <BiSolidLock className={scss.icon} size={22} />
                            <Field className={scss.input} type="password" name="password" required />
                            <label className={scss.label}>Password</label>
                        </div>

                        <ErrorMessage
                            name="password"
                            render={(msg) => (
                                <div>
                                    <p className={scss.validation_text}>{msg}</p>
                                </div>
                            )}
                        />
                    </div>
                    <button className={scss.btn} type="submit">
                        Login
                    </button>
                </Form>
            </Formik>
        </main>
    );
};
export default Login;
