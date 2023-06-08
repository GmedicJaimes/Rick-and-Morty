//estilos
import style from "./Nav.module.css";

//importaciones
import SearchBar from  "../Search/SearchBar.jsx";
import { Link } from "react-router-dom";

const Nav = ({onSearch}) => {

  return(
    
    <nav className = {style.containerNav}>
        <SearchBar onSearch={onSearch} className = {style.containerSearch}/>
        <ul className = {style.unorderList}>

          <Link to="/home" className={style.link}>
            <li>Home</li>
          </Link>
          
          <Link to="/about" className={style.link}>
            <li>About</li>
          </Link>
          
          <Link to='/favorites' className={style.link}>
            <li>Favorites</li>
          </Link>

          <li>Contact Galaxy</li>
        </ul>
    </nav> 
  );

}

export default Nav;