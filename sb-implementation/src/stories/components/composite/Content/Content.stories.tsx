import React, { ComponentProps } from "react";
import { Story, Meta } from "@storybook/react";
import { Content } from "./Content";

export default {
  title: "Composite Components/Content",
  component: Content,
} as Meta;

const Template: Story<ComponentProps<typeof Content>> = (args) => (
  <Content {...args} />
);

export const Default = Template.bind({});
Default.args = {};
