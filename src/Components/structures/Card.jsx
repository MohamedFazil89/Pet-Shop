// src/components/Card.jsx
import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";
import "../styles/Card.scss"

export default function Card({ id, img, title, description, price }) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({ id, img, title, price }));
  };

  return (
    <div className="card">
      <img src={img} className="card__img" alt={title} />
      <div className="card__body">
        <h2 className="card__title">{title}</h2>
        <p className="card__description">{description}</p>
        <h3 className="card__price">${price}</h3>
        <button className="card__btn" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}
