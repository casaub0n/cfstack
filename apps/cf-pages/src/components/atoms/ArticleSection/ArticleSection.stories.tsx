import React from "react";
import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { ArticleSection } from "./ArticleSection";

type T = typeof ArticleSection;
type Story = ComponentStoryObj<T>;

export default {
  component: () => (
      <ArticleSection>
        <h2>Test</h2>
        <p>article section</p>
      </ArticleSection>
    ),
} as ComponentMeta<T>;

export const Default: Story = {
  name: "テキスト",
};
