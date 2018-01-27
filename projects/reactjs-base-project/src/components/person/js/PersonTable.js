
import React, {Component,PropTypes} from 'react';
import {Link} from 'react-router';
import PersonTableRow from './PersonTableRow'
import PersonTableHeader from './PersonTableHeader'
import AddPersonModal from './AddPersonModal';
import moment from 'moment';
import * as personActions from '../../../actions/personActions';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class PersonTable extends Component {

  constructor(props) {
    super(props);
    this.state = {personDisplayed:this.props.persons,
                  isOpen: false,
                  isAdd: true,
                  selectedIds: '',
                  selectedPerson:{
                    nameValue: 'pao',
                    birthDay: moment(),
                    city:'',
                    neighborhood:''
                  } };

    //bindings de funciones
    this.filterTableById = this.filterTableById.bind(this)
    this.showHideAddPersonModal = this.showHideAddPersonModal.bind(this)
    this.addOrUptadatePerson = this.addOrUptadatePerson.bind(this)
    this.tableRecordSelected = this.tableRecordSelected.bind(this)
    this.deleteSelectedRecords = this.deleteSelectedRecords.bind(this)
  }


  //Function to open the item creation form
    showHideAddPersonModal() {
      this.setState({
        isOpen: !this.state.isOpen
      });
   }

// This function set ups the
/*
   showHideUpdatePersonModal(event) {
     console.log("Entro a showHideAddPersonModal:::::::::::::")
     this.setState({
       isOpen: !this.state.isOpen,
       isAdd: false
     });
  }*/


/*
Note como dependiento de un parameter value retorno un html u otro o un componente
configurado de acuerdo a las entradas
*/
  addOrUptadatePerson(event) {
     //ojo importante la constante createRecordB, ya que es el nombre del boton que levanta el popup
     //y a su vez es con la que se compara para setear variable isAdd en el State
     this.setState({
       isOpen: !this.state.isOpen,
       isAdd: (event.target.name == 'createRecordB')
     });

  }




  //Function to filter the table by id
  filterTableById(filterId) {
    let filteredResult = this.props.persons.filter(person => {
      return person.id.toString().includes(filterId.toString());
    })
    this.setState({ personDisplayed:filteredResult});
  }




/*
Funcion que llamara el action (PersonAction) para eliminar el id seleccionado
*/
  deleteSelectedRecords(){
    console.log('deleteSelectedRecords')
    if(this.state.selectedIds !== ''){
        this.props.actions.deletePerson(this.state.selectedIds)
        this.setState({
          selectedIds: ''
        });
    }else{
      console.log('Debe seleccionar un id a eliminar')
    }
  }

//funcion para filtrar por el registro que se desea eliminar
  tableRecordSelected(recordId){
    console.log('recordId es',recordId)
    let selectedRecord= this.props.persons.filter(person => {
      return person.id.toString() === recordId.toString()
    })[0]

    let person = {
      nameValue: selectedRecord.name,
      birthDay: moment(),
      city:'',
      neighborhood:''
    }


    const selectedIdsC = recordId
    this.setState({
      selectedIds: selectedIdsC,
      selectedPerson: person
    });

console.log('PersonTable:::::: el registro Seleccionado es selectedRecord',this.state.selectedPerson.nameValue)
    console.log('PersonTable:::::: el registro Seleccionado es',this.state.selectedIds)
  }


//function for calling the server and creta a new record
  createTableRecord(){
      console.log('here the code  for calling the server and creta a new record')
  }


//function for calling the server and update a record
  updateTableRecord(){
      console.log('here the code  for calling the server and update a record')
  }



  componentWillReceiveProps(nextProps) {
    this.setState({personDisplayed:nextProps.persons});
  }





  render() {
      console.log('Person table render')
      return(
		  <div className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">

                <div>
                  <div  className="sub-header ">
                    <h3 >Listado de Personas</h3>
                  </div>

                  <div  className="sub-header-button-action">
                    <img className="media-object" width="40px" src="../images/delete_record.png" alt="clic to remove a new record" onClick = {this.deleteSelectedRecords}  />
                  </div>

                  <div  className="sub-header-button-action">
                    <img className="media-object" name="updateRecordB" width="44px" src="../images/edit_record.png" alt="clic to edit a new record" onClick={this.addOrUptadatePerson} />
                  </div>

                  <div  className="sub-header-button-action">
                  {/* name is neccesary for calling the addOrUptadatePerson function */}
                      <img className="media-object" name="createRecordB" width="44px" src="../images/add_record.png" alt="clic to add a new record" onClick={this.addOrUptadatePerson} />
                  </div>
                </div>

                 <div className="table-responsive">

                {/* lo interesante de los props es como separo las responsabilidaddes
                  note como para showHideAddPersonModal se inicia desde PersonTable y por lo cual
                   es responsabilidad de este componente pero si lun hijo lo debe llamar, solamente se lo
                   paso como prop, no importa el nivel de anidamiento*/}
                   <AddPersonModal
                      show={this.state.isOpen}
                      isCreate =   {this.state.isAdd}
                      onClose ={this.showHideAddPersonModal}
                      selectedId = {this.state.selectedIds}
                      personSel = {this.state.selectedPerson}
                    >
                   </AddPersonModal>

                   <table className="table table-striped">
                     <PersonTableHeader
                     filterTableById={this.filterTableById}/>
                     <tbody>
                     {
                       this.state.personDisplayed.map(person => (
                         <PersonTableRow
                            key={person.id}
                            id={ person.id }
                            name={ person.name }
                            age={ person.age }
                            tableRecordSelected = {this.tableRecordSelected}
                          />
                        ))
                     }
                     </tbody>
                   </table>
                 </div>
              </div>
      );
  }
}


PersonTable.propTypes = {
  persons: PropTypes.array.isRequired
};


function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(personActions, dispatch)}
}

//export default PersonTable;
export default connect(null, mapDispatchToProps)(PersonTable);
