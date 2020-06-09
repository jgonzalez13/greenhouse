import React from 'react';
import { ErrorMessage, Field } from 'formik';

const FormField = ({ name, placeholder, type }) => (
  <>
    <label htmlFor={name}>{name}</label>
    <div>
      <Field className="inputsLine" name={name} type={type} placeholder={placeholder} />
      <ErrorMessage className="Form-Error ml-2 text-danger" component="span" name={name} />
    </div>
  </>
);

export default FormField;
