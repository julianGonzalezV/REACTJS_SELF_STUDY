import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './App';
//import PersonApp from './PersonApp';
import HomePage from './components/home/Home';
import PersonContainer from './components/person/js/PersonContainer';
import PersonTable from './components/person/js/PersonTable';
import AddPersonModal from './components/person/js/AddPersonModal';



export default (
  <div>
  <Route path="/" component={App}>
    <Route path="/admonApp/Home" component={HomePage} />
    <Route path="/admonApp/persons" component={PersonContainer} />
  </Route>
  </div>
);
