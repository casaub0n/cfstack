import { Meta, StoryObj } from "@storybook/react";

import { Layout } from "./Layout";

const meta: Meta<typeof Layout> = {
  title: "layout/layout",
  component: Layout,
  parameters: {
    docs: {
      description: {
        component: "header and footer",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Layout>;

const rElement = (
  <main>
    <h1>Element title</h1>
    <p>element text</p>
  </main>
);

export const Default: Story = {
  name: "layout for Next.js",
  parameters: {
    children: rElement,
  },
};
