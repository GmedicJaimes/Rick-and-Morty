//? imports
import { useState } from "react";
import validation from "./validation";
import style from './Form.module.css';
import logo from '../../assets/logo.webp'



const Form = ({login}) => {
  
  //estados locales
  const [userData, setUserData] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});
  

  //! funcion que nos permite reflejar el texto ingresado a nuestro estado local
  const handleChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    setUserData({...userData, [property]: value});
    setErrors(validation({...userData, [property]: value}));

  } 


  const handleSubmit = (event) => {
    event.preventDefault();

    if(!errors.email && !errors.password){
      login(userData);
    } else {
      alert('datos incompletos')
    }
  }



  return(
    <div className={style.container}>
      <form onSubmit={handleSubmit} className={style.containerLogin} >
        <img className={style.imagenLogo} src={logo}alt="logo" />
        <div className={style.labelEmail}>
          <label htmlFor="">Email:</label>
          <input type="text" name='email' placeholder="Your email" value={userData.email} onChange={handleChange}/>
          {
            errors.email && <span>{errors.email}</span>
          }
          
        </div>
        <div className={style.labelPassword}>
          <label htmlFor="">Password:</label>
          <input type="password" name='password' placeholder="Your password" value={userData.password} onChange={handleChange}/>
          {
            errors.password && <span>{errors.password}</span>
          }
        </div>
        <button className={style.buttonLogin}>Login</button>
      </form>
    </div>
  );
}


export default Form;