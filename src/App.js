import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Reports from './pages/Reports';
import Products from './pages/Products';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './pages/Reports';
import Show from './pages/Show';


function App() {
  return (
    // <div className="App">
    //   <p>hi</p>
      
    // </div>
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/admin' component={Reports} />
        <Route path='/products' component={Products} />
          <Route path ="/login" component={Login}/>
          <Route path ="/register" component={Register}/> 
          <Route path ="/show" component={Show}/> 


          </Switch>
    </Router>
  </>


  );
}

export default App;
