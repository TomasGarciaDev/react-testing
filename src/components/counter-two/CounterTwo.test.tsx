import { render, screen } from "@testing-library/react";
import { CounterTwo } from "./CounterTwo";
import user from "@testing-library/user-event";

describe("Counter two", () => {
  test("renders correctly", () => {
    render(<CounterTwo count={0} />);
    const textElement = screen.getByText("Counter Two");
    expect(textElement).toBeInTheDocument();
  });

  test("renders correctly", async () => {
    const decrementHandler = jest.fn();
    const incrementHandler = jest.fn();
    render(
      <CounterTwo
        count={0}
        handleDecrement={decrementHandler}
        handleIncrement={incrementHandler}
      />
    );
    const buttonIncrement = screen.getByRole("button", { name: "Increment" });
    const buttonDecrement = screen.getByRole("button", { name: "Decrement" });
    await user.click(buttonDecrement);
    await user.click(buttonIncrement);
    expect(incrementHandler).toHaveBeenCalledTimes(1);
    expect(decrementHandler).toHaveBeenCalledTimes(1);
  });
});
