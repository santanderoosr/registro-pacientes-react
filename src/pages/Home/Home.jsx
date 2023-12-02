import { Link } from "react-router-dom";
import Rectangle from "../../assets/images/Rectanglesobre.png";
import Medicos from "../../assets/images/paraMedicos.png";
import Paciente from "../../assets/images/paraPacientes2.png";


export default function Home() {
  return (
    <div>
      <div className="sobre-section" id="sobre">
        <h1>Sobre</h1>
        <p>
          Nosso sistema oferece um serviço de consulta com especialistas médicos
          disponíveis, com agendas abertas para você.
        </p>
        <img src={Rectangle} alt="Imagen Sobre" />

        <div className="steps">
          <h2>Como Funciona</h2>
          <ol className="ol">
            <li>Faça seu registro</li>
            <li>Busque especialistas</li>
            <li>
              Escolha horários, centro de atenção e nosso sistema agenda sua
              consulta.
            </li>
          </ol>
        </div>
      </div>

      <section className="description">
        <div>
          <h4>PACIENTES</h4>
          <p>
            Procuram atendimento médico, diagnóstico, tratamento ou cuidados de
            saúde. Eles podem apresentar uma variedade de condições médicas,
            desde doenças simples até condições que exigem atenção especializada
          </p>
        </div>

        <div>
          <h4>MEDICOS</h4>
          <p>
            Oferecemos um ambiente seguro e profissional para os pacientes,
            fornecendo atendimento médico de qualidade, buscando sempre o
            bem-estar do indivíduo que busca ajuda médica
          </p>
        </div>

        <div>
          <h4>CONEXÃO</h4>
          <p>
            Queremos conectar esses dois atores em busca do melhor ambiente de
            praticidade e excelencia
          </p>
        </div>
      </section>

      <section id="cadastro" className="cadastro">
        <h2>CADASTROS</h2>

        <div className="cadastro__container">
          <Link to={"/registromedicos"}>
            <div>
              <h4>Para Medicos</h4>
              <img src={Medicos} alt="paraMedicos" />
            </div>
          </Link>

          <Link to={"/registropacientes"}>
            <div>
              <h4>Para Pacientes</h4>
              <img src={Paciente} alt="paraPacientes" />
            </div>
          </Link>
        </div>
      </section>

      <section className="valores" id="valores">
        <h1>NOSSOS VALORES</h1>

        <div>
          <div className="valores__card">
            <h3>Missão</h3>
            <p>
              Fornecer atendimento médico abrangente e de qualidade aos nossos
              pacientes, promovendo a saúde e o bem-estar por meio de serviços
              acessíveis e personalizados
            </p>
          </div>
          <div className="valores__card">
            <h3>Visão</h3>
            <p>
              Ser o líder reconhecido na prestação de serviços médicos
              inovadores e centrados no paciente, sendo a primeira opção para a
              comunidade em matéria de cuidados de saúde
            </p>
          </div>
          <div className="valores__card">
            <h3>Valores</h3>
            <p>
              Inovação: Buscamos constantemente melhorar e adotar tecnologias e
              abordagens avançadas na saúde. Acessibilidade: Garantimos que
              nossos serviços sejam acessíveis a todos
            </p>
          </div>
        </div>
      </section>

      <section className="empresas-parceiras">
        <h2>Empresas Parceiras</h2>
        <div className="logos">
          <img src="logo-empresa1.png" alt="Logo Empresa 1" />
          <img src="logo-empresa2.png" alt="Logo Empresa 2" />
          <img src="logo-empresa3.png" alt="Logo Empresa 3" />
          <img src="logo-empresa4.png" alt="Logo Empresa 4" />
          <img src="logo-empresa5.png" alt="Logo Empresa 5" />
          <img src="logo-empresa6.png" alt="Logo Empresa 6" />
        </div>
      </section>
    </div>
  );
}
