import express from "express";
import connection from "./database/connection.js";
const routes = express.Router();

routes.get("/", (req, res) => {
  return res.json("rotaget");
});

routes.get("/pacientes", (req, res) => {
  const sql = "SELECT * FROM techmedconnect.user_pacientes";
  connection.query(sql, (err, data) => {
    if (err) {
      return res.json(err);
    }

    return res.json(data);
  });
});

routes.get("/paciente/:id", (req, res) => {
  const pacienteId = req.params.id;
  const sql = "SELECT * FROM techmedconnect.user_pacientes WHERE paciente_id = ?";

  connection.query(sql, [pacienteId], (err, data) => {
     if (err) {
      return res.json(err);
    }

    if (data.length === 0) {
      return res.status(404).json({ error: 'Paciente não encontrado' });
    }

    return res.json(data[0]);
  });
});

routes.post("/pacientes", (req, res) => {
  const { email_address, numero_cartao_sus, cpf, telefone, senha, confirmar_senha } = req.body;

  if (senha !== confirmar_senha) {
    return res.status(400).json({ error: "As senhas não correspondem" });
  }

  const sqlCheckExistence =
    "SELECT * FROM techmedconnect.user_pacientes WHERE numero_cartao_sus = ? OR cpf = ? OR email_address = ? OR telefone = ?";

  connection.query(
    sqlCheckExistence,
    [email_address, numero_cartao_sus, cpf, telefone],
    (err, results) => {
      if (err) {
        return res.json(err);
      }

      if (results.length > 0) {
        const existingFields = results.map((result) => {
          if (result.email_address === email_address) {
            return "E-mail";
          }
          if (result.cpf === cpf) {
            return "CPF";
          }
          if (result.numero_cartao_sus === numero_cartao_sus) {
            return "Número do cartão SUS";
          }
          if (result.telefone === telefone) {
            return "Telefone";
          }
          return null;
        }).filter((field) => field !== null);

        // Se algum campo já existe, retorne um erro ou ação apropriada
        return res.status(400).json({ error: `${existingFields.join(', ')} já existem `});
      } else {
        // Se o número do cartão SUS não existe, proceda com a inserção no banco de dados
        const sql =
          "INSERT INTO techmedconnect.user_pacientes (email_address, senha, nome, sobrenome, cpf, data_de_nascimento, numero_cartao_sus, telefone, endereco, confirmar_senha) VALUES (?)";
        const values = [
          req.body.email_address,
          req.body.senha,
          req.body.nome,
          req.body.sobrenome,
          req.body.cpf,
          req.body.data_de_nascimento,
          req.body.numero_cartao_sus,
          req.body.telefone,
          req.body.endereco,
          req.body.confirmar_senha,
        ];

        connection.query(sql, [values], (err, data) => {
          if (err) {
            return res.json(err);
          }

          return res.json("Paciente criado");
        });
      }
    }
  );
});

routes.put("/paciente/:id", (req, res) => {
  const pacienteId = req.params.id;
  const {
    email_address,
    senha,
    nome,
    sobrenome,
    cpf,
    data_de_nascimento,
    numero_cartao_sus,
    telefone,
    endereco,
    confirmar_senha,
  } = req.body;

  const sql = `
    UPDATE techmedconnect.user_pacientes 
    SET 
      email_address = ?,
      senha = ?,
      nome = ?,
      sobrenome = ?,
      cpf = ?,
      data_de_nascimento = ?,
      numero_cartao_sus = ?,
      telefone = ?,
      endereco = ?,
      confirmar_senha = ?
    WHERE paciente_id = ?
  `;

  const values = [
    email_address,
    senha,
    nome,
    sobrenome,
    cpf,
    data_de_nascimento,
    numero_cartao_sus,
    telefone,
    endereco,
    confirmar_senha,
    pacienteId,
  ];

  connection.query(sql, values, (err, result) => {
    if (err) {
      return res.json(err);
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "Paciente não encontrado" });
    }

    return res.json("Paciente atualizado com sucesso");
  });
});

routes.delete("/paciente/:id", (req, res) => {
  const pacienteId = req.params.id;

  const sqlDeletePaciente = "DELETE FROM techmedconnect.user_pacientes WHERE paciente_id = ?";

  connection.query(sqlDeletePaciente, [pacienteId], (err, result) => {
    if (err) {
      return res.json(err);
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "Paciente não encontrado" });
    }

    return res.json("Paciente excluído com sucesso");
  });
});



routes.get("/medicos", (req, res) => {
  const sql = "SELECT * FROM techmedconnect.users_medicos";
  connection.query(sql, (err, data) => {
    if (err) {
      return res.json(err);
    }

    return res.json(data);
  });
});

routes.post("/medicos", (req, res) => {
  const { email_address, cpf, crm, telefone } = req.body;
  const sqlCheckExistence = `
    SELECT * 
    FROM techmedconnect.users_medicos 
    WHERE email_address = ? OR cpf = ? OR crm = ? OR telefone = ?`;
  
  connection.query(
    sqlCheckExistence,
    [email_address, cpf, crm, telefone],
    (err, results) => {
      if (err) {
        return res.json(err);
      }

      if (results.length > 0) {
        const existingFields = results.map((result) => {
          if (result.email_address === email_address) {
            return "E-mail";
          }
          if (result.cpf === cpf) {
            return "CPF";
          }
          if (result.crm === crm) {
            return "CRM";
          }
          if (result.telefone === telefone) {
            return "Telefone";
          }
          return null;
        }).filter((field) => field !== null);

        // Se algum campo já existe, retorne um erro ou ação apropriada
        return res.status(400).json({ error: `${existingFields.join(', ')} já existem `});
      } else {
        // Se nenhum campo já existe, proceda com a inserção no banco de dados
        const sql =
          "INSERT INTO techmedconnect.users_medicos (email_address, senha, nome, sobrenome, cpf, data_de_nascimento, crm, especialidade, telefone, endereco_do_consultorio, confirmar_senha) VALUES (?)";
        const values = [
          req.body.email_address,
          req.body.senha,
          req.body.nome,
          req.body.sobrenome,
          req.body.cpf,
          req.body.data_de_nascimento,
          req.body.crm,
          req.body.especialidade,
          req.body.telefone,
          req.body.endereco_do_consultorio,
          req.body.confirmar_senha,
        ];

        connection.query(sql, [values], (err, data) => {
          if (err) {
            return res.json(err);
          }

          return res.json("Médico criado");
        });
      }
    }
  );
});

export default routes;
