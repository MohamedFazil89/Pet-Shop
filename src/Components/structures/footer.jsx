import "../styles/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-column">
          <h3 className="footer-title">About Us</h3>
          <p className="footer-text">
            We are a trusted pet shop providing quality products for your beloved pets.
          </p>
        </div>
        <div className="footer-column">
          <h3 className="footer-title">Contact Us</h3>
          <p className="footer-text">Email: info@pawsandclaws.com</p>
          <p className="footer-text">Phone: 1800-PETS</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 Paws &amp; Claws. All rights reserved.</p>
      </div>
    </footer>
  );
}
