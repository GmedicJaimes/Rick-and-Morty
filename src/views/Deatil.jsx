import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";


const Detail = () => {

  //obtener id del personaje
  const { id } = useParams();
  
  //creacion del estado local
  const [ character, setCharacter] = useState({});

  //llamado de la api
  useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${id}`)
    .then(response => response.data)
    .then(( data ) => {
       if (data.name) {
          setCharacter(data);
       } else {
          window.alert('No hay personajes con ese ID');
       }
    });
    return setCharacter({});
  }, [id]);

  return(
    <div>
      <h1>{character?.name}</h1>
      <h2>STATE | {character?.status}</h2>
      <h2>SPECIES | {character?.species}</h2>
      <h2>GENDER | {character?.gender}</h2>
      <h2>ORIGIN | {character?.origin?.name}</h2>
      <img src={character?.image} alt={character?.name} />   
    </div>
  );
}

export default Detail;