import imagen from "../assets/633262.png";
import style from "./About.module.css"

const About = () => {
  return (
    <div className={style.container}>
      <div className={style.containerPrincipal}>
        <div className={style.infoAbout}>
          <h1>Who is Rick Sanchez?</h1>
          <p>Rick Sanchez es un personaje ficticio de la serie animada de televisión "Rick y Morty". Es un científico loco, excéntrico y alcohólico que se embarca en aventuras interdimensionales junto a su nieto Morty. Rick es retratado como un genio científico con habilidades excepcionales en la creación de inventos y tecnología avanzada. Es conocido por su cinismo, su humor ácido y su falta de empatía hacia los demás. A lo largo de la serie, Rick y Morty se involucran en situaciones extravagantes y peligrosas en diferentes dimensiones y planetas. Rick es considerado uno de los personajes más icónicos de la animación contemporánea.</p>
        </div>
        <div className={style.imagenAbout}> 
          <img src={imagen} alt="Rick Sanchez" />
        </div>
      </div>
    </div>
  );
}

export default About;