class PersonApi {

  /*
  *Llamado al servidor para obtener todos las personas existentes*
  */
  static getAllPersons() {
    console.log("PersonApi ENTRA A ::getAllPersons aPI")
    return fetch('http://localhost:9000/ejercicio/personas').then(response => {
      console.log("PersonApi ENTRA A ::getAllPersons 1")
      return response.json();
    }).catch(error => {
          console.log("PersonApi ENTRA A ::getAllPersons 2", error)
      return error;
    });
  }


/*
*Llamado al servidor para envío de nuevo registro
*/
static createPerson(person) {
  console.log("PersonApi ENTRA A ::createPerson aPI", person)
  //la siguiente lnea puede ser util cuando manejamos sesion
  //const headers = Object.assign({'Content-Type': 'application/json'}, this.requestHeaders());
  const headers = Object.assign({'Content-Type': 'application/json'});
  const request = new Request('http://localhost:9000/ejercicio/personasInsert', {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(person)
  });


  return fetch(request).then((response) => {
    if (response.ok) {
      return person;
    } else {
      throw new Error('LLamando al servicio createSomething went wrong');
    }
  }).catch(error => {
    console.log("PersonApi-Error la respuesta es  ::", error)
    return error;
  });
}



/*
*Llamado al servidor para envío de nuevo registro
*/
static updatePerson(person) {
  console.log("PersonApi ENTRA A ::updatePerson aPI", person)
  //la siguiente lnea puede ser util cuando manejamos sesion
  //const headers = Object.assign({'Content-Type': 'application/json'}, this.requestHeaders());
  const headers = Object.assign({'Content-Type': 'application/json'});
  const request = new Request('http://localhost:9000/ejercicio/updatePerson', {
    method: 'PUT',
    headers: headers,
    body: JSON.stringify(person)
  });


  return fetch(request).then((response) => {
    if (response.ok) {
      return person;
    } else {
      throw new Error('LLamando al servicio updatePerson went wrong');
    }
  }).catch(error => {
    console.log("PersonApi-Error la respuesta es  ::", error)
    return error;
  });
}





/*
*Llamado al servidor para eliminar un¿registro
*/
static deletePerson(id) {

  const headers = Object.assign({'Content-Type': 'application/json'});
  const request = new Request(`http://localhost:9000/ejercicio/personasDelete/${id}`, {
    method: 'DELETE',
    headers: headers
  });


  return fetch(request).then((response) => {
    if (response.ok) {
      console.log("PersonApi ENTRA A ::deletePerson aPI VA A retornar EL ID", id)
      return id;
    } else {
      throw new Error('LLamando al servicio personasDelete went wrong');
    }
  }).catch(error => {
    console.log("PersonApi-personasDelete Error la respuesta es  ::", error)
    return error;
  });
}

}

export default PersonApi;
