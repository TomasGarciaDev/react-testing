import { render, screen } from "@testing-library/react";
import { Application } from "./Application";

describe("Application", () => {
  test("renders correctly", () => {
    render(<Application />);

    const pageHeading = screen.getByRole("heading", {
      level: 1,
    });
    expect(pageHeading).toBeInTheDocument();

    const sectionHeading = screen.getByRole("heading", {
      level: 2,
    });
    expect(sectionHeading).toBeInTheDocument();

    const nameElement = screen.getByRole("textbox", { name: /name/i });
    expect(nameElement).toBeInTheDocument();

    const nameElement3 = screen.getByPlaceholderText(/fullname/i);
    expect(nameElement3).toBeInTheDocument();

    const bioElement = screen.getByRole("textbox", { name: /bio/i });
    expect(bioElement).toBeInTheDocument();

    const jobLocationElement = screen.getByRole("combobox");
    expect(jobLocationElement).toBeInTheDocument();

    const termsElement = screen.getByRole("checkbox");
    expect(termsElement).toBeInTheDocument();

    const termsElement2 = screen.getByLabelText(
      "I agree to the terms and conditions"
    );
    expect(termsElement2).toBeInTheDocument();

    const submitButton = screen.getByRole("button");
    expect(submitButton).toBeInTheDocument();
  });
});
