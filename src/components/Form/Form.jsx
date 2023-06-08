//? imports
import { useState } from "react";
import validation from "./validation";



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
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="">Email:</label>
        <input type="text" name='email' placeholder="Email" value={userData.email} onChange={handleChange}/>
        {
          errors.email && <span>{errors.email}</span>
        }
        
      </div>
      <div>
        <label htmlFor="">Password:</label>
        <input type="password" name='password' placeholder="Password" value={userData.password} onChange={handleChange}/>
        {
          errors.password && <span>{errors.password}</span>
        }
      </div>
      <button>Submit</button>
    </form>
  );
}


export default Form;