import React, { Component } from 'react';//para tener acceso a la clase Component
import {connect} from 'react-redux';
import * as personActions from '../../../actions/personActions';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import PersonForm from './PersonForm';
import 'react-datepicker/dist/react-datepicker.css';
import '../css/AddPersonModal.css';
import {bindActionCreators} from 'redux';

class AddPersonModal extends Component{
  constructor(props) {
  super(props);
  console.log('entra a AddPersonModal::::constructor', this.props.show)
  this.state = {
    personM:this.props.personSel,
    savingValues: false,
    savePerson: {
      id:11,
      name:'',
      age:0,
      address:{
            id:2,
            street:'',
            city:''
            }
      }
  };
  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
  this.resetFields = this.resetFields.bind(this);
  this.savePerson = this.savePerson.bind(this);

  this.getOptions = this.getOptions.bind(this);
  this.handleCityChange = this.handleCityChange.bind(this);
  this.updatePersonState = this.updatePersonState.bind(this);
  this.handleNeighborhoodChange = this.handleNeighborhoodChange.bind(this);
  this.getNeighborhoodField = this.getNeighborhoodField.bind(this);
}


/*
 la funcion componentWillReceiveProps es propia de React js y lo que permite es modificar el state
 justo antes del renderizado
*/
componentWillReceiveProps(){

  let personUpdate = {
     nameValue: '',
     birthDay: moment(),
     city:'',
     neighborhood:''
   }

  if(this.props.selectedId.toString() !== '' && !this.props.isCreate){
      personUpdate = {
        nameValue: this.props.personSel.nameValue,
        birthDay: moment(),
        city:'',
        neighborhood:''
      }

    }
  this.setState({
    personM: personUpdate
  });
}







//verifica en que se usa
  handleChange(event) {
    const valueObject = (event instanceof  moment)
    if(event instanceof  moment){
      console.log("es fecha", event  )
      this.setState({
        birthDay: event
      });
    }else{
      console.log("estoy seteando valor de nombre", valueObject  )
      const target = event.target;
      console.log("estoy seteando valor de tipo",  target.type )
      const value = target.type === 'checkbox' ? target.checked : target.value;
      const name = target.name;
      console.log("estoy seteando valorname",  name )
      this.setState({
        [name]: value
      });
    }

  }


/*
*
*/
updatePersonState(event) {
    console.log('hola');
    const valueObject = (event instanceof  moment)
    const person = this.state.personM;
    if(event instanceof  moment){
      console.log("es fecha", event  )
      person['birthDay'] = event;
    }else{
      const field = event.target.name;
      console.log("desde el onsave del modal updatePersonState",field,person);
      person[field] = event.target.value;
    }

    return this.setState({person: person});
  }

  /*
  *
  */
  savePerson(event) {
    event.preventDefault()

//En varios casos esta transformacion no es necesaria sino que de una se le pasa
//el objeto como prop del componnete hijo y con solo hacer por ejemplo en el input colocarle
//que hace referencia a this.state.person.nameValue el valor se setea automaticaly
//aca lo hago para efecto de aprendizaje, util en el momento en que  sea requerido, por ejemplo transformar valores
//como el de la edad que es una fecha pero se debe transformar a entero (restar fechas)
    const savePerson = this.state.savePerson
    const address = this.state.savePerson.address
    savePerson['name'] = this.state.personM.nameValue
    savePerson['age'] = moment().diff(this.state.personM.birthDay, 'years')
    address['city'] = this.state.personM.city
    address['street'] = this.state.personM.neighborhood
    savePerson['address'] = address
    this.setState({savePerson: savePerson});
    console.log('AddPersonModal SAVE PERSONA  CON ', this.state.savePerson)
    console.log('AddPersonModal SAVE address  CON ', this.state.savePerson.address)

    this.props.actions.createPerson(this.state.savePerson)
  }

  getOptions(key) {
   if (!this.props.fieldMap[key]) {
     return null;
   }

   return this.props.fieldMap[key].map(function (el, i) {
     return <option key={i} value={el.value}>{el.label}</option>
   });
 }

 handleCityChange(event) {
   console.log('AddPersonModal::va a setear city en el state', event.target.name)
   console.log('AddPersonModal::event.target.value', event.target.value)
   const field = event.target.name;
   const person = this.state.personM;
   person['city'] = event.target.value;
   person['neighborhood'] = '';
   return this.setState({person: person});
  }


handleNeighborhoodChange(event) {
  const person = this.state.personM;
  person['neighborhood'] = event.target.value;
  return this.setState({person: person});
 }


 getNeighborhoodField() {
   if (!this.state.personM.city) {
     return null;
   }

   return (
     <select onChange={this.handleNeighborhoodChange} value={this.state.personM.neighborhood}>
       <option value="">---</option>
       {this.getOptions(this.state.personM.city)}
     </select>
   )
 }


/*
tambien lo pude haber mandado como value desde el picker(ver documentación)  event.target.value
*/
  handleChangeRaw(event) {
    const target = event.target;
    console.log("handleChangeRaw estoy seteando valor de tipo",  target.type )

}

/*
Note como este metodo ya tiene toda la informacion a registrar
*/
  handleSubmit(event) {
    console.log("A value was submitted:", this.state.nameValue)
    console.log("A value was submitted:", this.state.birthDay)
    console.log("A value was submitted:", this.state.city)
    console.log("A value was submitted:", this.state.neighborhood)
    event.preventDefault();
  }

/**
* Note como esta funcion se le pasa como prop al Form, y no pertenece al form
* porque se decide que euien contiene el objecto json es quien implementa su borrado
* sino me imagino que al form se
*/
  resetFields(event) {
    this.setState({person:{nameValue: '', birthDay: moment(), city:'', neighborhood:''}});
  }

/*
* Function to reder this component
*/
   render() {
      console.log('AddPersonModal:: se muestra SI O NO ', this.props.show)
        console.log('AddPersonModal:: this.state.personM.nameValue ',this.state.personM.nameValue)

        console.log('AddPersonModal:: this.props.personSel',this.props.personSel)

      if(!this.props.show) {
        console.log('AddPersonModal:: va a retornar null');
            return null;
      }

     return(
       <PersonForm
         personForm={this.state.personM}
         onSave={this.savePerson}
         onChange={this.updatePersonState}
         onCloseForm = {this.props.onClose}
         isCreateForm = {this.props.isCreate}
         resetForm = {this.resetFields}
         handleChangeForm = {this.handleChange}
         handleCityChangeForm = {this.handleCityChange}
         handleNeighborhoodChangeForm = {this.handleNeighborhoodChange}
       />
     );
   }
}

AddPersonModal.defaultProps = {
  fieldMap: {
    "Tulua": [
      { value: "Veraneras", label: "Veraneras" },
      { value: "Sajonia", label: "Sajonia" }
    ],
    "Medellin": [
      { value: "Chimeneas", label: "Chimeneas" },
      { value: "Campo Amor", label: "Campo Amor" }
    ]
  }
};

AddPersonModal.propTypes = {
  onClose: React.PropTypes.func.isRequired,
  show: React.PropTypes.bool,
  children: React.PropTypes.node //NO SE PARA QUE SIRVE ESTA, BUSCAR :
};

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(personActions, dispatch)}
}

export default connect(null, mapDispatchToProps)(AddPersonModal);
