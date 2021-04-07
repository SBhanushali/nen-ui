import React from "react";
import Button from "./button";
import { IoAdd } from "react-icons/io5";

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

export const LeftIconButton = Template.bind({});

LeftIconButton.args = {
  variant: "ghost",
  children: "Primary Button",
  icon: <IoAdd />,
};

export const RightIconButton = Template.bind({});

RightIconButton.args = {
  variant: "primary",
  children: "Primary Button",
  icon: <IoAdd />,
  align: "right",
};

export const IconButton = Template.bind({});

IconButton.args = {
  variant: "primary",
  icon: <IoAdd />,
};
