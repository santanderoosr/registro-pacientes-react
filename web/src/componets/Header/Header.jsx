import { Link, useLocation } from "react-router-dom";
import Logo from "../../assets/images/logo2.2-removebg-preview.png";

import "./Header.css";

export default function Header() {
  const location = useLocation();

  const isHome = location.pathname === "/";
  return (
    <div className="container__header">
      <header className="header">
        <img className="logo" src={Logo} alt="Logo de TechMed Connect" />

        <div className="container__ul">
          <ul className="ul">
            {isHome ? null : (
              <li>
                <Link to={"/"}>Inicio</Link>
              </li>
            )}

            <li>
              <a href="#sobre">Sobre</a>
            </li>
            <li>
              <a href="#valores">Valores</a>
            </li>

            <li>
              <a href="#cadastro">Cadastro</a>
            </li>
            <li>
              <Link to={"/agendamento"}>Agendar atendimento</Link>
            </li>
          </ul>

          <Link to={"/login"}>
            <button className="login-btn">Login</button>
          </Link>
        </div>
      </header>

      <div className="header__content">
        <h1>TechMed Connect</h1>
        <h4>A Saúde Merece Atendimento de Qualidade e Acessível</h4>
        <h3>
          Encontre seu Médico ideal no nosso sistema, seu bem-estar é nossa
          prioridade 24/7
        </h3>
      </div>
    </div>
  );
}
