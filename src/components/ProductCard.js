import React, { useContext } from "react";
import { CartContext } from "./CartContext";

function ProductCard({ product }) {
  const { cartItems, setCartItems } = useContext(CartContext);

  const handleAddToCart = () => {
    const existingItem = cartItems.find((item) => item.id === product.id);
    if (existingItem) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  return (
    <div className="product-card">
      <img src={product.imageURL} alt={product.name} />
      <h3>{product.name}</h3>
      <p>Rs {product.price}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
}

export default ProductCard;
