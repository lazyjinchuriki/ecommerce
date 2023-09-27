import Link from "next/link";
import styled from "styled-components";
import { ButtonStyles } from "./Button";

const StyledLinks = styled(Link)`
  ${ButtonStyles}
`;

const ButtonLinks = ({ ...props }) => {
  return <StyledLinks {...props} />;
};

export default ButtonLinks;
