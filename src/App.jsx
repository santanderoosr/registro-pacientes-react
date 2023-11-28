import './App.css'
import Header from "./componets/Header/Header";
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import RegistroPacientes from './pages/Registro/RegistroPacientes';
import RegistroMedicos from './pages/Registro/RegistrroMedicos';


function App() {

  return (
    <>
      <Header/>
      
      <Home/>

      <Login/> 

      <RegistroPacientes/>
      
      <RegistroMedicos/>
    </>
  )
}

export default App
