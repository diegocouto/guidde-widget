import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import WidgetButton from "./WidgetButton";

export default {
  title: "Components/WidgetButton",
  component: WidgetButton,
  parameters: {
    layout: "centered",
  },
} as ComponentMeta<typeof WidgetButton>;

const Template: ComponentStory<typeof WidgetButton> = (args) => (
  <WidgetButton {...args} />
);

export const Default = Template.bind({});
Default.args = {};
