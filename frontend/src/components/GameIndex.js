import React from 'react';
import axios from 'axios';
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;

const GameIndex = (props) => {
  const getGames = () => {
    axios.get(`${REACT_APP_SERVER_URL}/api/games/arcade`)
    .then(response => {
      console.log(response);
    })
  }
  getGames();
  return(
    <div>
      <h1>Game Index</h1>
      <p>{props.currentUser}</p>
    </div>
  )
}

export default GameIndex;