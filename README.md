# nen-ui

A customizable react button component with different style variants and support for light and dark mode

## Installing Nen UI

```bash
npm i nen-ui
```

or

```bash
yarn add nen-ui
```

## Usage

To start using the components, please follow these steps:

```jsx
import { ThemeProvider } from "styled-components";
import { light } from "nen-ui";
import { Button } from "nen-ui"
.
.
.
<ThemeProvider theme={ light }>
    <Button {...args} />
</ThemeProvider>
```

## Examples

```jsx
    <Button variant="primary" size="lg">Primary Button</Button>

    //Icons from react-icons
    <Button variant="primary" icon={<IoAdd />}>
        Hello
    </Button>
```

## Props

| Name     | Type                                   | Description                         | Default |
| -------- | -------------------------------------- | ----------------------------------- | ------- |
| variant  | `primary` `secondary` `ghost` `danger` |                                     | -       |
| size     | `sm` `md` `lg`                         | Pass button size as per screen type | `md`    |
| children | `node`                                 | Button text                         | -       |
| icon     | `node`                                 | Pass Icon component                 | -       |
| align    | `left` `right`                         | Icon placement with text            | `left`  |
| title    | `string`                               | Icon description for tooltip        | -       |
| disabled | `boolean` or `disabled`                | Pass boolean or disabled keyword    | -       |

# Configure Theme

You can also configure the theme by extending theme and buttonTheme

```js
//theme.js
// Color Tokens
export const colors = {
  white: "#FFFFFF",
  black: "#000000",
  blue: {
    10: "#ECF2FF",
    20: "#D0E2FF",
    60: "#0F62FE",
    70: "#054ADA",
    80: "#002D9C",
  },
  gray: {
    30: "#C6C6C6",
    50: "#8D8D8D",
    60: "#4C4C4C",
    80: "#393939",
    100: "#161616",
  },
  red: {
    60: "#DA1E28",
    70: "#BA1B23",
    80: "#750E13",
  },
};
// Add different button sizes
export const sizes = {
  lg: {
    h: 48,
    fontSize: 14,
    paddingX: 16,
  },
  md: {
    h: 40,
    fontSize: 12,
    paddingX: 14,
  },
  sm: {
    h: 32,
    fontSize: 10,
    paddingX: 12,
  },
};
```

```js
//buttonTheme.js
//You can change or add more variants to buttonTheme
import { colors } from "./theme";

export const light = {
  base: colors.white,
  primary: {
    color: colors.white,
    background: colors.blue[60],
    hoverBackground: colors.blue[70],
    activeBackground: colors.blue[80],
    borderColor: colors.blue[60],
  },
  secondary: {
    color: colors.white,
    background: colors.gray[80],
    hoverBackground: colors.gray[60],
    activeBackground: colors.blue[100],
    borderColor: colors.gray[80],
  },
  ghost: {
    color: colors.blue[60],
    background: "transparent",
    hoverBackground: colors.blue[10],
    activeBackground: colors.blue[20],
    borderColor: colors.blue[60],
  },
  danger: {
    color: colors.white,
    background: colors.red[60],
    hoverBackground: colors.red[70],
    activeBackground: colors.red[80],
    borderColor: colors.red[80],
  },
};

export const dark = {
  base: colors.black,
  primary: {
    color: colors.white,
    background: colors.blue[60],
    hoverBackground: colors.blue[70],
    activeBackground: colors.blue[80],
    borderColor: colors.blue[60],
  },
  secondary: {
    color: colors.white,
    background: colors.gray[80],
    hoverBackground: colors.gray[60],
    activeBackground: colors.blue[100],
    borderColor: colors.gray[80],
  },
  ghost: {
    color: colors.blue[60],
    background: "transparent",
    hoverBackground: colors.blue[10],
    activeBackground: colors.blue[20],
    borderColor: colors.blue[60],
  },
  danger: {
    color: colors.white,
    background: colors.red[60],
    hoverBackground: colors.red[70],
    activeBackground: colors.red[80],
    borderColor: colors.red[80],
  },
};
```
