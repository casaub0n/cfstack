import type { Meta, StoryObj } from "@storybook/react";
import { ContentText } from "./ContentText";

const meta: Meta<typeof ContentText> = {
  title: "atoms/Content text",
  component: ContentText,
  parameters: {
    docs: {
      description: {
        component: "p tag",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof ContentText>;

export const Default: Story = {
  args: {
    children: "Help!",
  },
};