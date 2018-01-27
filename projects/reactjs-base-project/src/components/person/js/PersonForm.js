import React, { Component } from 'react';//para tener acceso a la clase Component
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import '../css/AddPersonModal.css';

class PersonForm extends Component{
  constructor(props) {
  super(props);

  console.log("PersonForm::::::::::: isCreateForm",this.props.isCreateForm);
    console.log("PersonForm::::::::::: this.props.person.nameValue",this.props.personForm);

  this.getOptions = this.getOptions.bind(this);
  this.handleNeighborhoodChange = this.handleNeighborhoodChange.bind(this);
  this.getNeighborhoodField = this.getNeighborhoodField.bind(this);
}

  getOptions(key) {
   if (!this.props.fieldMap[key]) {
     return null;
   }

   return this.props.fieldMap[key].map(function (el, i) {
     return <option key={i} value={el.value}>{el.label}</option>
   });
 }

handleNeighborhoodChange(event) {
  this.props.personForm.neighborhood = event.target.value;
 }



 getNeighborhoodField() {
   if (!this.props.personForm.city) {
     return null;
   }

   return (
     <select onChange={this.props.handleNeighborhoodChangeForm} value={this.props.personForm.neighborhood}>
       <option value="">---</option>
       {this.getOptions(this.props.personForm.city)}
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


    render() {
    // The gray background
    const backdropStyle = {
      position: 'fixed',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: 'rgba(0,0,0,0.3)',
      padding: 50
    };

    // The modal "window"
    const modalStyle = {
      backgroundColor: '#fff',
      borderRadius: 10,
      maxWidth: 500,
      minHeight: 500,
      margin: '0 auto',
      verticalAlign: 'middle',
      padding: 30
    };

    return (
      <div className="backdrop1" style={backdropStyle}>
           <div className="divForm" style={modalStyle}>
               <div>
                 <div className="divHeaderClose" >
                   <img  width="34px" src="../images/eye.png" onClick={this.props.onCloseForm} />
                 </div>
                 <div  >
                   <img  width="34px" src="../images/reset.png" onClick={this.props.resetForm} />
                 </div>
               </div>

               <form>
                   <label> Nombre: </label>
                   <input name="nameValue" type = "text"
                   placeholder="Escribe el nombre"
                   value={this.props.personForm.nameValue}
                   onChange={this.props.onChange}/>


                   <div className = "otherInputs">
                   <label> Fecha de nacimiento:        </label>
                     <DatePicker
                         selected={this.props.personForm.birthDay}
                         value={this.props.personForm.birthDay}
                         onChange={this.props.onChange}
                     />
                   </div>

                   <label>Dirección:</label>

                   <select onChange={this.props.handleCityChangeForm} value={this.props.personForm.city}>
                   	<option value="">---</option>
                     <option value="Tulua">Tulua</option>
                     <option value="Medellin">Medellin</option>
                   </select>
                   {/*Note que handleCityChange actualiza el state del componente, por lo cual este método render se
                     ejecutará ante la respuestas de un cambiko del state así que al vover a pasar por la funcion getNeighborhoodField a continuación
                     entonces SI HACE la pinatada del componente vaya a getNeighborhoodField  */}
                    {this.getNeighborhoodField()}
                   <div className="footer1">
                     <input type="submit" value="Save" onClick={this.props.onSave} />
                   </div>
                 </form>
           </div>
         </div>

  );
  }
}


PersonForm.defaultProps = {
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

PersonForm.propTypes = {
  personForm: React.PropTypes.object.isRequired,
  onSave: React.PropTypes.func.isRequired,
  onChange: React.PropTypes.func.isRequired,
  handleChangeForm: React.PropTypes.func.isRequired,
  handleCityChangeForm: React.PropTypes.func.isRequired
};

export default PersonForm;
