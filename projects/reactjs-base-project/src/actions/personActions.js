import personApi from '../api/PersonApi';
import * as types from './actionTypes';



//::::::::::::::::::::::::::::::::Callers functions
export function loadPersons() {
  console.log("PersonAction ENTRA A ::loadPersons()")
  return function(dispatch) {
    return personApi.getAllPersons().then(persons => {
      dispatch(loadPersonsSuccess(persons));
    }).catch(error => {
      throw(error);
    });
  };
}

export function createPerson(person) {
  console.log("PersonAction ENTRA A ::createPerson()")
  return function (dispatch) {
    return personApi.createPerson(person).then(responsePerson => {
      dispatch(createPersonSuccess(responsePerson));
      return responsePerson;
    }).catch(error => {
      throw(error);
    });
  };
}



export function deletePerson(id) {
  console.log("PersonAction ENTRA A ::deletePerson() con ID", id)
  return function (dispatch) {
    return personApi.deletePerson(id).then(responseId => {
      dispatch(deletePersonSuccess(responseId));
      return responseId;
    }).catch(error => {
      throw(error);
    });
  };
}




//::::::::::::::::::::::::::::::::Success functions
export function loadPersonsSuccess(persons) {
    console.log("PersonAction ENTRA A ::loadPersonsSuccess()")
  return {type: types.LOAD_PERSONS_SUCCESS, persons};
}


export function filterByColumn(persons) {
    console.log("filtrando por columna")
  return {type: types.LOAD_PERSONS_SUCCESS, persons};
}


export function updatePersonSuccess(person) {
  return {type: types.UPDATE_PERSON_SUCCESS, person}
}

export function createPersonSuccess(person) {
    console.log("PersonAction ENTRA A ::createPersonSuccess()")
  return {type: types.CREATE_PERSON_SUCCESS, person}
}


export function deletePersonSuccess(personId) {
    console.log("PersonAction ENTRA A ::deletePersonSuccess()")
  return {type: types.DELETE_PERSON_SUCCESS, personId}
}
