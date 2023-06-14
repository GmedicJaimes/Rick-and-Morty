import Card from '../Card/Card';
import style from './Cards.module.css'


export default function Cards(props) {

  const {characters, onClose} = props;
  return (
    <div className = {style.cardList}>
    {
      characters.map(({id, name, status, species, gender, origin, image}) => {
        return(
          <Card 
            key = {id} // no se muestra pero es un identificador para react
            id = {id}
            name = {name}
            status = {status}
            species = {species}
            gender = {gender}
            origin = {origin.name}
            image = {image}
            onClose={onClose}
          />
        );
      })
    }
    </div>
  );
}
