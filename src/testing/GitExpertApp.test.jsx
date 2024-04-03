import { render, screen } from "@testing-library/react";
import { GifExpertApp } from "../GitExpertApp";
/* eslint-disable no-undef */
describe("test for the component GitExpertApp", () => {
  test("Render component succesfully", () => {
    const { container } = render(<GifExpertApp />);
    expect(container).toMatchSnapshot();
    screen.debug();
  });
  test("Render title for the component", () => {
    const { container } = render(<GifExpertApp />);
    expect(container).toMatchSnapshot();
    screen.debug();
  });
});
