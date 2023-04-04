import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { Main } from "./Main";

type T = typeof Main;
type Story = ComponentStoryObj<T>;

export default {
  component: () => <Main />,
} as ComponentMeta<T>;

export const Default: Story = {
  name: "Main",
};
