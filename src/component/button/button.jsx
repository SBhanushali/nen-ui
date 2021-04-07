import React from "react";
import PropTypes from "prop-types";
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

const Icon = styled.span`
  ${(props) =>
    props.isOnlyIcon &&
    `
  margin-right: ${props.align !== "right" ? 5 : ""}px;
  margin-left: ${props.align === "right" ? 5 : ""}px;
`}
`;

const Button = ({ variant, size, children, icon, align, ...rest }) => {
  const isOnlyIcon = children && true;
  return (
    <StyledButton variant={variant} size={size} {...rest}>
      {icon && align !== "right" && <Icon isOnlyIcon={isOnlyIcon}>{icon}</Icon>}
      {children}
      {icon && align && align === "right" && (
        <Icon isOnlyIcon={isOnlyIcon} align={align}>
          {icon}
        </Icon>
      )}
    </StyledButton>
  );
};

export default Button;

Button.defaultProps = {
  size: "md",
};

Button.propTypes = {
  variant: PropTypes.string,
  size: PropTypes.oneOf(["sm", "md", "lg"]).isRequired,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};
