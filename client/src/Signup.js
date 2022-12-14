import React from "react";

function Signup({ handleSignupClick, handleLoginClick }) {

  return (
    <div id="welcome">
      <h3>Signup</h3>
      <form>
        <input className="textInput" type="text" placeholder="username"></input>
        <br></br>
        <br></br>
        <input className="textInput" type="password" placeholder="password"></input>
        <br></br>
        <input className="textInput" type="password" placeholder="confirm password"></input>
        <br></br>
        <br></br>
        <br></br>
        <button className="normalButton" onClick={handleSignupClick}>Sign up</button>
      </form>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div>
        <p>Already signed up?</p>
        <button className="normalButton" onClick={handleLoginClick}>Go to Login</button>
      </div>
    </div>
  )
};

export default Signup;