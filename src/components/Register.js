import React from 'react';
import {Link} from 'react-router-dom';
import './Register.css';

 function Register() {
    return (
        <div>
            <h1>Register here</h1>
        <form>
            <div class="input-group mt-2">
    <div class="input-group-prepend">
        <span class="input-group-text">Name</span>
    </div>
    <input type="text" class="form-control" placeholder="Enter Your Name"/>
</div>
            <div class="input-group mt-2">
    <div class="input-group-prepend">
        <span class="input-group-text">Email</span>
    </div>
    <input type="email" class="form-control" placeholder="Enter Your Email id"/>
</div>
<div class="input-group mt-2">
    <div class="input-group-prepend">
        <span class="input-group-text">Password</span>
    </div>
    <input type="password" class="form-control" placeholder="Enter Your Password"/>
</div>
<div class="input-group mt-2">
    <div class="input-group-prepend">
        <span class="input-group-text">Phone Number</span>
    </div>
    <input type="text" class="form-control" placeholder="Enter Your Phone Number" />
</div>
<div class="input-group mt-2">
    <div class="input-group-prepend">
        <span class="input-group-text">Address</span>
    </div>
    <textarea placeholder="Address" rows="3" cols="55"></textarea>
</div>

 Gender:
 <div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" /> 
  <label class="form-check-label" for="inlineRadio1">Male</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
  <label class="form-check-label" for="inlineRadio2">Female</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
  <label class="form-check-label" for="inlineRadio2">Others</label>
</div>
<div>
<Link to="/login"><button type="submit" class="btn btn-primary">Register</button></Link>
</div>
</form>
        </div>
    )
}
export default Register;