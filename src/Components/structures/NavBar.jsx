import { useState, useEffect } from "react";
import "../styles/NavBar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import Logo from "../../assets/petwave.png"
import CardMenu from "./CardMenu"

export default function NavBar() {
  const [ClassName, setClassName] = useState("NavBar-Container")
  const [Card, setCard] = useState(false);

  const OpenCard = () =>{
    setCard(!Card);
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setClassName("NavBar-Container")
      } else {
        setClassName("NavBar-Container-fixed")
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={ClassName}>
      <div className="logo-container">
        <li>
          <img src={Logo} alt=""  width={59}/></li>
      </div>
      <div className="pages">
        <li> <a href="#Home">Home</a> </li>
        <li> <a href="#Cart">Products</a> </li>
        <li> <a href="#About">About us</a> </li>


      </div>
      <div className="CTA-container">
        <li onClick={OpenCard}>
          <FontAwesomeIcon icon={faCartShopping} />

          Cart</li>
      </div>
        <div className="card-con" >
        <CardMenu width={ Card ? "40%": "0%"} OpenCard={OpenCard}/>
        </div>
    </nav>
  );
}
