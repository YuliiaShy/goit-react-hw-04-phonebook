import styled from 'styled-components';


const Items = styled.li`
    display: flex;
    justify-content: space-between;
`;
const Text = styled.p`
  font-weight: bold;
`;

const Button = styled.button`
 width: max-content;
height: max-content;
margin:  16px 0 16px 0;
    border-radius: 5px;
    color: #000;
    background-color: rgb(245, 248, 40);
  &:hover,
  &:focus {
    background-color: rgb(247, 19, 19);
  }
`;

export { Items, Text,  Button };
