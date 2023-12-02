import Logo from "../../assets/images/logo2.2-removebg-preview.png";
import Facebook from "../../assets/images/iconos/facebook.svg";
import Twitter from "../../assets/images/iconos/twitter.svg";
import Instagram from "../../assets/images/iconos/instagram.svg";
import "./Footer.css";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__containerLogo">
        <div className="footer__containerLogo-logo">
          <img src={Logo} alt="logofooter" />
        </div>
        <div className="footer__containerLogo-icones">
          <img src={Facebook} alt="icone facebook" />
          <img src={Twitter} alt="icone twiter" />
          <img src={Instagram} alt="icone instagram" />
        </div>
      </div>
    </footer>
  );
}
