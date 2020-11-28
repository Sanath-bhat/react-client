import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import companyActionReducer from '../mystore/MyReducer';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import Main from '../components/Main';
import AddEdit from '../components/AddEdit';
import ViewAll from '../components/ViewAll';

const myCompanyStore = createStore(companyActionReducer);

export default class Show extends React.Component {

  render() {
    return <Provider store={myCompanyStore}>
      <Router>
      <Route exact path="/show" component={Main}/>
            <Route path="/addedit" component={AddEdit} />
            <Route path="/viewall" component={ViewAll} />
      </Router>
    </Provider>
  }
}