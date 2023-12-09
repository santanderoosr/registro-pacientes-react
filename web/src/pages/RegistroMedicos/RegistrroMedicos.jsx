import { useState } from "react";

import * as serviceMedico from "../../service/medicos.js";
import "./RegistroMedicos.css";
export default function RegistroMedicos() {
  const initialStateMedico = {
    nome: "",
    sobrenome: "",
    data_de_nascimento: "",
    cpf: "",
    email_address: "",
    telefone: "",
    crm: "",
    endereco_do_consultorio: "",
    especialidade: "",
    senha: "",
    confirmar_senha: "",
  };
  const [medico, setMedico] = useState(initialStateMedico);

  const handleInputMedico = (e) => {
    setMedico({ ...medico, [e.target.name]: e.target.value });
  };

  const handleSubmitMedico = async (e) => {
    e.preventDefault();

    try {
      await serviceMedico.createMedico(medico);

      setMedico(initialStateMedico);
      alert("Medico Criado");
    } catch (error) {
      alert(error.response.data.error);
      console.error(error);
    }
  };

  return (
    <div>
      <div className="registroMedico__container">
        <h2 className="registroMedico__h2">Registro de Medicos</h2>
        <form className="registroMedico__form" onSubmit={handleSubmitMedico}>
          <div className="registroMedico__form-group">
            <label className="registroMedico__label" htmlFor="nome">
              Nome:
            </label>
            <input
              className="registroMedico__input"
              type="text"
              id="nome"
              name="nome"
              value={medico.nome}
              onChange={handleInputMedico}
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
              value={medico.sobrenome}
              onChange={handleInputMedico}
              required
            />
          </div>
          <div className="registroMedico__form-group">
            <label className="registroMedico__label" htmlFor="data_nascimento">
              Data de Nacimento
            </label>
            <input
              className="registroMedico__input"
              type="text"
              id="data_nascimento"
              name="data_de_nascimento"
              value={medico.data_de_nascimento}
              onChange={handleInputMedico}
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
              value={medico.cpf}
              onChange={handleInputMedico}
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
              name="email_address"
              value={medico.email_address}
              onChange={handleInputMedico}
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
              name="telefone"
              value={medico.telefone}
              onChange={handleInputMedico}
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
              name="crm"
              value={medico.crm}
              onChange={handleInputMedico}
              required
            />
          </div>
          <div className="registroMedico__form-group">
            <label className="registroMedico__label" htmlFor="especialidad">
              Especialidad:
            </label>
            <input
              className="registroMedico__input"
              type="text"
              id="especialidad"
              name="especialidade"
              value={medico.especialidade}
              onChange={handleInputMedico}
              required
            />
          </div>
          <div className="registroMedico__form-group">
            <label className="registroMedico__label" htmlFor="endereco">
              Endereço do Consultorio:
            </label>
            <input
              className="registroMedico__input"
              type="text"
              id="endereco"
              name="endereco_do_consultorio"
              value={medico.endereco_do_consultorio}
              onChange={handleInputMedico}
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
                value={medico.senha}
                onChange={handleInputMedico}
                id="senha"
                required
              />
            </div>
            <div className="registroMedico__from-group">
              <label
                className="registroMedico__label"
                htmlFor="confirmar_senha"
              >
                Confirmar Senha:
              </label>
              <input
                className="registroMedico__input"
                type="password"
                name="confirmar_senha"
                value={medico.confirmar_senha}
                onChange={handleInputMedico}
                id="confirmar_senha"
                required
              />
            </div>
          </div>
          <button
            className="login__button registroMedico__button"
            type="submit"
          >
            Registrarse
          </button>
        </form>
      </div>
    </div>
  );
}
