import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../components/AddCategory";
/* eslint-disable no-undef */
describe("test for the component addcateogry", () => {
  test("change value for the input value", () => {
    render(<AddCategory onNewValue={() => {}} />);

    const input = screen.getByRole("textbox");

    fireEvent.input(input, { target: { value: "Vegeta" } });
    expect(input.value).toBe("Vegeta");
  });

  test("must call onNewCategory if the input has a value of", () => {
    const inputValue = "Vegeta";

    render(<AddCategory onNewValue={() => {}} />);

    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");

    fireEvent.input(input, { target: { value: inputValue } });
    fireEvent.submit(form);
    // screen.debug();
    expect(input.value).toBe("");
  });
  test("must call onNewCategory if the input has a value", () => {
    const inputValue = "Vegeta";
    const onNewCategory = jest.fn();

    render(<AddCategory onNewValue={onNewCategory} />);

    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");

    fireEvent.input(input, { target: { value: inputValue } });
    fireEvent.submit(form);

    expect(input.value).toBe("");
    expect(onNewCategory).toHaveBeenCalled();
    expect(onNewCategory).toHaveBeenCalledTimes(1);
    expect(onNewCategory).toHaveBeenCalledWith(inputValue);
  });

  test("must not call in newCategory if input is empty", () => {
    const onNewCategory = jest.fn();

    render(<AddCategory onNewValue={onNewCategory} />);

    const form = screen.getByRole("form");
    fireEvent.submit(form);

    expect(onNewCategory).not.toHaveBeenCalled();
    expect(onNewCategory).toHaveBeenCalledTimes(0);
  });
});
