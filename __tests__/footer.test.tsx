import { Footer } from "../pages/home/footer";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("Footer", () => {
  it("renders a footer", () => {
    render(<Footer />);

    const footer = screen.getByRole("link", {
      name: /plantanity/i,
    });

    expect(footer).toBeInTheDocument();
  });
});
