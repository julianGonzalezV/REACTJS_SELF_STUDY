import React, { Component } from 'react';
import PersonaAvatar from './PersonAvatar'

class PersonRow extends Component {

  render() {
    return(
      <li className="media">
        <PersonaAvatar age={this.props.age}/>
        <div className="media-body">
          <h4>{this.props.name}</h4>
          <p>
            {this.props.age} &nbsp;
            <span className="label label-info">{this.props.department}</span>
          </p>
        </div>
        <hr/>
      </li>
    );
  }
}

export default PersonRow
