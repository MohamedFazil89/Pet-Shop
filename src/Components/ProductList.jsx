// src/components/ProductList.jsx
import Card from "./structures/Card";
import "./styles/productlist.css"
import axios from "axios"
import { useEffect, useState } from "react";

export default function ProductList() {
  const [items, setItem] = useState([])

  useEffect(() =>{
    const FetchProduct = async () =>{
      try{
        const Response = await axios.get("http://localhost:5000/api/products")
        console.log(Response.data.Product_Collection )
        setItem(Response.data.Product_Collection );
  
      }catch(err){
        console.log(err)
      }
    }
    FetchProduct()
  },[])

  
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
