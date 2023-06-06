import type { Meta, StoryObj } from "@storybook/react";
import { Main } from "./Main";

const meta = {
  title: "molecules/main",
  component: Main,
  parameters: {
    docs: {
      description: {
        component: "company info",
      },
    },
  },
} satisfies Meta<typeof Main>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "Default Main",
  tags: ["main"],
};
