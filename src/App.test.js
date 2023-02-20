import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders david link", () => {
  render(<App />);
  const linkElement = screen.getByText(david);
  expect(linkElement).toBeInTheDocument();
});
