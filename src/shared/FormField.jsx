import React from 'react';
import { Field } from 'formik';
import { FormGroup, Input } from 'reactstrap';

const FormField = ({ disabled, name, placeholder, component, rows }) => (
  <FormGroup>
    <Field name={name}>
      {({ field, form, meta }) => (
        <>
          <Input
            {...field}
            className={`w-100 inputFormik ${meta.touched && meta.error ? 'RojoCoqueto-border' : ''}`}
            disabled={disabled}
            placeholder={placeholder}
            type={component}
            rows={rows}
          />
        </>
      )}
    </Field>
  </FormGroup>
);

export default FormField;
