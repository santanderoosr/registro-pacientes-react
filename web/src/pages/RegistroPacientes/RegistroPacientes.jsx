import "./RegistroPacientes.css"
export default function RegistroPacientes() {
  return (
    <div>
      <div className="registro__container">
        <h2 className=" registro__h2">Registro de Pacientes</h2>
        <form className="registro__form">
          <div className="registro__form-group">
            <label className="registro__label" htmlFor="nome">
              Nome:
            </label>
            <input
              className="registro__input"
              type="text"
              id="nome"
              name="nome"
              required
            />
          </div>
          <div className="registro__form-group">
            <label className="registro__label" htmlFor="sobrenome">
              Sobrenome:
            </label>
            <input
              className="registro__input"
              type="text"
              id="sobrenome"
              name="sobrenome"
              required
            />
          </div>
          <div className="registro__form-group">
            <label className="registro__label" htmlFor="data de nacimento">
              Data de Nacimento
            </label>
            <input
              className="registro__input"
              type="text"
              id="data de nacimento"
              name="data de nacimento"
              required
            />
          </div>
          <div className="registro__form-group">
            <label className="registro__label" htmlFor="cpf">
              CPF:
            </label>
            <input
              className="registro__input"
              type="text"
              id="cpf"
              name="cpf"
              required
            />
          </div>
          <div className="registro__form-group">
            <label className="registro__label" htmlFor="email">
              Email:
            </label>
            <input
              className="registro__input"
              type="email"
              id="email"
              name="email"
              required
            />
          </div>
          <div className="registro__form-group">
            <label className="registro__label" htmlFor="numTelefone">
              Numero de Telefone
            </label>
            <input
              className="registro__input"
              type="text"
              id="numTelefone"
              name="numTelefone"
              required
            />
          </div>

          <div className="registro__form-group">
            <label className="registro__label" htmlFor="numCarton">
              Número do Cartão do SUS:
            </label>
            <input
              className="registro__input"
              type="text"
              id="numCarton"
              name="numCarton"
              required
            />
          </div>
          <div className="registro__form-group">
            <label className="registro__label" htmlFor="endereco">
              Endereço:
            </label>
            <input
              className="registro__input"
              type="text"
              id="endereco"
              name="endereco"
              required
            />
            <div className="registro__from-group">
              <label className="registro__label" htmlFor="senha">
                Senha:
              </label>
              <input
                className="registro__input"
                type="password"
                name="senha"
                id="senha"
                required
              />
            </div>
            <div className="registro__from-group">
              <label className="registro__label" htmlFor="confirmar_senha">
                Confirmar Senha:
              </label>
              <input
                className="registro__input"
                type="password"
                name="confirmar_senha"
                id="confirmar_senha"
                required
              />
            </div>
          </div>
          <button className="login__button registro__button" type="submit">
            Registrarse
          </button>
        </form>
      </div>
    </div>
  );
}
