import style from "./Search.module.css"

import { useState } from "react";

const SearchBar = ({ onSearch }) => {

  const [id, setId] = useState('');

  const handleChange = (event) => {
    setId(event.target.value)
  }

  return (
    <div className={style.containerSearch}>
      <input type='search' placeholder="Ingrese Busqueda" onChange={handleChange} value={id} />
      <button onClick={() => { onSearch(id); setId('') }}>Agregar</button>
    </div>
  );
}


export default SearchBar;