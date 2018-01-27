import * as types from '../actions/actionTypes';
import initialState from './initialState';
//julian commit from ubuntu

export default function personReducer(state = initialState.persons, action) {
  switch(action.type) {
    case types.LOAD_PERSONS_SUCCESS:
      console.log("::personReducer:: ENTRA A ::LOAD_PERSONS_SUCCESS", action.persons.length)
      return action.persons

    case types.CREATE_PERSON_SUCCESS:
    console.log("::personReducer:: ENTRA A ::CREATE_PERSON_SUCCESS")
      //el Object.assign lo ue hace es agregar el elemento a la lista de personas
      return [
       ...state.filter(person => person.id !== action.person.id),
       Object.assign({}, action.person)
     ]


    case types.DELETE_PERSON_SUCCESS: {
      console.log("::personReducer:: ENTRA A ::DELETE_PERSON_SUCCESS ", action)
     const newState = Object.assign([], state);
     const indexOfCatToDelete = state.findIndex(person => {return person.id == action.personId})
     newState.splice(indexOfCatToDelete, 1);
     //browserHistory.push('/cats');--esto como que es para la navegacion
     return newState;
   }


   case types.UPDATE_PERSON_SUCCESS:
   console.log("::personReducer:: ENTRA A ::UPDATE_PERSON_SUCCESS")
     //el Object.assign loq ue hace es agregar el elemento a la lista de personas
     return [
      ...state.filter(person => person.id !== action.person.id),
      Object.assign({}, action.person)
    ]


    default:
    console.log("::personReducer::  ENTRA A ::default")
      return state;
  }
}
