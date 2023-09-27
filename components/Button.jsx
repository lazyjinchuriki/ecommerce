import React from "react";
import styled, { css } from "styled-components";

export const ButtonStyles = css`
 padding: 5px 10px;
  border: none;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  text-decoration: none;

  &:hover {
    transform: scale(1.05);
    transition: all 0.1s ease-in-out;
  }

  ${(props) =>
    props.black &&
    `color: #fff;
    background-color: #000;
    display: block;
    width: 100%;
  `}


  ${(props) =>
    props.lg &&
    `font-size: 1.3rem;
  padding: 10px 20px;`}

  ${(props) =>
    props.background &&
    `background-color: #fcfcfc;
    font-weight: bold;
  border: 2px solid #fcfcfc`}

  ${(props) =>
    props.border &&
    `border: 2px solid #fcfcfc;
  color: #fcfcfc;
  `}
}`;

const StyledButton = styled.button`
  ${ButtonStyles}
`;

const Button = ({ children, ...rest }) => {
  return (
    <>
      <StyledButton {...rest}>{children}</StyledButton>
    </>
  );
};

export default Button;
