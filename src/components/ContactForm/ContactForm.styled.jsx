import { Form, Field, ErrorMessage } from 'formik';
import styled from '@emotion/styled';

export const StyledForm = styled(Form)`

  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

export const Label = styled.label`
display: block;

`;


export const Input = styled(Field)`
display: block;
  width: 100%;
  margin-bottom: 10px;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  resize: vertical;
`;

export const Button = styled.button`
display: block;
margin: 0 auto;
  background-color: #04AA6D;
  color: white;
  padding: 12px 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #45a049;
    }
`;

export const StyledErrorMessage = styled(ErrorMessage)`
display: block;
width: 100%;
  font-size: 16px;
  line-height: 1.16;
  color: #CD5C5C;
`;