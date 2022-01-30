import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Widget from "./Widget";

export default {
  title: "Components/Widget",
  component: Widget,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Widget>;

const Template: ComponentStory<typeof Widget> = (args) => <Widget {...args} />;

export const Default = Template.bind({});
Default.args = {
  url: "https://guidde.vercel.app/",
};
