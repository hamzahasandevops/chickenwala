import React, { useState, useEffect } from "react";
import "../Styles/Hero.css";
import { useContext } from "react";
import { CartContext } from "./Features/ContextProvider";
// data.js
export const chickenItems = [
  // Breast

  {
    id: 1,
    name: "Breast",
    discount: "10%",
    image:
      "https://img.freepik.com/free-photo/raw-chicken-breasts-wooden-cutting-board_1150-13456.jpg",
    offPrice: 6,
    newPrice: 5,
    description: "Tender and juicy chicken breast.",
    ratings: 4.5,
    quantity: 100,
    kg: 1.0,
    servings: 4,
    count: 1,
  },
  {
    id: 2,
    name: "Breast",
    discount: "15%",
    image:
      "https://img.freepik.com/free-photo/raw-chicken-breast-dark-surface_1150-43921.jpg",
    offPrice: 5,
    newPrice: 4,
    description: "Delicious and flavorful chicken breast.",
    ratings: 4.0,
    quantity: 150,
    kg: 1.2,
    servings: 4,
    count: 1,
  },
  {
    id: 3,
    name: "Breast",
    discount: "16%",
    image:
      "https://img.freepik.com/free-photo/nutrition-meal-diet-pepper-healthy_1203-5519.jpg",
    offPrice: 7,
    newPrice: 6,
    description: "Versatile boneless chicken pieces.",
    ratings: 4.7,
    quantity: 200,
    kg: 1.5,
    servings: 5,
    count: 1,
  },
  {
    id: 4,
    name: "Breast",
    discount: "19%",
    image:
      "https://img.freepik.com/premium-photo/fresh-chicken-breast-raw_1339-106710.jpg?ga=GA1.2.1558841572.1712578859&semt=ais_hybrid",
    offPrice: 6,
    newPrice: 5,
    description: "Grilled chicken breast with a smoky flavor.",
    ratings: 4.6,
    quantity: 130,
    kg: 1.1,
    servings: 4,
    count: 1,
  },
  {
    id: 5,
    name: "Breast",
    discount: "10%",
    image:
      "https://img.freepik.com/free-photo/raw-chicken-fillet-wooden-board-with-greens-knife_114579-22484.jpg?ga=GA1.2.1558841572.1712578859&semt=ais_hybrid",
    offPrice: 6,
    newPrice: 5,
    description: "Cooked chicken breast served with vegetables.",
    ratings: 4.8,
    quantity: 110,
    kg: 1.3,
    servings: 4,
    count: 1,
  },
  {
    id: 6,
    name: "Breast",
    discount: "10%",
    image:
      "https://img.freepik.com/premium-photo/raw-chicken-fillets-wooden-plate-with-fresh-parsley-highquality-food-ingredients-image_1247856-9508.jpg?ga=GA1.2.1558841572.1712578859&semt=ais_hybrid",
    offPrice: 6,
    newPrice: 5,
    description: "Chicken breast salad with fresh greens.",
    ratings: 4.4,
    quantity: 120,
    kg: 1.2,
    servings: 3,
    count: 1,
  },
  {
    id: 7,
    name: "Breast",
    discount: "10%",
    image:
      "https://img.freepik.com/premium-photo/raw-uncooked-chicken-breast_136595-16875.jpg?ga=GA1.2.1558841572.1712578859&semt=ais_hybrid",
    offPrice: 6,
    newPrice: 6,
    description: "Roasted chicken breast with herbs.",
    ratings: 4.5,
    quantity: 90,
    kg: 1.4,
    servings: 4,
    count: 1,
  },
  {
    id: 8,
    name: "Breast",
    discount: "10%",
    image:
      "https://img.freepik.com/free-photo/chicken-breast-wooden-board-with-ingredients_23-2148440847.jpg?ga=GA1.2.1558841572.1712578859&semt=ais_hybrid",
    offPrice: 5,
    newPrice: 5,
    description: "Sliced chicken breast for sandwiches.",
    ratings: 4.3,
    quantity: 80,
    kg: 1.1,
    servings: 3,
    count: 1,
  },

  // Chicken Legs
  {
    id: 9,
    name: "Chicken Legs",
    discount: "10%",
    image:
      "https://img.freepik.com/free-photo/raw-fresh-chicken-legs-with-two-spoon-peppers-white-background_114579-48701.jpg?ga=GA1.1.1558841572.1712578859&semt=ais_hybrid",
    offPrice: 5,
    newPrice: 4,
    description: "Juicy and tender chicken legs.",
    ratings: 4.3,
    quantity: 120,
    kg: 1.3,
    servings: 4,
    count: 1,
  },
  {
    id: 10,
    name: "Chicken Legs",
    discount: "10%",
    image:
      "https://img.freepik.com/free-photo/close-up-raw-chicken-drumstick-wooden-board_114579-48873.jpg?ga=GA1.1.1558841572.1712578859&semt=ais_hybrid",
    offPrice: 5,
    newPrice: 5,
    description: "Deliciously seasoned chicken legs.",
    ratings: 4.6,
    quantity: 80,
    kg: 1.2,
    servings: 3,
    count: 1,
  },
  {
    id: 11,
    name: "Chicken Legs",
    discount: "10%",
    image:
      "https://img.freepik.com/free-photo/crop-hands-holding-board-with-chicken-legs_23-2147765484.jpg?ga=GA1.1.1558841572.1712578859&semt=ais_hybrid",
    offPrice: 5,
    newPrice: 4,
    description: "Grilled chicken legs with a crispy skin.",
    ratings: 4.4,
    quantity: 100,
    kg: 1.4,
    servings: 4,
    count: 1,
  },
  {
    id: 12,
    name: "Chicken Legs",
    discount: "10%",
    image:
      "https://img.freepik.com/premium-photo/raw-chicken-meat-fillet-thigh-wings-legs_82893-9305.jpg?ga=GA1.1.1558841572.1712578859&semt=ais_hybrid",
    offPrice: 6,
    newPrice: 5,
    description: "Baked chicken legs with herbs and spices.",
    ratings: 4.7,
    quantity: 90,
    kg: 1.3,
    servings: 4,
    count: 1,
  },
  {
    id: 13,
    name: "Chicken Legs",
    discount: "10%",
    image:
      "https://img.freepik.com/free-photo/raw-spicy-chicken-drumstick-wooden-chopping-board_114579-48648.jpg?ga=GA1.1.1558841572.1712578859&semt=ais_hybrid",
    offPrice: 5,
    newPrice: 4,
    description: "Roasted chicken legs with garlic and herbs.",
    ratings: 4.6,
    quantity: 70,
    kg: 1.2,
    servings: 3,
    count: 1,
  },
  {
    id: 14,
    name: "Chicken Legs",
    discount: "10%",
    image:
      "https://img.freepik.com/free-photo/chicken-legs-with-garlic_114579-8656.jpg?ga=GA1.1.1558841572.1712578859&semt=ais_hybrid",
    offPrice: 6,
    newPrice: 5,
    description: "Spicy grilled chicken legs.",
    ratings: 4.8,
    quantity: 100,
    kg: 1.3,
    servings: 4,
    count: 1,
  },
  {
    id: 15,
    name: "Chicken Legs",
    discount: "10%",
    image:
      "https://img.freepik.com/free-photo/chicken-legs_114579-8654.jpg?ga=GA1.1.1558841572.1712578859&semt=ais_hybrid",
    offPrice: 6,
    newPrice: 5,
    description: "BBQ chicken legs with a smoky glaze.",
    ratings: 4.9,
    quantity: 85,
    kg: 1.2,
    servings: 3,
    count: 1,
  },
  {
    id: 16,
    name: "Chicken Legs",
    discount: "10%",
    image:
      "https://img.freepik.com/free-photo/raw-chicken-meat-fillet-thigh-wings-legs-with-herbs-spices-lemon-garlic-dark-blue-background-top-view_2831-1070.jpg?ga=GA1.1.1558841572.1712578859&semt=ais_hybrid",
    offPrice: 6,
    newPrice: 5,
    description: "Chicken legs cooked in a savory casserole.",
    ratings: 4.5,
    quantity: 95,
    kg: 1.4,
    servings: 4,
    count: 1,
  },
  // Boneless
  {
    id: 17,
    name: "Boneless",
    discount: "10%",
    image:
      "https://img.freepik.com/free-photo/raw-chicken-fillet-wooden-board-with-greens-knife_114579-22484.jpg?ga=GA1.1.1558841572.1712578859&semt=ais_hybrid",
    offPrice: 7,
    newPrice: 6,
    description: "Tender boneless chicken pieces.",
    ratings: 4.8,
    quantity: 150,
    kg: 1.0,
    servings: 4,
    count: 1,
  },
  {
    id: 18,
    name: "Boneless",
    discount: "10%",
    image:
      "https://img.freepik.com/free-photo/raw-chicken-fillet-legs-wooden-plate-with-fresh-vegetables_114579-22508.jpg?ga=GA1.1.1558841572.1712578859&semt=ais_hybrid",
    offPrice: 7,
    newPrice: 6,
    description: "Versatile boneless chicken fillet.",
    ratings: 4.7,
    quantity: 100,
    kg: 1.2,
    servings: 4,
    count: 1,
  },
  {
    id: 19,
    name: "Boneless",
    discount: "10%",
    image:
      "https://img.freepik.com/free-photo/uncooked-chicken-fillet-with-vegetables-wooden-board_114579-58277.jpg?ga=GA1.1.1558841572.1712578859&semt=ais_hybrid",
    offPrice: 8,
    newPrice: 7,
    description: "BBQ boneless chicken pieces.",
    ratings: 4.9,
    quantity: 120,
    kg: 1.1,
    servings: 4,
    count: 1,
  },
  {
    id: 20,
    name: "Boneless",
    discount: "10%",
    image:
      "https://img.freepik.com/premium-photo/raw-chicken-breast-fillets-vegetable-wood_171194-633.jpg?ga=GA1.1.1558841572.1712578859&semt=ais_hybrid",
    offPrice: 6,
    newPrice: 5,
    description: "Fresh boneless chicken fillet.",
    ratings: 4.6,
    quantity: 140,
    kg: 1.3,
    servings: 4,
    count: 1,
  },
  {
    id: 21,
    name: "Boneless",
    discount: "10%",
    image:
      "https://img.freepik.com/free-photo/raw-chicken-fillet-legs-wooden-plate-with-fresh-vegetables-spices-glass-oil_114579-22504.jpg?ga=GA1.1.1558841572.1712578859&semt=ais_hybrid",
    offPrice: 6,
    newPrice: 5,
    description: "Cooked chicken strips for salads.",
    ratings: 4.4,
    quantity: 130,
    kg: 1.2,
    servings: 3,
    count: 1,
  },
  {
    id: 22,
    name: "Boneless",
    discount: "10%",
    image:
      "https://img.freepik.com/premium-photo/diced-sliced-fresh-raw-chicken-meat-fillets-uncooked-fowl-orange-background-top-view_89816-42751.jpg?ga=GA1.1.1558841572.1712578859&semt=ais_hybrid",
    offPrice: 6,
    newPrice: 5,
    description: "Boneless chicken fillet cooked in a pan.",
    ratings: 4.7,
    quantity: 110,
    kg: 1.1,
    servings: 3,
    count: 1,
  },
  {
    id: 23,
    name: "Boneless",
    discount: "10%",
    image:
      "https://img.freepik.com/free-photo/raw-chicken-fillet-wooden-board-with-greens-hand-holding-pepper-grains-spoon_114579-22497.jpg?ga=GA1.1.1558841572.1712578859&semt=ais_hybrid",
    offPrice: 7,
    newPrice: 6,
    description: "Spiced boneless chicken with a flavorful marinade.",
    ratings: 4.9,
    quantity: 90,
    kg: 1.2,
    servings: 4,
    count: 1,
  },
  {
    id: 24,
    name: "Boneless",
    discount: "10%",
    image:
      "https://img.freepik.com/free-photo/hand-holding-wooden-plate-raw-chicken-fillet-with-greens-dark-table_114579-22482.jpg?ga=GA1.1.1558841572.1712578859&semt=ais_hybrid",
    offPrice: 7,
    newPrice: 6,
    description: "Sliced boneless chicken breast.",
    ratings: 4.6,
    quantity: 140,
    kg: 1.1,
    servings: 4,
    count: 1,
  },
];

export default function Hero() {
  const [selectedCategory, setSelectedCategory] = useState("Breast");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);
  const [itemsVisible, setItemsVisible] = useState(false);

  const { cart, dispatch } = useContext(CartContext);

  useEffect(() => {
    // Show items with a fade-in effect
    const timer = setTimeout(() => setItemsVisible(true), 0);
    return () => clearTimeout(timer);
  }, [filteredItems]);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setItemsVisible(false);
    setTimeout(() => {
      setFilteredItems(
        chickenItems
          .filter((item) => category === "All" || item.name === category)
          .filter(
            (item) =>
              item.name.toLowerCase().includes(searchQuery) ||
              item.description.toLowerCase().includes(searchQuery)
          )
      );
    }, 2000);
  };

  useEffect(() => {
    setFilteredItems(
      chickenItems
        .filter(
          (item) => selectedCategory === "All" || item.name === selectedCategory
        )
        .filter(
          (item) =>
            item.name.toLowerCase().includes(searchQuery) ||
            item.description.toLowerCase().includes(searchQuery)
        )
    );
  }, [searchQuery, selectedCategory]);

  return (
    <>
      <div className="d-flex align-items-center">
        <ul className="list w-75 d-flex justify-content-start">
          {[
            "All",
            "Chicken Legs",
            "Boneless",
            "Breast",
            // "Curry Cuts",

            // "Offals",
            // "Combos",
            // "Premium Cuts",
            // "Ready-to-cook",
            "",
          ].map((category) => (
            <li
              key={category}
              className={`list-item ${
                selectedCategory === category ? "active" : ""
              }`}
              onClick={() => handleCategoryClick(category)}
            >
              {category}
            </li>
          ))}
        </ul>
      </div>
      <div className=" row d-flex">
        <div className="col-10">
          <div
            className={`item-container mt-3 ${itemsVisible ? "fade-in" : ""} `}
          >
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className={`item-card ${itemsVisible ? "visible" : ""} `}
                style={{ padding: "25px" }}
              >
                <img src={item.image} alt={item.name} className="item-image" />
                <div className="item-details">
                  <h4>{item.name}</h4> <p>Ratings: {item.ratings} / 5</p>
                  <p>{item.description}</p>
                  <div className="d-flex justify-content-start">
                    <ins className="ins text-decoration-none">
                      Price ₹{item.newPrice}
                    </ins>
                    <del className="del">₹{item.offPrice}</del>
                    <p className="discount text-success">{item.discount} off</p>
                  </div>
                  <p>
                    {item.quantity} pcs | Weight: {item.kg} kg | {item.servings}
                    {"  "}
                    Person{" "}
                    <div className="d-flex">
                      <button
                        className="btn btn-light  text-dark border border-2 mt-2"
                        onClick={() => dispatch({ type: "ADD", d: item })}
                      >
                        <i className="fas fa-shopping-cart"></i>
                      </button>
                      <button className="btn btn-light text-dark border border-2 mt-2">
                        Buy
                      </button>
                    </div>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="col-2 d-flex">
          {/* <div className="chicken-card border border-2 p-5">
            {" "}
            <img
              src="https://img.freepik.com/free-photo/delicious-chicken-table_144627-8758.jpg?ga=GA1.2.1558841572.1712578859&semt=ais_hybrid"
              alt="Chicken"
              className="chicken-image mt-3"
            />
            <div className="chicken-details">
              <h4>Chicken</h4>
              <p>Delicious and fresh chicken.</p>
              <p className="price">Price: $10</p>
              <p>Quantity: 1 kg</p>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
}
