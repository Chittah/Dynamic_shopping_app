import { useState, useEffect } from "react";
import products from "./data";
import ProductList from "./components/ProductList";
import DarkModeToggle from "./components/DarkModeToggle";
import Cart from "./components/Cart";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [category, setCategory] = useState("All");
  const [cart, setCart] = useState([]);
useEffect(() => {
  document.body.className = darkMode ? "dark" : "";
}, [darkMode]);
  function toggleDarkMode() {
    setDarkMode((prev) => !prev);
  }

  function addToCart(product) {
    setCart((prev) => [...prev, product]);
  }

  return (
    <div className={darkMode ? "dark" : ""}>
      <DarkModeToggle
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
      />

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="All">All</option>
        <option value="Dairy">Dairy</option>
        <option value="Bakery">Bakery</option>
        <option value="Fruit">Fruit</option>
      </select>

      <ProductList
        products={products}
        category={category}
        addToCart={addToCart}
      />

      <Cart cart={cart} />
    </div>
  );
}

export default App;