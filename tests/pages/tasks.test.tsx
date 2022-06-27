import { fireEvent, render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import "@testing-library/jest-dom";
import { Tasks } from "@pages/tasks";

// describe("Tasks", () => {
//   test("task input", () => {
//     render(
//       <RecoilRoot>
//         <Tasks />
//       </RecoilRoot>
//     );

//     const input = screen.queryByTestId("task-input");

//     expect(input).toBeInTheDocument();
//     expect(input).toHaveAttribute("type", "text");
//     expect(input).toHaveAccessibleName();
//     expect(input.value).toBe("");

//     fireEvent.change(input, { target: { value: "test" } });

//     expect(input).toHaveDisplayValue("test");

//     // addButton.click();
//     // expect(resultArea).toHaveTextContent("13");
//   });
// });
