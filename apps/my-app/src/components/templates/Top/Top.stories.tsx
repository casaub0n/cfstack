import { Meta, StoryObj } from "@storybook/react";
import { Top } from "./Top";

const meta: Meta<typeof Top> = {
  title: "templates/Top",
  component: Top,
  parameters: {
    docs: {
      description: {
        component: "exactly top page",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Top>;

export const Default: Story = {
  name: "Default Top",
  tags: ["Top"],
};
