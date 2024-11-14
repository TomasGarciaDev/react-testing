import { render, screen } from "@testing-library/react";
import Greet from "./Greet";

describe("Greet", () => {
  test("renders correnctly", () => {
    render(<Greet />);
    const textElement = screen.getByText(/hello/i);
    expect(textElement).toBeInTheDocument();
  });

  test("renders with a name", () => {
    const name = "Tomas";
    render(<Greet name={name} />);
    const textElement = screen.getByText(`Hello ${name}`);
    expect(textElement).toBeInTheDocument();
  });
});
