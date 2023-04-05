import { Meta, StoryObj } from "@storybook/react";
import { ContentText } from "./ContentText";
import React from "react";

const meta: Meta<typeof ContentText> = {
  title: "Content text",
  component: ContentText
}

export default meta;

type Story = StoryObj<typeof ContentText>;

export const Basic: Story = {
  args: {
    children: "Help!"
  }
}