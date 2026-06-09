import { useState } from "react";
import ProductList from "./components/ProductList";
import DarkModeToggle from "./components/DarkModeToggle";
import Cart from "./components/Cart";
import products from "./data";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [cart, setCart] = useState([]);
  const [category, setCategory] = useState("All");

  // 🌙 Toggle dark mode
  function toggleDarkMode() {
    setDarkMode((prev) => !prev);
  }

  // 🛒 Add item to cart
  function addToCart(product) {
    setCart((prev) => [...prev, product]);
  }

  return (
    <div className={darkMode ? "dark" : ""}>
      <h1>Shopping App</h1>

      {/* DARK MODE TOGGLE */}
      <DarkModeToggle
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
      />

      {/* CATEGORY FILTER */}
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="All">All</option>
        <option value="Dairy">Dairy</option>
        <option value="Bakery">Bakery</option>
        <option value="Fruit">Fruit</option>
      </select>

      {/* PRODUCT LIST */}
      <ProductList
        products={products}
        category={category}
        addToCart={addToCart}
      />

      {/* CART */}
      <Cart cart={cart} />
    </div>
  );
}

export default App;