import { render, screen, fireEvent } from "@testing-library/react";
import App from "../App";

test("dark mode toggles", () => {
  render(<App />);

  const btn = screen.getByText(/dark mode|toggle/i);

  fireEvent.click(btn);

  expect(document.body.className).toMatch(/dark/i);
});