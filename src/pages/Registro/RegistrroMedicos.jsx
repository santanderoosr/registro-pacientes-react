import "./RegistroMedicos.css";
export default function RegistroMedicos() {
  return (
    <div>
      <div className="registroMedico__container">
        <h2 className="registroMedico__h2">Registro de Medicos</h2>
        <form className="registroMedico__form">
          <div className="registroMedico__form-group">
            <label className="registroMedico__label" htmlFor="nome">
              Nome:
            </label>
            <input
              className="registroMedico__input"
              type="text"
              id="nome"
              name="nome"
              required
            />
          </div>
          <div className="registroMedico__form-group">
            <label className="registroMedico__label" htmlFor="sobrenome">
              Sobrenome:
            </label>
            <input
              className="registroMedico__input"
              type="text"
              id="sobrenome"
              name="sobrenome"
              required
            />
          </div>
          <div className="registroMedico__form-group">
            <label className="registroMedico__label" htmlFor="data de nacimento">
              Data de Nacimento
            </label>
            <input
              className="registroMedico__input"
              type="text"
              id="data de nacimento"
              name="data de nacimento"
              required
            />
          </div>
          <div className="registroMedico__form-group">
            <label className="registroMedico__label" htmlFor="cpf">
              CPF:
            </label>
            <input
              className="registroMedico__input"
              type="text"
              id="cpf"
              name="cpf"
              required
            />
          </div>
          <div className="registroMedico__form-group">
            <label className="registroMedico__label" htmlFor="email">
              Email:
            </label>
            <input
              className="registroMedico__input"
              type="email"
              id="email"
              name="email"
              required
            />
          </div>
          <div className="registroMedico__form-group">
            <label className="registroMedico__label" htmlFor="numTelefone">
              Numero de Telefone
            </label>
            <input
              className="registroMedico__input"
              type="text"
              id="numTelefone"
              name="numTelefone"
              required
            />
          </div>

          <div className="registroMedico__form-group">
            <label className="registroMedico__label" htmlFor="numCRM">
              CRM:
            </label>
            <input
              className="registroMedico__input"
              type="text"
              id="numCRM"
              name="numCRM"
              required/>
             </div>
            <div className="registroMedico__form-group">
              <label className="registroMedico__label" htmlFor="especialidad">       
               Especialidad:
              </label> 
              <input className="registroMedico__input"
              type="text"
              id="especialidad"
              name="especialidad" 
              required/>                           

            </div>
          <div className="registroMedico__form-group">
            <label className="registroMedico__label" htmlFor="endereco">
              Endereço do Consultorio:
            </label>
            <input
              className="registroMedico__input"
              type="text"
              id="endereco"
              name="endereco"
              required
            />
            <div className="registroMedico__from-group">
              <label className="registroMedico__label" htmlFor="senha">
                Senha:
              </label>
              <input
                className="registroMedico__input"
                type="password"
                name="senha"
                id="senha"
                required
              />
            </div>
            <div className="registroMedico__from-group">
              <label className="registroMedico__label" htmlFor="confirmar_senha">
                Confirmar Senha:
              </label>
              <input
                className="registroMedico__input"
                type="password"
                name="confirmar_senha"
                id="confirmar_senha"
                required
              />
            </div>
          </div>
          <button className="login__button registroMedico__button" type="submit">
            Registrarse
          </button>
        </form>
      </div>
    </div>
  );
}
