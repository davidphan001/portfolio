import { render } from "@testing-library/react";
import Header from "./components/Header";

test("renders Header", () => {
  const { queryByText } = render(<Header />);
  const welcomeMessage = queryByText("Software Engineer");
  expect(welcomeMessage).toBeInTheDocument();
});
