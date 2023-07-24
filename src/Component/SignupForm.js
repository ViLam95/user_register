import "./signup.css";
import {useFormik} from "formik";
import * as Yup from "yup";
const SignUpForm = () => {

    const formik = useFormik({
        initialValues: {
            name: "",
            password: "",
            confirmedPassword: "",
            email: "",
            phone: ""
        },

        onSubmit: (values) => {
            window.alert("Form Created");
            console.log(values);
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .required("Required")
                .matches(/^[a-zA-Z0-9]{4,}$/, "Your username has must be 4 character or more"),
            password: Yup.string()
                .required("Password has must be minimum eight characters")
                .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
                "Password has must be minimum eight characters. \n At least one uppercase letter, one lowercase letter and one number"),
            confirmedPassword: Yup.string()
                .required("Required")
                .oneOf([Yup.ref("password"),null], "Password must match"),
            email: Yup.string()
                .required("Required")
                .matches(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                    "Please enter a valid email address"),
            phone:Yup.string()
                .required("Phone numbers starting with 0 have 10 digits total or +84 have 9 digits total")
                .matches(/^(?:\+84|0)([1-9]\d{8})$/,
                "Invalid phone number, please re-enter")
        }),
    });


    return (
        <>
            <section>
                <form className={"infoForm"} onSubmit={formik.handleSubmit}>
                    <label>User Name</label>
                    <input type="text"
                           id="name"
                           name="name"
                           value={formik.values.name}
                           onChange={formik.handleChange}
                           placeholder="Enter Username"/>
                    {formik.errors.name && (
                        <p className={"errorMsg"}> {formik.errors.name} </p>
                    )}
                    <label>Password</label>
                    <input type="text"
                           id="password"
                           name="password"
                           value={formik.values.password}
                           onChange={formik.handleChange}
                           placeholder="Enter Password"/>
                    {formik.errors.password && (
                        <p className={"errorMsg"}> {formik.errors.password} </p>
                    )}
                    <label>Confirmed Password</label>
                    <input type="text"
                           id="confirmedPassword"
                           name="confirmedPassword"
                           value={formik.values.confirmedPassword}
                           onChange={formik.handleChange}
                           placeholder="Confirmed Your Password"/>
                    {formik.errors.confirmedPassword && (
                        <p className={"errorMsg"}> {formik.errors.confirmedPassword} </p>
                    )}
                    <label>Email</label>
                    <input type="email"
                           id="email"
                           name="email"
                           value={formik.values.email}
                           onChange={formik.handleChange}
                           placeholder="Enter Email"/>
                    {formik.errors.email && (
                        <p className={"errorMsg"}> {formik.errors.email} </p>
                    )}
                    <label>Phone Number</label>
                    <input type="text"
                           id="phone"
                           name="phone"
                           value={formik.values.phone}
                           onChange={formik.handleChange}
                           placeholder="Enter Phone Number"/>
                    {formik.errors.phone && (
                        <p className={"errorMsg"}> {formik.errors.phone} </p>
                    )}
                    <button type={"submit"}> Create </button>
                </form>

            </section>
        </>
    )
}
export default SignUpForm