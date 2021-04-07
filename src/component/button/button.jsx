import React from "react";
import PropTypes from "prop-types";
import { sizes, colors } from "../../config/theme";
import styled from "styled-components";

const StyledButton = styled.button`
  height: ${(props) => (props.size ? sizes[props.size].h : "")}px;
  font-size: ${(props) => (props.size ? sizes[props.size].fontSize : "")}px;
  padding: 0 ${(props) => (props.size ? sizes[props.size].paddingX : "")}px;
  background: ${({ theme, variant, bgColor }) =>
    variant ? theme[variant].background : bgColor};
  color: ${({ theme, variant, color }) =>
    variant ? theme[variant].color : color};
  border: none;
  &:hover {
    background: ${({ theme, variant, bgColor }) =>
      variant ? theme[variant].hoverBackground : bgColor};
  }
  &:active {
    background: ${({ theme, variant, bgColor }) =>
      variant ? theme[variant].activeBackground : bgColor};
  }
  &:focus {
    border: 1px solid ${colors.white};
    outline: 2px solid
      ${({ theme, variant, bgColor }) =>
        variant ? theme[variant].borderColor : bgColor};
  }
  &:disabled {
    cursor: not-allowed;
    color: ${colors.gray[50]};
    background-color: ${({ variant }) =>
      variant === "ghost" ? "transparent" : colors.gray[30]};
  }
`;

const Icon = styled.span`
  ${({ isOnlyIcon, align }) =>
    isOnlyIcon &&
    `
  margin-right: ${align !== "right" ? 5 : ""}px;
  margin-left: ${align === "right" ? 5 : ""}px;
`}
`;

const Button = ({ variant, size, children, icon, align, title, ...rest }) => {
  const isOnlyIcon = children && true;
  return (
    <StyledButton variant={variant} size={size} title={title} {...rest}>
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
