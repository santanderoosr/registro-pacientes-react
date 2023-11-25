import './App.css'
import Header from "./componets/Header/Header";
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import RegistroPacientes from './pages/Registro/RegistroPacientes';


function App() {

  return (
    <>
      <Header/>
      
      <Home/>

      <Login/> 

      <RegistroPacientes/>
    </>
  );
}

export default App
