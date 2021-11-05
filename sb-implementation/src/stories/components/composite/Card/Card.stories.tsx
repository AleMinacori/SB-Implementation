import React, { ComponentProps } from "react";
import { Story, Meta } from "@storybook/react";
import { Card } from "./Card";

export default {
  title: "Composite Components/Card",
  component: Card,
} as Meta;

const Template: Story<ComponentProps<typeof Card>> = (args) => (
  <Card {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  variant: "primary",
  children: <h2>Esto es un ejemplo de contenido</h2>,
  title: "Nueva Orden de Trabajo",
  subtitle: "Aqui puede crear las órdenes de trabajo",
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: "secondary",
  children: <h2>Esto es un ejemplo de contenido</h2>,
  title: "Nueva Orden de Trabajo",
  subtitle: "Aqui puede crear las órdenes de trabajo",
};

export const Small = Template.bind({});
Small.args = {
  variant: "primary",
  children: <h2>Esto es un ejemplo de contenido</h2>,
  title: "Nueva Orden de Trabajo",
  subtitle: "Aqui puede crear las órdenes de trabajo",
  size: "small",
};

export const Big = Template.bind({});
Big.args = {
  variant: "primary",
  children: <h2>Esto es un ejemplo de contenido</h2>,
  title: "Nueva Orden de Trabajo",
  subtitle: "Aqui puede crear las órdenes de trabajo",
  size: "big",
};

export const Large = Template.bind({});
Large.args = {
  variant: "primary",
  children: <h2>Esto es un ejemplo de contenido</h2>,
  title: "Nueva Orden de Trabajo",
  subtitle: "Aqui puede crear las órdenes de trabajo",
  size: "large",
};
