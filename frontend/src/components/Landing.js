import React from 'react';

const Landing = (props) => {
  console.log('CURRENT USER PROP', props.currentUser)
  return(
    <div>
      <h1>GArcade Landing</h1>
      <p>{props.userName}</p>
    </div>
  )
};

export default Landing;