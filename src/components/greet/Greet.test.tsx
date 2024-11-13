import { render, screen } from "@testing-library/react";
import Greet from "./Greet";

test("Greet renders correnctly with Hello", () => {
  render(<Greet />);
  const textElement = screen.getByText(/hello/i);
  expect(textElement).toBeInTheDocument();
});
