import React from 'react'
import "../styles/CardMenu.css"
// import CardItems from "../CardItems"
import Porduct from "../../assets/cat-8612685.jpg"

export default function CardMenu({ width }) {
  return (
    <div className="Card-Container" style={{ width: width}}>
      <p style={{ color: "black", textAlign:"right"}}>X</p>
     <section className="carditem">
     <img src={Porduct} alt="" className='Item-image' />
      <span className='Card-details'>
      <p className="Name">Dog Biscate</p>
      <p className="Rate">$4.56</p>
      <button>Buy</button>
      </span>

     </section>
      <div className="total">
        <p>Total:$4.56</p>
        <button>Buy Now </button>
      </div>

    </div>
  )
}
