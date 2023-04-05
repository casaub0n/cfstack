import { Meta, StoryObj } from "@storybook/react";
import { ContentText } from "./ContentText";

const meta: Meta<typeof ContentText> = {
  title: "Content text",
  component: ContentText
}

export default meta;

type Story = StoryObj<typeof ContentText>;

export const Default: Story = {
  args: {
    children: "Help!"
  }
}