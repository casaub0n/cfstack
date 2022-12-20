import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

describe("Atoms", () => {
  function asserts(container: HTMLElement) {
    expect(container).toBeAtom();
    expect(container).not.toBeMolecule();
  }
  test("<p>(role=none)", () => {
    const { container } = render(<p>test</p>);
    asserts(container);
  });
});