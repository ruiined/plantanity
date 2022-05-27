import { Tasks } from "../pages/tasks/tasks";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";

describe("Tasks", () => {
  test("task input", () => {
    render(<Tasks />);

    const input = screen.queryByTestId("task-input");

    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute("type", "text");
    expect(input).toHaveAccessibleName();
    expect(input.value).toBe("");

    fireEvent.change(input, { target: { value: "test" } });

    expect(input).toHaveDisplayValue("test");

    // addButton.click();
    // expect(resultArea).toHaveTextContent("13");
  });
});
