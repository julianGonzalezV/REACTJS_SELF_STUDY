import React, { Component } from 'react';
class PersonTableHeader extends Component {

constructor(props) {
  super(props);
  //this.state = { recordId: '' };
  //aca estamos indicando que cada vez que se encuentre un this dentro de la funcion miFuncion entonces le asocie la
  //clase para que sepa donde buscarlo
  this.filterById = this.filterById.bind(this);
}


  /**
  *
  */
  filterById(event){
    //this.setState({recordId: event.target.value});
    this.props.filterTableById(event.target.value);
  }


  render() {
    return(
      <thead className="theader-custom">
        <tr >
          <th>
          {/*selection column */}
          </th>
          <th>
            <div >
             {<input type="text" className="form-control" ref="filterTextInput" onChange={this.filterById} />}
             {/*<input type="text" className="form-control" ref="filterTextInput" />*/}
              <h5>Id</h5>
            </div>
          </th>
          <th>
            <div>
             <input type="text"    className="form-control"/>
              <h5>Nombre</h5>
            </div>
          </th>
          <th>
            <div>
              <input type="text"    className="form-control"/>
              <h5>Edad</h5>
            </div>
          </th>
        </tr>
      </thead>
    );
  }
}

export default PersonTableHeader
