import styled from 'styled-components';

const Forms = styled.form`
  padding: 10px;
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
  margin: 10px;
  cursor: pointer;
  border-radius: 4px;
  background-color: rgb(245, 248, 40);
`;

export { Forms, Label, Input, SubmitButton };