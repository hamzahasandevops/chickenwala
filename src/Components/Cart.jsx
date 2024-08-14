import React from "react";
import "../Styles/Cart.css";
import { useContext } from "react";
import { CartContext } from "./Features/ContextProvider";
import { totalItem } from "./Features/CartReducer";
import { totalPrice } from "./Features/CartReducer";

export default function Cart() {
  const { cart, dispatch } = useContext(CartContext);

  const removeItem = (id) => {
    dispatch({ type: "Remove", id });
    updateSelectedItemsOnRemove(id); // Remove from selected items as well
  };

  const increase = (id) => {
    const itemIndex = cart.findIndex((p) => p.id === id);
    if (itemIndex !== -1 && cart[itemIndex].count < 10) {
      dispatch({ type: "Increase", id });
      updateSelectedItems(id); // Ensure selected items reflect the updated price immediately
    }
  };

  const decrease = (id) => {
    const itemIndex = cart.findIndex((p) => p.id === id);
    if (itemIndex !== -1 && cart[itemIndex].count > 1) {
      dispatch({ type: "Decrease", id });
      updateSelectedItems(id); // Ensure selected items reflect the updated price immediately
    }
  };

  return (
    <div>
      <header className="cart-header">
        <h1>Chicken Shop Cart</h1>
        {/* Optional additional text */}
        {/* <p>Freshly picked for you!</p> */}
      </header>
      <div className="d-flex">
        <div className="container">
          {cart.map((d) => (
            <div className="cart-item" key={d.id}>
              <img src={d.image} alt={d.name} className="cart-image" />
              <div className="cart-details">
                <h3 className="cart-name">{d.name}</h3>
                <p className="cart-price">₹{d.newPrice}</p>
                <p className="cart-discount">Discount: ₹{d.discount}</p>
                <div className="button-group">
                  {" "}
                  <p className="cart-quantity d-flex">
                    Quantity:
                    <button
                      className="rounded circle btn btn-light"
                      disabled={true}
                    >
                      {d.count}
                    </button>
                  </p>
                  <button
                    className="rounded circle btn btn-light mb-3 border-0"
                    onClick={() => decrease(d.id)}
                  >
                    <b>-</b>
                  </button>
                  <button
                    className="rounded circle btn btn-light  border-0 mb-3"
                    onClick={() => increase(d.id)}
                  >
                    <b>+</b>
                  </button>
                  <button
                    type="button"
                    className="btn btn-light rounded mb-3"
                    data-toggle="tooltip"
                    data-html="true"
                    title="Delete"
                    onClick={() => removeItem(d.id)}
                  >
                    <i className="fa-solid fa-trash text-danger"></i>
                  </button>
                </div>
                <p className="cart-description">{d.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="summary-container">
          <p className="total-item">Total Items: {totalItem(cart)}</p>
          <p className="total-price">Total Price: ₹ {totalPrice(cart)}</p>
          <button className="btn btn-primary">Checkout</button>
        </div>
      </div>
    </div>
  );
}
