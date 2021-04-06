import React from "react";
import Button from "./button";

export default {
  title: "Button",
  component: Button,
  argTypes: {
    size: { control: { type: "select", options: ["sm", "md", "lg"] } },
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  variant: "primary",
  size: "md",
  children: "Primary Button",
};

export const Secondary = Template.bind({});

Secondary.args = {
  variant: "secondary",
  size: "md",
  children: "Secondary Button",
};

export const Ghost = Template.bind({});

Ghost.args = {
  variant: "ghost",
  size: "md",
  children: "Ghost Button",
};

export const Danger = Template.bind({});

Danger.args = {
  variant: "danger",
  size: "md",
  children: "Danger Button",
};

export const Custom = Template.bind({});

Custom.args = {
  color: "#000000",
  bgColor: "yellow",
  size: "md",
  children: "Custom Button",
};

export const Disabled = Template.bind({});

Disabled.args = {
  variant: "primary",
  children: "Disabled Button",
  disabled: true,
};
