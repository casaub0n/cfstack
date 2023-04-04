import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { EmptyRoom } from './EmptyRoom'

type T = typeof EmptyRoom;
type Story = ComponentStoryObj<T>

export default {
  component: () => <EmptyRoom />
} as ComponentMeta<T>

export const Default: Story = {
  name: "空き部屋確認"
};