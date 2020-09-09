import React from 'react';
import CabinetTop from './CabinetTop';
import CabinetScreen from './CabinetScreen';
import CabinetBottom from './CabinetBottom';
import axios from 'axios';
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;

const Arcade = (props) => {
  const arcadeGame = () =>{
    axios.get(`${REACT_APP_SERVER_URL}/api/games/arcade`)
    .then(response => {
      console.log(response);})

  }
  return(
    <div>
      <h1>This the arcade container</h1>
      {arcadeGame}
      <CabinetTop />
      <CabinetScreen />
      <CabinetBottom />
    </div>
  )
}

export default Arcade;
