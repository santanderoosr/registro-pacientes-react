import axios from "axios";

const API = "http://localhost:3001";

export const createMedico = async (medico) => {
  return await axios.post(`${API}/medicos`, medico);
};
