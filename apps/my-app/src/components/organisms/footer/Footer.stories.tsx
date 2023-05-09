import { Meta, StoryObj } from "@storybook/react";
import { Footer } from "./Footer";

const meta: Meta<typeof Footer> = {
  title: "organisms/footer",
  component: Footer,
  parameters: {
    docs: {
      description: {
        component: "company info",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Footer>;

export const Default: Story = {
  name: "Default footer",
  tags: ["footer"],
};
