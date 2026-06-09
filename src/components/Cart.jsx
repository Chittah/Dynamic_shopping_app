function Cart({ cart }) {
  return (
    <div>
      <h2>Cart</h2>

      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        cart.map((item, index) => (
          <p key={index}>
            {item.name} is in your cart.
          </p>
        ))
      )}
    </div>
  );
}

export default Cart;