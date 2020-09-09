import React, { useEffect } from 'react';
import CabinetTop from './CabinetTop';
import CabinetScreen from './CabinetScreen';
import CabinetBottom from './CabinetBottom';
import axios from 'axios';
import Iframe from 'react-iframe'

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

  let handleLoading = 
  props.currentGame ? (
    <div className="cabinet">
      <h1 className="pixel-text" id="game-title">{props.currentGame.name}</h1>
      <div className="arcade">
        <Iframe url={props.currentGame.gameUrl}
            // id="myId"
            className="myClassname"
            display="initial"
            position="relative"
            overflow="hidden" />

    </div>
    </div>
  ) : (
    <h3 className="pixel-text">Loading Game</h3>
  )

  return(
    <div>
      {handleLoading}
    </div>
  )
}

export default Arcade;
