import styled from "styled-components";

const StyledInput = styled.input`
  padding: 1rem 1.5rem;
  width: 85%;
  margin: 1rem 0;
  border-radius: 10px;
  border: none;
  background-color: #f5f5f5;
`;

export default function Input(props) {
  return <StyledInput {...props} />;
}
