import React, { ComponentProps } from "react";
import { Story, Meta } from "@storybook/react";
import { Input } from "./Input";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Base Components/Input",
  component: Input,
} as Meta;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<ComponentProps<typeof Input>> = (args) => (
  <Input {...args} />
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  variant: "primary",
  label: "Name",
};

export const Secondary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Secondary.args = {
  variant: "secondary",
  label: "Name",
};

export const Small = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Small.args = {
  variant: "primary",
  label: "Name",
  size: "small",
};

export const Medium = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Medium.args = {
  variant: "primary",
  label: "Name",
};

export const Large = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Large.args = {
  variant: "primary",
  label: "Name",
  size: "large",
};

export const Error = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Error.args = {
  variant: "primary",
  label: "Name",
  disabled: true,
  defaultValue: "123",
  hasError: true,
};

export const Disabled = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Disabled.args = {
  variant: "primary",
  label: "Name",
  disabled: true,
};
