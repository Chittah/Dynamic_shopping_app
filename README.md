# Shopping App

## Overview

This project is a React-based Shopping App built using the `useState` hook. The application demonstrates state management, event handling, and conditional rendering in React by implementing three key features:

* Dark Mode Toggle
* Category-Based Item Filtering
* Add to Cart Functionality

The project was developed as part of a React Hooks State Management lab.

---

## Features

### 1. Dark Mode Toggle

* Users can switch between Light Mode and Dark Mode.
* The button text updates dynamically between **Dark** and **Light**.
* The application theme changes based on the selected mode.

### 2. Category Filter

* Users can filter shopping items using a dropdown menu.
* Available categories include:

  * Dairy
  * Fruit
  * Bakery
  * All
* Only items belonging to the selected category are displayed.

### 3. Add to Cart

* Each shopping item includes an **Add to Cart** button.
* Clicking the button adds the item to the cart.
* Items added to the cart are displayed with the message:

  * "Milk is in your cart."
  * "Apple is in your cart."
* Duplicate items are prevented from being added multiple times.



## Project Structure


shopping-app/
│
├── public/
│
├── src/
│   ├── data.js
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── assets/
│
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

### File Descriptions

#### `src/App.jsx`

Main application component containing:

* Dark mode state management
* Cart functionality
* Category filtering
* UI rendering

#### `src/data.js`

Contains the shopping item data used by the application.

Example:

```javascript
const items = [
  { id: 1, name: "Milk", category: "Dairy" },
  { id: 2, name: "Cheese", category: "Dairy" },
  { id: 3, name: "Apple", category: "Fruit" },
  { id: 4, name: "Banana", category: "Fruit" },
  { id: 5, name: "Bread", category: "Bakery" }
];

export default items;
```

#### `src/App.css`

Contains styling for:

* Light and Dark themes
* Buttons
* Layout and spacing

#### `src/main.jsx`

Application entry point responsible for rendering the React application.

## Usage

1. Launch the application.
2. Click the **Dark** button to enable Dark Mode.
3. Use the dropdown menu to filter products by category.
4. Click **Add to Cart** to add items to your shopping cart.
5. View cart contents displayed below the shopping list.

