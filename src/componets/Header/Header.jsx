import Logo from "../../assets/images/logo2.2-removebg-preview.png"

import "./Header.css"

export default function Header() {
  return (
    <div className="container__header">
      <header className="header">
        
        <img className="logo" src={Logo} alt="Logo de TechMed Connect" />
        
        <div className="container__ul">
          <ul className="ul">
              <li>
                <a href="#">Inicio</a>
              </li>
              <li>
                <a href="#">Sobre</a>
              </li>
              <li>
                <a href="#">Objetivo</a>
              </li>
              <li>
                <a href="#">Serviços</a>
              </li>
              <li>
                <a href="#">Cadastro</a>
              </li>
              <li>
                <a href="#">Benefícios</a>
              </li>
              <li>
                <a href="#">Contato</a>
              </li>
            </ul>
                   
            <button className="login-btn">Login</button>
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
