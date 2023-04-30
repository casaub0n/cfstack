import { Meta, StoryObj } from "@storybook/react";
import { EmptyRoom } from "./EmptyRoom";

const meta: Meta<typeof EmptyRoom> = {
  title: "molecules/empty room",
  component: EmptyRoom,
  parameters: {
    docs: {
      description: {
        component: "with next/image",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof EmptyRoom>;

export const Default: Story = {
  name: "Default empty room",
  tags: ["emptyroom"],
};
