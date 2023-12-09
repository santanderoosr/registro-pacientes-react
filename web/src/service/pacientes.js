import axios from "axios";

const API = "http://localhost:3001";

export const createUser = async (user) => {
    return await axios.post(`${API}/pacientes`, user)
}

export const getUser = async (id) => {
    return await axios.get(`${API}/paciente/${id}`)
}

export const updateUser = async (id, user) => {
    return await axios.put(`${API}/paciente/${id}`, user)
}

export const deleteUser = async (id) => {
    return await axios.delete(`${API}/paciente/${id}`)
}