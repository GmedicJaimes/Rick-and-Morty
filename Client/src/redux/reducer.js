import { ADD_FAV, REMOVE_FAV } from "./actions"


let initialState = {myFavorites: [], allCharactersFav: []}

const reducer = (state = initialState, action) => {

  switch(action.type){
    
    case ADD_FAV:
      return {...state, myFavorites: action.payload, allCharactersFav: action.payload}
    
    case REMOVE_FAV:
      return {...state, myFavorites: action.payload}
    
    
    default:
      return{...state}
  }
}

export default reducer;