import React, { Component } from 'react';
class PersonTableRow extends Component {

  constructor(props) {
    super(props);
    this.getRow = this.getRow.bind(this);
  }



  /*
  *
  */
  getRow(record){
      console.log('selected row',record.target.value )
      this.props.tableRecordSelected(record.target.value)
  }

  render() {
    return(
      <tr>
          <td><input type="checkbox" value = {this.props.id} onClick={this.getRow}/></td>
          <td>{this.props.id}</td>
          <td>{this.props.name}</td>
          <td>{this.props.age}</td>
      </tr>
    );
  }
}

export default PersonTableRow
