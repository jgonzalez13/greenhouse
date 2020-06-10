import React from 'react';
import { ErrorMessage, Field } from 'formik';
import { FormGroup } from 'reactstrap';

const FormField = ({ name, placeholder, component, rows }) => (
  <FormGroup>
    <Field className="w-100" name={name} placeholder={placeholder} component={component} rows={rows} />
    <ErrorMessage className="Form-Error ml-2 text-danger" component="span" name={name} />
  </FormGroup>
);

export default FormField;
