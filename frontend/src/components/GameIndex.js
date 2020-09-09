import React, {useState, useEffect} from 'react';
import axios from 'axios';
import CabinetScreen from './CabinetScreen';
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;

const GameIndex = (props) => {
  let [gamesDisplayed, setGamesDisplayed] = useState([])


  // const getGames = () => {
  //   axios.get(`${REACT_APP_SERVER_URL}/api/games/arcade`)
  //   .then(response => {
  //     console.log('RESPONSE HERE => ', response);
  //     setGamesDisplayed(response);
  //   })
  //   .catch(err => console.log('error getting server data \n', err))
  // }
  
  let mapThemGames = () => {
    return gamesDisplayed.map((g, idx) => {
      console.log('THiS A G', g)
      return (
        <div key={idx}>
        <h3>{g.name ? g.name : g.title}</h3>
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
      <h1>Nothin in state rn 😓</h1>
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