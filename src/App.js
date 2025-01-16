import React, { useContext, useState } from "react";
import { BrowserRouter, Routes, Route, Link, useNavigate } from "react-router-dom";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import { CartContext } from "./components/CartContext";
import "./App.css";

function App() {
  const { cartItems } = useContext(CartContext);
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    document.body.classList.toggle("dark-mode");
    setDarkMode((prev) => !prev);
  };

  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <h1>TeeRex Store</h1>
          <div className="header-buttons">
            <button onClick={toggleDarkMode}>
              {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
            </button>
            <Link to="/cart" className="cart-link">
              🛒 {cartItems.reduce((total, item) => total + item.quantity, 0)}
            </Link>
          </div>
        </header>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/cart" element={<CartWithBackButton />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

function CartWithBackButton() {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate("/")} className="back-button">
        ← Back to Products
      </button>
      <Cart />
    </div>
  );
}

export default App;
