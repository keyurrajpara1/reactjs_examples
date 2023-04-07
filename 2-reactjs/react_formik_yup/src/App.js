import React from "react";
import logo from './logo.svg';
import './App.css';

import { useFormik } from "formik";
import { signUpSchema } from "./schemas";

const initialValues = {
  name: "",
  email: "",
  password: "",
  confirm_password: "",
};

function App() {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: signUpSchema,
      onSubmit: (values, action) => {
        console.log(values);
        action.resetForm();
      },
    });

  return (
    <div>
      <form onSubmit={handleSubmit}>
        Name:
        <input type="text" name="name" value={values.name} onChange={handleChange} onBlur={handleBlur} /><br/>
        {errors.name && touched.name ? (
                      <p>{errors.name}</p>
                    ) : null}

        Email:
        <input type="email" name="email" value={values.email} onChange={handleChange} onBlur={handleBlur} /><br/>
        {errors.email && touched.email ? (
                      <p className="form-error">{errors.email}</p>
                    ) : null}

        Password:
        <input type="password" name="password" value={values.password} onChange={handleChange} onBlur={handleBlur} /><br/>
        {errors.password && touched.password ? (
                      <p className="form-error">{errors.password}</p>
                    ) : null}

        Confirm Password:
        <input type="password" name="confirm_password" value={values.confirm_password} onChange={handleChange} onBlur={handleBlur} /><br/>
        {errors.confirm_password && touched.confirm_password ? (
                      <p className="form-error">{errors.confirm_password}</p>
                    ) : null}

        <input type="submit" value="Submit" disabled={!formik.isValid || formik.isSubmitting} />
      </form>
    </div>
  );
}

export default App;
