import { render, screen } from "@testing-library/react";
import ProductList from "../components/ProductList";

const products = [
  { id: 1, name: "Phone", category: "Electronics" },
  { id: 2, name: "Shoes", category: "Fashion" },
];

test("filters products correctly", () => {
  render(
    <ProductList products={products} category="Electronics" addToCart={() => {}} />
  );

  expect(screen.getByText(/phone/i)).toBeInTheDocument();
});