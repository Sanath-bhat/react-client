import React from 'react'
import './Login.css'
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import Register from './Register'


export default function Login() {
    return (
        <div>
           {/* <nav class="navbar navbar-light bg-secondary">
                <span class="navbar-brand mb-0 h1">Admin</span>
            </nav> */}
            {/* <h1>Login Here</h1> */}
           
            <form id="lform" name="validform" onsubmit="return validatePassword()">
            <div class="form-group">
              <label for="exampleInputEmail1">Email Id</label>
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="example@gmail.com"/>
            </div><br/>
            <div class="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input type="password" class="form-control" id="exampleInputPassword1" name="pasword1" placeholder="Enter password"/>
            </div>
            
            <Link to="/Show"><button type="submit" class="btn btn-dark">Login</button></Link>
            <Link className="register" to="/register">Register</Link> 
          </form>
         
        </div>
    )
}

