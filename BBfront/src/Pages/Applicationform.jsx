import React from 'react'
import { useFormik } from 'formik';
const Applicationform = () => {
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    onSubmit: values => {
      // Handle form submission with values
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <label>
        Username:
        <input type="text" name="username" value={formik.values.username} onChange={formik.handleChange} />
      </label>
      <label>
        Password:
        <input type="password" name="password" value={formik.values.password} onChange={formik.handleChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Applicationform