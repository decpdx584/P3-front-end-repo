import React, {useState, useEffect} from 'react';
import axios from 'axios';
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;

const GameIndex = (props) => {
  let [gamesDisplayed, setGamesDisplayed] = useState([])

  useEffect(() => {
    // need to change route name eventually
    axios.get(`${REACT_APP_SERVER_URL}/api/games/arcade`)
    .then(response => {
      console.log(response);
      setGamesDisplayed(response);
      let mappedGames = response.map((g, idx) => {
        return <p key={idx}>{g}</p>
      })
    })
    .catch(err => console.log('error getting server data \n', err))
  }, [])



  // useEffect(() => {
  //   let showGames = gamesDisplayed.map((game, idx) => {
  //     return <p key={idx}>{game}</p>
  //   })
  // }, [])

  // let allGames = gamesDisplayed.map((g, idx) => {
  //   return <p key={idx}>{g.title}</p>
  // })

  return(
    <div>
      <h1>Game Index</h1>
      <p>{gamesDisplayed[1].title}</p>
    </div>
  )
}

export default GameIndex;