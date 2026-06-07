import { useState } from "react";
import items from "./data";
import "./App.css";

function App() {

  const [darkMode, setDarkMode] = useState(false);
  const [cart, setCart] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  
  const handleToggleMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  const addToCart = (item) => {
  if (!cart.includes(item.name)) {
    setCart([...cart, item.name]);
  }
  };
  const filteredItems =
    selectedCategory === "All"
      ? items
      : items.filter(
          (item) =>
            item.category === selectedCategory
        );

  return (
  <div className={`app ${darkMode ? "dark" : "light"}`}>
    <h1>Shopping App</h1>

    <button onClick={handleToggleMode}>
      {darkMode ? "Light" : "Dark"}
    </button>

    <br />
    <br />

    
    <select
      value={selectedCategory}
      onChange={(e) => setSelectedCategory(e.target.value)}
    >
      <option value="All">All</option>
      <option value="Dairy">Dairy</option>
      <option value="Fruit">Fruit</option>
      <option value="Bakery">Bakery</option>
    </select>

    <h2>Shopping List</h2>

    <ul>
      {filteredItems.map((item) => (
        <li key={item.id}>
          {item.name} ({item.category})
          <button onClick={() => addToCart(item)}>
            Add to Cart
          </button>
        </li>
      ))}
    </ul>

    <h2>Cart</h2>

    <ul>
      {cart.map((item) => (
        <li key={item}>{item} is in your cart.</li>
      ))}
    </ul>
  </div>
);
}

export default App;