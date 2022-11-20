import { render, screen } from "@testing-library/react";
import Form from "./Form";

test("renders learn react link", () => {
  render(<Form />);
  const element = screen.getByPlaceholderText("First Name");
  expect(element).toBeInTheDocument();
});
