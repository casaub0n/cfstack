import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { Footer } from './Footer'

type T = typeof Footer;
type Story = ComponentStoryObj<T>

export default {
  component: () => <Footer />
} as ComponentMeta<T>

export const Default: Story = {
  storyName: "Footer"
};