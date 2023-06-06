import type { Meta, StoryObj } from "@storybook/react";
import { Header } from "./Header";

const meta = {
  title: "organisms/header",
  component: Header,
  parameters: {
    docs: {
      description: {
        component: "company name and logo",
      },
    },
  },
} satisfies Meta<typeof Header>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "Default Header",
  tags: ["header"],
};
