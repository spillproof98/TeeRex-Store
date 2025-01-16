import React from "react";

function CartItem({ item, onQuantityChange, onDeleteItem }) {
  const handleQuantityIncrement = () => {
    onQuantityChange(item.id, item.quantity + 1);
  };

  const handleQuantityDecrement = () => {
    if (item.quantity > 1) {
      onQuantityChange(item.id, item.quantity - 1);
    }
  };

  return (
    <li className="cart-item">
      <img src={item.imageURL} alt={item.name} />
      <div className="item-details">
        <h3>{item.name}</h3>
        <p>Rs {item.price}</p>
        <div className="quantity-controls">
          <button onClick={handleQuantityDecrement}>-</button>
          <span>{item.quantity}</span>
          <button onClick={handleQuantityIncrement}>+</button>
        </div>
        <button onClick={() => onDeleteItem(item.id)}>Delete</button>
      </div>
    </li>
  );
}

export default CartItem;