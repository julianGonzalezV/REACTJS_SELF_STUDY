import React, { Component } from 'react';
import PersonList from './components/person/js/PersonList';
import PersonTable from './components/person/js/PersonTable';

class PersonApp extends Component {
    constructor(props) {
        super(props)
        this.state = { persons: [] }
    }


    componentWillMount() {
        fetch('http://localhost:9000/ejercicio/personas')
          .then((response) => {
            return response.json()
          })
          .then((persons) => {
            this.setState({ persons: persons })
          })
      }




    render() {
      console.log('render del persoApp')
          return (
            <div className="container-fluid">
              {/* <PersonList list={this.state.persons} /> */}
              <PersonTable tableList={this.state.persons} />
            </div>
          )

    }


}

export default PersonApp;
