import React, { Component } from 'react';
import PersonRow from './PersonRow'

class PersonList extends Component {

 render() {
   return (
     <ul className="media-list">
       {
         this.props.list.map((person) => {
           return <PersonRow id={ person.id }
                               name={ person.name }
                               age={ person.age } />
         })
       }
     </ul>
   );
 }
}

export default PersonList
