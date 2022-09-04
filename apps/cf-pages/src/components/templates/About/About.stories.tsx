import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { About } from "./About";

type T = typeof About;
type Story = ComponentStoryObj<T>;

export default {
  component: About,
} as ComponentMeta<T>;

export const Default: Story = {};
