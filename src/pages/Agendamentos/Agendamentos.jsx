import "./Agendamentos.css"
export default function Agendamentos() {
  return (
    <div>
      <div className="agendamento__container">
        <h1 className="agendamento__h1">
          encontre os melhores profissionais de saude da sua região agende
          atendimento
        </h1>
        <form className="agendamento__form">
          <div className="agendamento__form-group">
            <label className="agendamento__label" htmlFor="nomeOuEspecialidade">
              Nome ou Especialidade
            </label>
            <input
              className="agendamento__input"
              type="text"
              id="nomeOuEspecialidade"
              name="nomeOuEspecialidade"
              required
            />
          </div>
          <div className="agendamento__form goup">
            <label
              className="agendamento__label"
              htmlFor="cidadeMinhalocalizaçao"
            >
              Cidade Minha Localizaçâo
            </label>
            <input
              className="agendamento__input"
              type="text"
              id="cidadeMinhalocalizaçao"
              name="cedadeMinhalocalizaçao"
              required
            />
          </div>
          <div className="agendamento__from-group">
            <label className="agendamento__label" htmlFor="convenios">
              Convenios (todos)
            </label>
            <input
              className="agendamento__input"
              type="text"
              name="convenios"
              id="convenios"
              required
            />
          </div>
          <div className="agendamento__from-group">
            <label className="agendamento__label" htmlFor="presencial">
              Presencial
            </label>
            <input
              className="agendamento__input"
              type="text"
              name="presencial"
              id="presencial"
              required
            />
          </div>
          <div className="agendamento__from-group">
            <label className="agendamento__label" htmlFor="teleconsulta">
              Teleconsulta
            </label>
            <input
              className="agendamento__input"
              type="text"
              name="teleconsulta"
              id="teleconsulta"
              required
            />
          </div>

          <button className="login__button agendamentos__button" type="submit">
            Buscar Horarios
          </button>
        </form>
      </div>
    </div>
  );
}
