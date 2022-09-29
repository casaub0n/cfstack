import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { Layout } from "./Layout";

type T = typeof Layout;
type Story = ComponentStoryObj<T>;

export default {
  component: () => <>{Layout(<main />)}</>,
} as ComponentMeta<T>;

export const Default: Story = {
  storyName: "ユーザー作成",
};