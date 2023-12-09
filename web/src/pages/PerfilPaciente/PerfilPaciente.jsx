import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import moment from "moment";

import * as userService from "../../service/pacientes.js";

import "./PerfilPaciente.css";

export default function PerfilPaciente() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [user, setUser] = useState("");

  const loadUser = async (id) => {
    console.log(id);

    try {
      const resUser = await userService.getUser(id)

      setUser(resUser.data)
      
    } catch (err) {
      console.log(err);
    }
  };

  const formattedDataNascimento = (dataNascimento) => {
    return moment(dataNascimento).format('YYYY/MM/DD')
  }

  useEffect(() => {
    if (id) {
      loadUser(id);
    }
  }, [id]);

  return (
    <div className="information">
      <h3 className="information__title">Informações Pessoais</h3>

      <section className="information__personal">

        <div className="information__personal-container">
          <img
            src="https://png.pngtree.com/element_origin_min_pic/00/00/06/12575cb97a22f0f.jpg"
            className="information__personal-img"
            alt="Foto do Candidato"
          />
          <h4 className="information__personal-name">{user.nome}</h4>
        </div>

        <div className="information__personal-container">
          <div>
            <h5 className="title">Dados Pessoais</h5>
            <p className="paragraph">Data de Nascimento: {formattedDataNascimento(user.data_de_nascimento)}</p>
            <p className="paragraph">CPF: {user.cpf}</p>
          </div>

          <div className="information__personal-container">
            <h5 className="title">Endereço</h5>
            <p>{user.endereco}</p>
          </div>

          <div className="information__personal-container">
            <h5 className="title">Informações de Contato</h5>
            <p className="paragraph">E-mail: {user.email_address}</p>
            <p className="paragraph">Celular: {user.telefone}</p>
          </div>
        </div>
      </section>


      <div className="container__buttons">
        <button className="login__button btn-edit" onClick={() => navigate(`/registropacientes/${id}`)}>Editar dados</button>
        <button className="login__button" onClick={() => navigate('/')}>Voltar ao Início</button>
      </div>
    </div>
  );
}
