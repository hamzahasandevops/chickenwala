import React from "react";
import { useParams } from "react-router-dom";
import { chickenItems } from "./Categories"; // Import the data
import "../Styles/ItemDetails.css"; // Import the CSS file
import Header from "./Header";
import { useContext } from "react";
import { CartContext } from "./Features/ContextProvider";

const ItemDetail = () => {
  const { categoryName } = useParams();
  const { dispatch } = useContext(CartContext);
  // Filter products based on category name
  const filteredProducts = chickenItems.filter(
    (item) => item.name === categoryName
  );

  return (
    <div className="category-detail-container">
      <Header />
      <h1>{categoryName}</h1>
      <div className="products-grid">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product-item">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p className="description">{product.description}</p>
            <div className="price-discount ">
              <p className="price">Price: ${product.newPrice}</p>

              <p className="discount">Discount: {product.discount}</p>
            </div>
            <div className="button-container">
              <button
                className="btn add-to-cart"
                onClick={() => dispatch({ type: "ADD", d: product })}
              >
                Add to Cart
              </button>
              <button className="btn buy-now">Buy Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemDetail;
