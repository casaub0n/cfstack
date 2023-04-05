import { Meta, StoryObj } from "@storybook/react";
import { ArticleSection } from "./ArticleSection";
import React from "react";

const meta: Meta<typeof ArticleSection> = {
  title: "Article Section",
  component: ArticleSection
}

export default meta;

type Story = StoryObj<typeof ArticleSection>;

export const Basic: Story = {
  args: {
    children: (
      <>
        <h2>Article Example: 記事画面</h2>
        <p>記事内容です。</p>
        <ul>
          <li>テスト1</li>
          <li>テスト2</li>
        </ul>
      </>
    )
  }
}
