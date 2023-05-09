import { Meta, StoryObj } from "@storybook/react";
import { Header } from "./Header";

const meta: Meta<typeof Header> = {
  title: "organisms/header",
  component: Header,
  parameters: {
    docs: {
      description: {
        component: "company name and logo",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Header>;

export const Default: Story = {
  name: "Default Header",
  tags: ["header"],
};
