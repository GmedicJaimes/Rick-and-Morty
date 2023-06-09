import style from "./Card.module.css"
import { IoClose } from 'react-icons/io5'
import { FaHeart, FaRegHeart } from 'react-icons/fa';

import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux"
import { addFav, removeFav } from "../../redux/actions"
import { useState, useEffect } from "react";

const Card = ({id, name, species, gender, status, origin, image, onClose, addFav , removeFav, myFavorites} ) => {

  const [isFav, setIsFav] = useState(false);


  const handleFavorite = () => {
    if(isFav){
      setIsFav(false);
      removeFav(id);
    } else {
      setIsFav(true);
      addFav({id, name, species, gender, status, origin, image, onClose});
    }
  }

  useEffect(() => {
    myFavorites.forEach((fav) => {
       if (fav.id === id) {
          setIsFav(true);
       }
    });
  }, [myFavorites, id]);

  return (
    <div className ={style.containerCard} >


      <div className = {style.card} >
        <div className={style.containerButton}>
          <img src={image} alt={name} />
          <button className={style.btnFavorite} onClick={handleFavorite}>{isFav ? <FaHeart /> : <FaRegHeart />}</button>
          <button className={style.btnClose} onClick={() => onClose(id)}>{<IoClose />}</button>
        </div>
        
        <Link to={`/detail/${id}`} className={style.link}>
          <h3>{name}</h3>
        </Link>

        <div className = {style.info}>
          <p>Estatus: {status}</p>
          <p>Especie: {species}</p>
          <p>Genero: {gender}</p>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    addFav: (character) => {dispatch(addFav(character))},
    removeFav: (id) => {dispatch(removeFav(id))},
  }

}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Card);