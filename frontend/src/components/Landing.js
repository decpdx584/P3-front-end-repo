import React from 'react';

const Landing = (props) => {
  return(
    <div>
      <h1>GArcade Landing</h1>
      <p>A Place for Project One</p>
      {props.userName ?
      <div> 
        <p>Welcome back {props.userName}</p> 
        <a href='/profile'>Your profile</a>
      </div> : 
      <p>Welcome!</p>}  
    </div>
  )
};

export default Landing;