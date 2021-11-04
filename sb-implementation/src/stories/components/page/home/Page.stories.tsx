import React, { ComponentProps } from "react";
import { Story, Meta } from "@storybook/react";
import { Page } from "./Page";
import * as HeaderStories from "../../composite/Header/Header.stories";

export default {
  title: "Page Components/Page",
  component: Page,
} as Meta;

const Template: Story<ComponentProps<typeof Page>> = (args) => (
  <Page {...args} />
);

export const Default = Template.bind({});
Default.args = {
  // More on composing args: https://storybook.js.org/docs/react/writing-stories/args#args-composition
  ...HeaderStories.Default.args,
};
