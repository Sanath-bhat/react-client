import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Reports from './pages/Reports';
import Products from './pages/Products';
import Login from './components/Login';
import Register from './components/Register';


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
        <Route path='/reports' component={Reports} />
        <Route path='/products' component={Products} />
          <Route path ="/login" component={Login}/>
          <Route path ="/register" component={Register}/> 

          </Switch>
    </Router>
  </>


  );
}

export default App;
