import React from 'react';

const Landing = (props) => {
  return(
    <div>
      <h1>GArcade Landing</h1>
      <h4>A Place for Project One</h4><br />
      {
        props.userName ?
          <div> 
            <h5>Welcome back {props.userName}</h5> 
            <a href='/profile'>Your profile</a>
          </div> : 
          <p>Welcome!</p>
      }  
      <img id="cabinet-far" src="https://www.clipartkey.com/mpngs/m/52-522026_transparent-arcade-clipart-black-and-white-video-game.png"/>
    </div>
  )
};

export default Landing;