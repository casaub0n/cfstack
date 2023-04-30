import { Meta, StoryObj } from "@storybook/react";
import { Main } from "./Main";

const meta: Meta<typeof Main> = {
  title: "molecules/main",
  component: Main,
  parameters: {
    docs: {
      description: {
        component: "company info",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Main>;

export const Default: Story = {
  name: "Default Main",
  tags: ["main"],
};
