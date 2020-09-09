import React, { useEffect } from 'react';
import CabinetTop from './CabinetTop';
import CabinetScreen from './CabinetScreen';
import CabinetBottom from './CabinetBottom';
import axios from 'axios';
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;

const Arcade = (props) => {

  const arcadeGame = () => {
    console.log(props.match.params)
    axios.get(`${REACT_APP_SERVER_URL}/api/games/${props.match.params.id}`)
    .then(response => {
      console.log('RESPOONSE FROM FRONT END', response.data);
      console.log(props)
      props.setCurrentGame(response.data)
      })
      .catch(err => {console.log(err)})
    }
  
  useEffect(() => {
    arcadeGame()

  }, [])

  return(
    <div>
      <h1>{props.currentGame ? props.currentGame.name : 'Loading'}</h1>
      <h1></h1>
      <CabinetTop />
      <CabinetScreen />
      <CabinetBottom />
    </div>
  )
}

export default Arcade;
