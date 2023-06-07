import { Meta, StoryObj } from "@storybook/react";

import { NavBar } from "./NavBar";

const meta: Meta<typeof NavBar> = {
  title: "organisms/navigation bar",
  component: NavBar,
};

export default meta;

type Story = StoryObj<typeof NavBar>;

export const Default: Story = {
  name: "Default navbar",
  tags: ["navbar"],
};
