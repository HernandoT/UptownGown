import "./Footer.css";
import logo from "../../utils/assets/logo.jpg"

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerLogo">
        <img src={logo} alt="" />
      </div>
      <div className="footerCompany">
        <p>
          <b>Company</b>
        </p>
        <p>About Us</p>
        <p>FAQ</p>
        <p>Privacy & Policy</p>
        <p>Terms & Condition</p>
      </div>
      <div className="footerSupport">
        <p>
          <b>Support</b>
        </p>
        <p>+6221 11223344</p>
        <p>lorem@email.com</p>
        <p>uptown.gown</p>
      </div>
    </div>
  );
};

export default Footer;
