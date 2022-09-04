import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { TopMain } from "./TopMain";

type T = typeof TopMain;
type Story = ComponentStoryObj<T>;

export default {
  component: TopMain,
} as ComponentMeta<T>;

export const Default: Story = {};
