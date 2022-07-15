import styled from 'styled-components';

const Forms = styled.form`
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 20px;
  border: 1px solid black;
  border-radius: 5px;
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  color: rgb(0, 157, 255);
  font-weight: bold;
`;

const Input = styled.input`
  margin: 10px;
`;

const SubmitButton = styled.button`
  border-radius: 5px;
  background-color: rgb(245, 248, 40);
`;

export { Forms, Label, Input, SubmitButton };