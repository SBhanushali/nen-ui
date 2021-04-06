import React from "react";
import { sizes, colors } from "../../config/theme";
import { variants } from "./buttonVariants";
import styled from "styled-components";

const mode = "light";

const StyledButton = styled.button`
  height: ${(props) => (props.size ? sizes[props.size].h : "")}px;
  font-size: ${(props) => (props.size ? sizes[props.size].fontSize : "")}px;
  padding: 0 ${(props) => (props.size ? sizes[props.size].paddingX : "")}px;
  background: ${(props) =>
    props.variant ? variants[props.variant][mode].background : props.bgColor};
  color: ${(props) =>
    props.variant ? variants[props.variant][mode].color : props.color};
  border: none;
  &:hover {
    background: ${(props) =>
      props.variant
        ? variants[props.variant][mode].hoverBackground
        : props.bgColor};
  }
  &:active {
    background: ${(props) =>
      props.variant
        ? variants[props.variant][mode].activeBackground
        : props.bgColor};
  }
  &:focus {
    border: 1px solid ${colors.white};
    outline: 2px solid
      ${(props) =>
        props.variant
          ? variants[props.variant][mode].borderColor
          : props.bgColor};
  }
  &:disabled {
    cursor: not-allowed;
    color: ${colors.gray[50]};
    background-color: ${(props) =>
      props.variant === "ghost" ? "transparent" : colors.gray[30]};
  }
`;

const Button = ({ variant, size, children, ...rest }) => {
  return (
    <StyledButton variant={variant} size={size} {...rest}>
      {children}
    </StyledButton>
  );
};

export default Button;
