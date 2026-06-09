import { render, screen, fireEvent } from "@testing-library/react";
import { vi } from "vitest";
import ProductCard from "../components/ProductCard";

test("add to cart works", () => {
  const mockAddToCart = vi.fn();

  const product = {
    id: 1,
    name: "Phone",
    price: 100,
  };

  render(<ProductCard product={product} addToCart={mockAddToCart} />);

  fireEvent.click(screen.getByText(/add to cart/i));

  expect(mockAddToCart).toHaveBeenCalled();
});