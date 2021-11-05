import React, { ComponentProps } from "react";
import { Story, Meta } from "@storybook/react";
import { Sidebar } from "./Sidebar";

export default {
  title: "Composite Components/Sidebar",
  component: Sidebar,
} as Meta;

const Template: Story<ComponentProps<typeof Sidebar>> = (args) => (
  <Sidebar {...args} />
);

export const Default = Template.bind({});
Default.args = {
  optionItems: [
    "Actividades",
    "Stock",
    "O. Trabajo",
    "Preventivo",
    "Productos",
    "Usuarios",
    "Gestión",
    "Salir",
  ],
  title: "GAMS",
};
