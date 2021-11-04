import React, { ComponentProps } from "react";
import { Story, Meta } from "@storybook/react";
import { Button } from "./Button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Base Components/Button",
  component: Button,
} as Meta;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<ComponentProps<typeof Button>> = (args) => (
  <Button {...args} />
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  variant: "primary",
  label: "Button",
  onClick: () => {
    console.log("asd");
  },
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: "secondary",
  label: "Button",
  onClick: () => {
    console.log("asd");
  },
};

export const Large = Template.bind({});
Large.args = {
  variant: "primary",
  size: "large",
  label: "Button",
  onClick: () => {
    console.log("asd");
  },
};

export const Small = Template.bind({});
Small.args = {
  variant: "primary",
  size: "small",
  label: "Button",
  onClick: () => {
    console.log("asd");
  },
};

export const Disabled = Template.bind({});
Disabled.args = {
  variant: "primary",
  label: "Button",
  disabled: true,
  onClick: () => {
    console.log("asd");
  },
};
