import { createConnection } from "mysql";

const connection = createConnection({
  host: "localhost",
  user: "root",
  password: "190586",
  database: "techmedconnect",
});

export default connection;
