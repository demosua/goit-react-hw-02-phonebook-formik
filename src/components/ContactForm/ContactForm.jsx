import React from "react";
import { Formik } from "formik";
import { StyledForm, Label, Input, StyledErrorMessage, Button } from './ContactForm.styled';
import * as yup from 'yup';
  
const patternName = ("^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$");
const schema = yup.object().shape({
  name: yup.string().required().matches(patternName, 'Please, enter text only!'),
  number: yup.number().typeError('Please, digits only!').integer().required().min(1000000, 'Please, enter 7 digits').max(9999999, 'Please, enter 7 digits'),
});

const initialValues = {
  name: '',
  number: '',
}

export const ContactForm = ({ onSubmit }) => {
  const handleSubmit = (values, { resetForm }) => {
    
    onSubmit(values);
    resetForm();
  }

  return (
    <Formik initialValues={initialValues} validationSchema={schema} onSubmit={handleSubmit}>
        <StyledForm>
        <Label htmlFor="1">
          Name
          </Label>
            <Input
              type="text"
              name="name"
              id="1"
              autoComplete="off"
              required
        />
        <StyledErrorMessage component="div" name="name" />
          <Label htmlFor="2">
          Number
           </Label>
            <Input
              type="tel"
              name="number"
              id="2"
              autoComplete="off"
              required
        />
        <StyledErrorMessage component="div" name="number" />
        <Button type="submit">add</Button>
        </StyledForm>
    </Formik>
  )
};

