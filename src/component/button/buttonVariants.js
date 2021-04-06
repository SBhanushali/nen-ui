import { colors } from "../../config/theme";

const variantPrimary = {
  light: {
    color: colors.white,
    background: colors.blue[60],
    hoverBackground: colors.blue[70],
    activeBackground: colors.blue[80],
    borderColor: colors.blue[60],
  },
  dark: {
    background: colors.white,
    borderColor: colors.blue[60],
  },
};

const variantSecondary = {
  light: {
    color: colors.white,
    background: colors.gray[80],
    hoverBackground: colors.gray[60],
    activeBackground: colors.blue[100],
    borderColor: colors.gray[80],
  },
  dark: {
    background: colors.white,
    borderColor: colors.gray[80],
  },
};

const variantGhost = {
  light: {
    color: colors.blue[60],
    background: "transparent",
    hoverBackground: colors.blue[10],
    activeBackground: colors.blue[20],
    borderColor: colors.blue[60],
  },
  dark: {
    background: "transparent",
    borderColor: colors.blue[60],
  },
};

const variantDanger = {
  light: {
    color: colors.white,
    background: colors.red[60],
    hoverBackground: colors.red[70],
    activeBackground: colors.red[80],
    borderColor: colors.red[80],
  },
  dark: {
    background: colors.white,
    borderColor: colors.red[80],
  },
};

export const variants = {
  primary: variantPrimary,
  secondary: variantSecondary,
  ghost: variantGhost,
  danger: variantDanger,
};
