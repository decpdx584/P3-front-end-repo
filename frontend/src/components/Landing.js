import React from 'react';

const Landing = (props) => {
  return(
    <div id="landing">
      <h1 className="pixel-text">GArcade</h1>
      <h4 className="sub-title">A Place for Project One</h4><br />
      <img id="cabinet-far" src="https://i.imgur.com/h3MUYJt.png"/>
      <br />
      <a href="/login" >Login</a>
      <a href="/signup">Signup</a>
    </div>
  )
};

export default Landing;
