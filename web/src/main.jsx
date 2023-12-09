import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App.jsx";
import Header from "./componets/Header/Header.jsx";
import Login from "./pages/Login/Login.jsx";
import RegistroPacientes from "./pages/RegistroPacientes/RegistroPacientes.jsx";
import RegistroMedicos from "./pages/RegistroMedicos/RegistrroMedicos.jsx";
import Agendamentos from "./pages/Agendamentos/Agendamentos.jsx";
import Footer from "./componets/Footer/Footer.jsx";
import PerfilPaciente from "./pages/PerfilPaciente/PerfilPaciente.jsx";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registropacientes/:id?" element={<RegistroPacientes/>} />
        <Route path="/registromedicos" element={<RegistroMedicos/>} />
        <Route path="/agendamento" element={<Agendamentos/>}/>
        <Route path="/paciente/:id" element={<PerfilPaciente />}/>
      </Routes>

      <Footer/>
    </BrowserRouter>
  </React.StrictMode>
);
