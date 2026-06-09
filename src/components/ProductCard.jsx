function ProductCard({ product, addToCart }) {
  return (
    <div className="card">
      <img
        src={product.image}
        alt={product.name}
        style={{ width: "150px", height: "150px" }}
      />

      <h3>{product.name}</h3>
      <p>{product.category}</p>

      <button onClick={() => addToCart(product)}>
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;