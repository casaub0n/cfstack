import { Meta, StoryObj } from "@storybook/react";
import { Main } from "./Main";

const meta: Meta<typeof Main> = {
  title: "main",
  component: Main,
};

export default meta;

type Story = StoryObj<typeof Main>;

export const Default: Story = {
  name: "Default Main",
  storyName: "Default",
  tags: ["main"],
};
