import { Meta, StoryObj } from "@storybook/react";
import { Top } from "./Top";

const meta: Meta<typeof Top> = {
  title: "Top",
  component: Top,
};

export default meta;

type Story = StoryObj<typeof Top>;

export const Default: Story = {
  name: "Default Top",
  storyName: "Default",
  tags: ["Top"],
};
