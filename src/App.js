//?seccion de imports
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav.jsx';
import { useState, useEffect } from 'react';
import axios from 'axios';

import { Routes, Route } from "react-router-dom";
import About from './views/About.jsx';
import Detail from './views/Deatil.jsx';

import Form from './components/Form/Form.jsx';
import { useLocation, useNavigate} from "react-router-dom";

import Favorites from './components/Favorites/Favorites.jsx';

//?seccion estilos
import style from './App.module.css'



function App() {
  
  //? estado local
  const [characters, setCharacters] = useState([]);
  
  //?llamado a la ubicacion
  const location = useLocation();

  //? LOGIN
  const [access, setAccess] = useState(false);

  const EMAIL = 'akiloty3@gmail.com';
  const PASSWORD = 'dayana14'

  const navigate = useNavigate();


  //! funcion seguridad que valida datos
  function login(userData) {
    if(userData.password === PASSWORD && userData.email === EMAIL){
      setAccess(true);
      navigate('/home');
    }
  }

  useEffect(() => {
    !access && navigate('/');
  }, [access,navigate]);
 

  //! funcion para buscar en la api de rick and morty, el personaje que queramos
  const onSearch = (id) => {
    axios(`https://rickandmortyapi.com/api/character/${id}`)
    .then(response => response.data)
    .then((data) => {
      if (data.name) {
        setCharacters((oldChars) => [...oldChars, data]);
      } else {
        window.alert('¡No hay personajes con este ID!');
      }
    })
    .catch(() => {
      window.alert('No hay personajes con ese ID')
    });
  }


  //! funcion para cerrar la card que ya no queremos
  const onClose = (id) => {
    const characterFiltered = characters.filter(character => character.id !== Number(id))
    setCharacters(characterFiltered)
  }

  
  
  return (
    <div className = {style.principalContainer}>

      {/* Seccion location */}
        {
          // Seccion de Nav 
          location.pathname !== '/' ? <Nav onSearch = {onSearch} /> : null
        }

      <Routes >
        {/* Seccion de form*/}
        <Route path='/' element={<Form  login={login}/>} />

        {/* Seccion de cards */}
        <Route path='/home' element={<Cards characters={characters} onClose = {onClose}/>}/>
        
        {/* Seccion de about     */}
        <Route path='/about' element={<About/>}/>
        
        {/* Seccion de detailCards */}
        <Route path='/detail/:id' element={<Detail/>}/>

        <Route path='/favorites' element={<Favorites/>} />

          {/* <footer className = {style.footer}>
            <p>Hecho y Realizado por Gulliano Jaimes @ 2023 SoyHenry</p>
          </footer> */}
      </Routes>

    </div>
  );
}

export default App;
