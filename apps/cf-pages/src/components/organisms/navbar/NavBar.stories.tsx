import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { NavBar } from "./NavBar";

type T = typeof NavBar;
type Story = ComponentStoryObj<T>;

export default {
  component: () => <NavBar />,
} as ComponentMeta<T>;

export const Default: Story = {
  storyName: "Nav Bar",
};
