import { composeStories } from "@storybook/react";
import { render } from "@testing-library/react";
import * as stories from "./ContentText.stories";

const { Default } = composeStories(stories);

describe("src/component/atoms/ContentText.test.tsx", () => {
  test("Atomである", () => {
    const { getByRole } = render(<Default />);
    expect(getByRole("article")).toHaveTextContent("Help!");
  });
});