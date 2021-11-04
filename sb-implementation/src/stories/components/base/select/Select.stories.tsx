import React, { ComponentProps } from "react";
import { Story, Meta } from "@storybook/react";
import { Select } from "./Select";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Base Components/Select",
  component: Select,
} as Meta;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<ComponentProps<typeof Select>> = (args) => (
  <Select
    {...args}
    optionItems={[
      { label: "Edificio Principal", value: "E01" },
      { label: "Comedor", value: "E02" },
      { label: "Biblioteca", value: "E03" },
      { label: "Parque", value: "P01" },
    ]}
  />
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  variant: "primary",
  label: "Sector",
  optionItems: [],
};

export const Secondary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Secondary.args = {
  variant: "secondary",
  label: "Sector",
};

export const Small = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Small.args = {
  variant: "primary",
  label: "Sector",
  size: "small",
};

export const Medium = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Medium.args = {
  variant: "primary",
  label: "Sector",
};

export const Large = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Large.args = {
  variant: "primary",
  label: "Sector",
  size: "large",
};

export const Error = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Error.args = {
  variant: "primary",
  label: "Sector",
  defaultValue: "E01",
  hasError: true,
};

export const Disabled = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Disabled.args = {
  variant: "primary",
  label: "Sector",
  disabled: true,
};
