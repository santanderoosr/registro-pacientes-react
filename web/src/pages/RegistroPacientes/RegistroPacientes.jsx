import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import moment from "moment";

import * as userService from "../../service/pacientes.js";

import "./RegistroPacientes.css";

export default function RegistroPacientes() {
  const { id } = useParams();
  const navigate = useNavigate();

  const initialStateUser = {
    nome: "",
    sobrenome: "",
    data_de_nascimento: "",
    cpf: "",
    email_address: "",
    telefone: "",
    numero_cartao_sus: "",
    endereco: "",
    senha: "",
    confirmar_senha: "",
  };
  const [user, setUser] = useState(initialStateUser);

  const handleInputUser = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmitUser = async (e) => {
    e.preventDefault();

    try {
      if (!id) {
        await userService.createUser(user);

        setUser(initialStateUser);
        alert("Usuário Criado");
      } else {
        await userService.updateUser(id, user);

        alert("Usuário atualizado!");

        navigate(-1);
      }
    } catch (error) {
      alert(error.response.data.error);
      console.error(error);
    }
  };

  const getUser = async (id) => {
    const res = await userService.getUser(id);

    const {
      nome,
      sobrenome,
      data_de_nascimento,
      cpf,
      email_address,
      telefone,
      numero_cartao_sus,
      endereco,
      senha,
      confirmar_senha,
    } = res.data;

    const formattedDataNascimento =
      moment(data_de_nascimento).format("YYYY/MM/DD");

    setUser({
      nome,
      sobrenome,
      data_de_nascimento: formattedDataNascimento,
      cpf,
      email_address,
      telefone,
      numero_cartao_sus,
      endereco,
      senha,
      confirmar_senha,
    });
  };

  const userDelete = async (id) => {
    try {
      await userService.deleteUser(id);

      alert("Paciente excluído com sucesso");

      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (id) {
      getUser(id);
    }
  }, [id]);

  return (
    <div>
      <div className="registro__container">
        <h2 className=" registro__h2">Registro de Pacientes</h2>
        <form className="registro__form" onSubmit={handleSubmitUser}>
          <div className="registro__form-group">
            <label className="registro__label" htmlFor="nome">
              Nome:
            </label>
            <input
              className="registro__input"
              type="text"
              id="nome"
              name="nome"
              value={user.nome}
              onChange={handleInputUser}
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
              value={user.sobrenome}
              onChange={handleInputUser}
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
              name="data_de_nascimento"
              value={user.data_de_nascimento}
              onChange={handleInputUser}
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
              value={user.cpf}
              onChange={handleInputUser}
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
              name="email_address"
              value={user.email_address}
              onChange={handleInputUser}
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
              name="telefone"
              value={user.telefone}
              onChange={handleInputUser}
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
              name="numero_cartao_sus"
              value={user.numero_cartao_sus}
              onChange={handleInputUser}
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
              value={user.endereco}
              onChange={handleInputUser}
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
                value={user.senha}
                onChange={handleInputUser}
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
                value={user.confirmar_senha}
                onChange={handleInputUser}
                id="confirmar_senha"
                required
              />
            </div>
          </div>

          {id ? (
            <div className="container__buttons-paciente">
              <button
                className="login__button registro__button btn-edit"
                type="submit"
              >
                Atualizar
              </button>
            </div>
          ) : (
            <button className="login__button registro__button" type="submit">
              Registrarse
            </button>
          )}
        </form>

        {!id ? (
          ""
        ) : (
          <button
            className="login__button registro__button btn-excluir"
            onClick={() => userDelete(id)}
          >
            Excluir Conta
          </button>
        )}
      </div>
    </div>
  );
}
