import React, {useState, useEffect} from 'react';
import axios from 'axios';
import CabinetScreen from './CabinetScreen';
import Game from './Game'
import {Redirect, withRouter} from 'react-router-dom'
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;


const GameIndex = (props) => {
  let [gamesDisplayed, setGamesDisplayed] = useState([]);
  // let [currentGame, setCurrentGame] = useState('')


  // const getGames = () => {
  //   axios.get(`${REACT_APP_SERVER_URL}/api/games/arcade`)
  //   .then(response => {
  //     console.log('RESPONSE HERE => ', response);
  //     setGamesDisplayed(response);
  //   })
  //   .catch(err => console.log('error getting server data \n', err))
  // }

  const handlePlayGame = (id) => {
    // send id to url parameter space
    // use that id to render the specific game we want to pla
    
    props.setCurrentGame(id)
    console.log(props.currentGame)
    // <props.privateRoute path="/games/active" component={Game} />
    return <Redirect to='game' />
  }
  
  let mapThemGames = () => {
    return gamesDisplayed.map((g, idx) => {
      console.log('THiS A G', g)
      return (
        <div key={idx}
        onClick={() => handlePlayGame(g)}>
        <h3 className="sub-title">{g.name ? g.name : g.title}</h3>
        <p>{g.gameUrl}</p>
        <p>{g.description != 'none' ? g.description : 'no description uploaded'}</p>
        </div>
      )
    })
  } 

  let decideGames = 
    gamesDisplayed.length > 0 ? (
      <div>
        <h1 className="pixel-text">Them Games</h1>
        {mapThemGames()}
      </div>
    ) : (
      <h3 className="pixel-text">Loading the Arcade 💨</h3>
    )
  
  useEffect(() => {
    axios.get(`${REACT_APP_SERVER_URL}/api/games/arcade`)
    .then(response => {
      console.log('RESPONSE HERE => ', response);
      setGamesDisplayed(response.data);
    })
    .catch(err => console.log('error getting server data \n', err))
  }, [])


  // we need to wait for state to set and, once it does
  // we need to display the state's game information
  // will this be promise based? probably? 

  return (
    
    <div>
      {decideGames}
    </div>
  )
}

export default GameIndex;