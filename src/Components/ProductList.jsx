// src/components/ProductList.jsx
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../redux/productSlice";
import Card from "./structures/Card";
import "./styles/productlist.css"

export default function ProductList() {
  const dispatch = useDispatch();
  const { items, status, error } = useSelector((state) => state.products);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);

  if (status === "loading") {
    return <div>Loading products...</div>;
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="product-list">
    {items.map((product) => (
        <Card
          key={product.id}
          id={product.id}
          img={product.img}
          title={product.title}
          description={product.description}
          price={product.price}
          
        />
      ))}
    </div>
  );
}
