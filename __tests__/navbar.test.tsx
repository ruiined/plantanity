import { Navbar } from "../pages/home/navbar";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("Navbar", () => {
  it("renders a heading", () => {
    render(<Navbar />);

    const heading = screen.getByRole("heading", {
      name: /plantanity/i,
    });

    expect(heading).toBeInTheDocument();
  });
});
