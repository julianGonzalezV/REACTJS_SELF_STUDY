import React, { Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import * as personActions from '../../../actions/personActions';
import PersonTable from './PersonTable';
import {bindActionCreators} from 'redux';


class PersonContainer extends Component {
  componentWillMount() {
    console.log('PersonContainer ::: componentWillMount()' )
      if (this.props.persons[0].id == 0) {
        console.log('llamando a loadPersons() ' )
        this.props.actions.loadPersons();
      }
  }


  render() {
     const persons = this.props.persons;
      console.log('PersonContainer ::: render()' )
      return(
        <div className="container-fluid">
          {/* <PersonList list={this.state.persons} /> */}
          <PersonTable persons={persons} />
        </div>
      );
  }
}


  PersonContainer.propTypes = {
    persons: PropTypes.array.isRequired,
    children: PropTypes.object
  };

  function mapStateToProps(state, ownProps) {
    console.log('PersonContainer ::: mapStateToProps',state.persons.length )
    if(state.persons.length > 0){
      return {
        persons: state.persons
      };
    }
    else{
      return{
        persons: [{"id":0,"name":"","age":0,"address":{"id":0,"street":"","city":""}}]
      }
    }

  }



  function mapDispatchToProps(dispatch) {
    return {actions: bindActionCreators(personActions, dispatch)}
  }


//export default PersonContainer
export default connect(mapStateToProps,mapDispatchToProps)(PersonContainer);
