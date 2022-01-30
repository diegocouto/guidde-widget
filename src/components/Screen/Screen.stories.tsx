import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Screen from "./Screen";

export default {
  title: "Components/Screen",
  component: Screen,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Screen>;

const Template: ComponentStory<typeof Screen> = (args) => <Screen {...args} />;

export const Default = Template.bind({});
Default.args = {
  url: "https://guidde.vercel.app/",
};
