import React, { Component } from 'react';//para tener acceso a la clase Component

class NavItem extends Component{
    render() {
      return (
        <li className = {this.props.isFirstOne == true ? "active" : ""}><a>{this.props.name}</a></li>

      );
    }
}
export default NavItem;
