import React, { useState } from 'react';
import { useFormik } from 'formik';
import './Page.css';



const ApplicationForm = () => {
  const formik = useFormik({
    initialValues: {
      title: '',
      thumbnail: '',
      documentsLink: '',
      amountRequested: '',
      description: '',
      contactDetails: '', 
      street: '',
      city: '',
      state: '',
      zipCode: '',
      termsAndConditionsChecked: false,
    },
    onSubmit: values => {
      console.log("Entered values:", values);
      // Handle form submission with values
    },
  });

  return (
    <div className="form">
      <form className="form-container" onSubmit={formik.handleSubmit}>
        <label className="form-label">
          Title:
          <input className="form-input" type="text" name="title" value={formik.values.title} onChange={formik.handleChange} required />
        </label>
        <label className="form-label">
          Thumbnail URL:
          <input className="form-input" type="text" name="thumbnailLink" value={formik.values.thumbnailLink} onChange={formik.handleChange} required />
        </label>
        <label className="form-label">
          Documents (PDF file link):
          <input className="form-input" type="text" name="documentsLink" value={formik.values.documentsLink} onChange={formik.handleChange} required />
        </label>
        <label className="form-label">
          Amount Requested [GETH]:
          <input className="form-input" type="number" name="amountRequested" value={formik.values.amountRequested} onChange={formik.handleChange} required />
        </label>
        <label className="form-label">
          Description:
          <textarea className="form-textarea" name="description" value={formik.values.description} onChange={formik.handleChange} required />
        </label>
        <label className="form-label">
          Contact Details:
          <input className="form-input" type="text" name="contactDetails" value={formik.values.contactDetails} onChange={formik.handleChange} required />
        </label>
        <label className="form-label">
          Address:
          <label className="form-label">
            Street:
            <input className="form-input" type="text" name="street" value={formik.values.street} onChange={formik.handleChange} required />
          </label>
          <label className="form-label">
            City:
            <input className="form-input" type="text" name="city" value={formik.values.city} onChange={formik.handleChange} required />
          </label>
          <label className="form-label">
            State:
            <input className="form-input" type="text" name="state" value={formik.values.state} onChange={formik.handleChange} required />
          </label>
          <label className="form-label">
            ZIP Code:
            <input className="form-input" type="text" name="zipCode" value={formik.values.zipCode} onChange={formik.handleChange} required />
          </label>
        </label>
        <label className="form-checkbox-label">
          <input className="form-checkbox" type="checkbox" name="termsAndConditionsChecked" checked={formik.values.termsAndConditionsChecked} onChange={formik.handleChange} required />
          I agree to the terms & conditions
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
  }

export default ApplicationForm;
