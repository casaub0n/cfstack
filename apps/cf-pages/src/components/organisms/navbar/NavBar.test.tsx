import { composeStories } from "@storybook/react";
import { render } from "@testing-library/react";
import * as stories from "./NavBar.stories";

const { Default } = composeStories(stories);

describe("src/components/organisms/navbar/NavBar.test.tsx", () => {
  test("Organism", () => {
    const { container } = render(<Default />);
    expect(container).toBeOrganism();
  });
  test("[role=banner]", () => {
    const { getByRole } = render(<Default />)
    expect(getByRole("banner")).toBeInTheDocument();
  })
});
