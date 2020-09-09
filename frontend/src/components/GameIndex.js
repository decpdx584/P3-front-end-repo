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
      return <li key={idx}>{g.name}</li>
    })
  } 

  let decideGames = 
    gamesDisplayed.length > 0 ? (
      <div>
        <h1>Them Games</h1>
        <ul>{mapThemGames()}</ul>
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