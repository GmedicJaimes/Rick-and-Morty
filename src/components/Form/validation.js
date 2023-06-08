const validation = (userData) => {

  const errors = {};

  //errores email
  if(! /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{3})+$/.test(userData.email)) {errors.email = 'Email invalido';}
  
  if(!userData.email) {errors.email = 'Email vacio';}
  
  if(userData.email.length > 35) {errors.email = 'El email debe ser menor a 35 caracteres';}


  //errores password
  if(!/.*\d+/.test(userData.password)) {errors.password = 'La contraseña debe tener un numero';}
 
  if(userData.password.length < 6 || userData.password.length > 10) {errors.password = 'La contraseña debe tener entre 6 y 10 caracteres';}

  return errors;
} 

export default validation;