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
        <li>Home</li>
        <li>Find Love</li>
        <li>About us</li>
      </div>
      <div className="CTA-container">
        <li onClick={OpenCard}>
          <FontAwesomeIcon icon={faCartShopping} />

          Cart</li>
      </div>
      {Card &&
        <section className="CardMenu">
        <CardMenu />
      </section>
      }
    </nav>
  );
}
