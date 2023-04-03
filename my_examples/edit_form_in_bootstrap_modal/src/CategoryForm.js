import React from 'react';
import { useFormik } from "formik";
import { validationSchema } from "./schemas";
const initialValues = {
  name: "",
  spanish_name: "",
};
const CategoryForm = () => {
  let useFormikConfig = {
    initialValues,
    validationSchema,
    onSubmit: (values, action) => {
      console.log(values);
      action.resetForm();
    },
  };
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik(useFormikConfig);
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Enter category name (en)" value={values.name} onChange={handleChange} onBlur={handleBlur} />
        <br/>
        {errors.name && touched.name ? (
                      <p>{errors.name}</p>
                    ) : null}
        <br/>

        <input type="text" name="spanish_name" placeholder="Enter category name (sp)" value={values.spanish_name} onChange={handleChange} onBlur={handleBlur} />
        <br/>
        {errors.spanish_name && touched.spanish_name ? (
                      <p>{errors.spanish_name}</p>
                    ) : null}
        <br/>
        
        <input type="submit" value="Submit" />
      </form>
    </>
  )
}
export default CategoryForm;