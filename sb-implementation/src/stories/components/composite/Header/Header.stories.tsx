import React, { ComponentProps } from "react";
import { Story, Meta } from "@storybook/react";
import { Header } from "./Header";

export default {
  title: "Composite Components/Header",
  component: Header,
} as Meta;

const Template: Story<ComponentProps<typeof Header>> = (args) => (
  <Header {...args} />
);

export const Default = Template.bind({});
Default.args = {
  user: "Alejandro Minacori",
  title: "Nueva órden de trabajo",
};
