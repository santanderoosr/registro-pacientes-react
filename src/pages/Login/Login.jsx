import logologin2 from "../../assets/images/logologin2.jpg";
import TechMedconnect from "../../assets/images/logo2.2-removebg-preview.png";
import "./Login.css";
export default function Login() {
  return (
    <div className="login">
      <div className="login__header">
        <div className="login__logo">
          <img src={TechMedconnect} alt="TechMed Connect" />
        </div>
      </div>

      <div className="login__container">
        <img className="login__containerImage" src={logologin2} alt=" " />
        <h1 className="login__h1">Login</h1>
        <input className="login__input" type="text" placeholder="E-mail/CPF" />
        <input className="login__input" type="password" placeholder="Senha" />

        <p className="login__forgot-password">¿esqueceu a sua senha?</p>
        <p>
          Ainda não se Registrou? <a href="#">Registre-se aqui</a>
        </p>
        <button className="login__button">Login</button>
      </div>

      <div className="login__footer">
        <div className="login__copyright">
          &copy;2023 TechMed Connect. Todos os direitos reservados
        </div>
        <div className="login__social-buttons">
          <button>Contatos</button>
          <button>Siga-nos</button>
        </div>
      </div>
    </div>
  );
}
