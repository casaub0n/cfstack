import { Meta, StoryObj } from "@storybook/react";
import { Layout } from "./Layout";

const meta: Meta<typeof Layout> = {
  title: "layout",
  component: Layout
}

export default meta;

type Story = StoryObj<typeof Layout>;

const rElement = (
  <main>
    <h1>Element title</h1>
    <p>element text</p>
  </main>
)

export const Default: Story = {
  name: "layout for Next.js",
  render: () => <>{Layout(rElement)}</>
}