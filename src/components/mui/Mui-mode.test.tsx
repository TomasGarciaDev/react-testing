import { screen, render } from "@testing-library/react";
import { MuiMode } from "./Mui-mode";
import { AppProviders } from "../../providers/app-providers";

beforeEach(() => {
  render(<MuiMode />, {
    wrapper: AppProviders,
  });
});

describe("MuiMode", () => {
  test("renders text correctly", () => {
    const headingElement = screen.getByRole("heading");
    expect(headingElement).toHaveTextContent("dark mode");
  });
});
