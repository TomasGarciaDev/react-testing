import { screen, render } from "../../test-utils";
import { MuiMode } from "./Mui-mode";

beforeEach(() => {
  render(<MuiMode />);
});

describe("MuiMode", () => {
  test("renders text correctly", () => {
    const headingElement = screen.getByRole("heading");
    expect(headingElement).toHaveTextContent("dark mode");
  });
});
