import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import FormField from '../../../shared/FormField';

const validations = yup.object().shape({
  name: yup.string().required(),
  description: yup.string().min(200).required(),
  location: yup.string().required(),
});

const FormNave = () => {
  const onLoggin = (values) => {
    console.log(values);
  };
  const initialValues = { name: '', description: '', location: '' };

  return (
    <Formik validationSchema={validations} initialValues={initialValues} onSubmit={onLoggin}>
      {() => (
        <form>
          <FormField name="name" type="text" placeholder="Enter name" />
          <FormField name="location" type="text" placeholder="Enter location" />
          <FormField name="description" type="text" placeholder="Enter description" />
        </form>
      )}
    </Formik>
  );
};

export default FormNave;
