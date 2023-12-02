import logologin2 from "../../assets/images/logologin2.jpg";
import "./Login.css";
export default function Login() {
  return (
    <div className="login">
      <div className="login__container">
        <img className="login__containerImage" src={logologin2} alt=" " />
        <h1 className="login__h1">Login</h1>
        <input
          className="login__input"
          type="text"
          placeholder="E-mail/CPF"
          id="username"
        />
        <input
          className="login__input"
          type="password"
          placeholder="Senha"
          id="senha"
        />

        <p className="login__forgot-password">¿esqueceu a sua senha?</p>
        <p>
          Ainda não se Registrou? <a href="#">Registre-se aqui</a>
        </p>
        <button className="login__button" id="button">
          Login
        </button>
      </div>
    </div>
  );
}
