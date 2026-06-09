import { render, screen } from "@testing-library/react";
import ProductList from "../components/ProductList";

test("shows no products message", () => {
  render(
    <ProductList products={[]} category="Electronics" addToCart={() => {}} />
  );

  expect(screen.getByText(/no products available/i)).toBeInTheDocument();
});