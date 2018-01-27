import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import storeSetup from './store/storeSetup';
import { Provider } from 'react-redux';
import { loadPersons } from './actions/personActions';

const store = storeSetup();
//store.dispatch(loadPersons());
{/*
<Provider store={store}>
 <Router history={browserHistory} routes={routes} />
</Provider>,*/}

{/* <Router history={browserHistory} routes={routes} />,*/}

ReactDOM.render(
  <Provider store={store}>
   <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('root')
);
