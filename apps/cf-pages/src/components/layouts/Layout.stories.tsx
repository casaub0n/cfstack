import { Layout } from "./Layout";

import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "layout/layout",
  component: Layout,
  parameters: {
    docs: {
      description: {
        component: "header and footer",
      },
    },
  },
} satisfies Meta<typeof Layout>;

export default meta;

/**
 * TODO: fix typeof meta, but no idea of args properties
 */
type Story = StoryObj<typeof Layout>;

const rElement = (
  <main>
    <h1>Element title</h1>
    <p>element text</p>
  </main>
);

export const Default: Story = {
  name: "layout for Next.js",
  render: () => <>{Layout(rElement)}</>,
};
