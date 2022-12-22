import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

describe("Atoms", () => {
  function asserts(container: HTMLElement) {
    expect(container).toBeAtom();
    expect(container).not.toBeMolecule();
    expect(container).not.toBeOrganism();
    expect(container).not.toBeTemplate();
  }
  test("<p>(role=none)", () => {
    const { container } = render(<p>test</p>);
    asserts(container);
  });
  test("<h1>(role=heading)", () => {
    const { container } = render(<h1>test</h1>);
    asserts(container);
  });
  test("<a>(role=link)", () => {
    const { container } = render(<a href="#">test</a>);
    asserts(container);
  });
  test("<button>(role=button)", () => {
    const { container } = render(<button>test</button>);
    asserts(container);
  });
  test("<input>(role=textbox)", () => {
    const { container } = render(<input type="text" />);
    asserts(container);
  });
  test("<textarea>(role=textbox)", () => {
    const { container } = render(<textarea />);
    asserts(container);
  });
  test("<div>(single role)", () => {
    const { container } = render(
      <div>
        {/* disable eslint. because this is test for testing custom matcher. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img alt="picture" />
        <p>test</p>
      </div>
    );
    asserts(container);
  });
  test("<label>(role=none)", () => {
    const { container } = render(
      <label>
        <input type="checkbox" id="check" />
        Test
      </label>
    );
    const { container: htmlFor } = render(
      <>
        <label htmlFor="check">Test</label>
        <input type="checkbox" id="check" />
      </>
    );
    asserts(container);
    asserts(htmlFor);
  });
  test("text(role=none)", () => {
    const { container } = render(
      <div>
        <p>test</p>
      </div>
    );
    asserts(container);
  });
});