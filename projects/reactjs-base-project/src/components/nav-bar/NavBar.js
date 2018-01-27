import React, { Component, PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';


import NavItem from './NavItem'
import './NavBar.css'

import PersonList from '../../components/person/js/PersonList';
import PersonTable from '../../components/person/js/PersonTable';
import PersonContainer from '../../components/person/js/PersonContainer';
import PersonApp from '../../PersonApp';


class NavBar extends Component{
  constructor(props) {
  super(props);
  //this.state = { menu: [{name:"Home" , code:"1" },{name:"Contact" , code:"2" },{name:"Location" , code:"3" }] }
}


/**
*
*/
  getMenuDummy(){
    return [{name:"Home" , code:"1" },{name:"Contact" , code:"2" },{name:"Location" , code:"3" }]

  }

    render() {
      return (
  <div>
      <nav className="navbar navbar-inverse navbar-fixed-top">
        <div className="container-fluid" >
          <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar"
              aria-expanded="false" aria-controls="navbar" >
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="#">REACTJS-APP</a>
          </div>

          <div id="navbar" className="navbar-collape collapse">
              <ul className="nav navbar-nav navbar-right">
              {/*
                {this.getMenuDummy().map((mn,index) => {
                  return <NavItem key={mn.code}
                                      name={mn.name}
                                      isFirstOne={index ==0 ? true: false}/>;
                })}
                */}

                <li><a href="#"> UNO </a></li>
                <li><a href="#"> DOS </a></li>
                <li><a href="#"> TRES </a></li>
              </ul>
              <form className="navbar-form navbar-right">
                <input type="text" className="form-control" placeholder="Search..."/>
              </form>
          </div>
        </div>
      </nav>

      <div className="container-fluid">
        <div className="row">
            <div className="col-sm-3 col-md-2 sidebar">
                <ul className="nav nav-sidebar">
                  {/*<li className="active"><a href="#">Home<span className="sr-only">(current)</span></a></li>*/}
                  <li ><Link to="/admonApp/Home" activeClassName="active">Home</Link>   </li>
                  <li> <Link to="/admonApp/persons"  activeClassName="active" >Listado de Personas</Link> </li>
                  <li><a href="#">Opcion1</a></li>
                  <li><a href="#">Opcion2</a></li>
                </ul>
            </div>
            {/* componente tabla para personas */}
            {/*<PersonApp/>*/}
        </div>
    </div>
  </div>
    );
  }

}
export default NavBar;
