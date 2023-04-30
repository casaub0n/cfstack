import { Meta, StoryObj } from "@storybook/react";
import { ArticleSection } from "./ArticleSection";

const meta: Meta<typeof ArticleSection> = {
  title: "atoms/Article Section",
  component: ArticleSection,
  parameters: {
    docs: {
      description: {
        component: "section tag, it is defined h2, h3 and list",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof ArticleSection>;

export const Default: Story = {
  args: {
    children: (
      <>
        <h2>Article Example: 記事画面</h2>
        <p></p>
      </>
    ),
  },
};
