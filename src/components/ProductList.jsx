import ProductCard from "./ProductCard";

function ProductList({ products, category, addToCart }) {
  const filteredProducts =
    category === "All"
      ? products
      : products.filter((p) => p.category === category);

  return (
    <div>
      {filteredProducts.length === 0 ? (
        <p>No products available.</p>
      ) : (
        filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))
      )}
    </div>
  );
}

export default ProductList;