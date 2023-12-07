const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(cors());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "190586",
  database: "techmedconnect",
});

app.use(express.json())

app.get("/", (req, res) => {
  return res.json("rotaget");
});

app.get("/pacientes", (req, res) => {
  const sql = "SELECT * FROM techmedconnect.user_pacientes";
  db.query(sql, (err, data) => {
    if (err) {
      return res.json(err);
    }

    return res.json(data);
  });
});

app.post("/pacientes", (req, res) => {
  const sql =
    "INSERT INTO `techmedconnect`.`user_pacientes` (`user_handle`, `email_address`, `senha`, `nome`, `sobrenome`, `cpf`, `data_de_nascimento`, `numero_cartao_sus`, `telefone`, `endereco`) VALUES (?)";
  const values = [
    req.body.email_address,
    req.body.user_handle,
    req.body.senha,
    req.body.nome,
    req.body.sobrenome,
    req.body.cpf,
    req.body.data_de_nascimento,
    req.body.numero_cartao_sus,
    req.body.telefone,
    req.body.endereco,
  ];

  db.query(sql, [values], (err, data) => {
    if (err) {
      return res.json(err);
    }

    return res.json("paciente creado");
  });
});

app.listen(3001, () => {
  console.log("server running");
});
