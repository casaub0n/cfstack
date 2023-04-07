import { Meta, StoryObj } from "@storybook/react";
import { NavBar } from "./NavBar";

const meta: Meta<typeof NavBar> = {
  title: "navigation bar",
  component: NavBar,
};

export default meta;

type Story = StoryObj<typeof NavBar>;

export const Default: Story = {
  name: "Default navbar",
  storyName: "Default",
  tags: ["navbar"],
};
