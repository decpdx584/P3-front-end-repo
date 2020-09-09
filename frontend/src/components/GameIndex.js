import React, {useState, useEffect} from 'react';
import axios from 'axios';
import CabinetScreen from './CabinetScreen';
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;

const GameIndex = (props) => {
  let [gamesDisplayed, setGamesDisplayed] = useState([])

  // const getGames = () => {
  //   axios.get(`${REACT_APP_SERVER_URL}/api/games/arcade`)
  //   .then(response => {
  //     console.log(response);
  //     setGamesDisplayed(response);
  //   })
  //   .catch(err => console.log('error getting server data \n', err))

  // }
  
  // useEffect(() => {
  //   // need to change route name eventually
  //   axios.get(`${REACT_APP_SERVER_URL}/api/games/arcade`)
  //   .then(response => {
  //     console.log('RESPONSE HERE => ', response);
  //     setGamesDisplayed(response);
  //   })
  //   .catch(err => console.log('error getting server data \n', err))
  // }, [])

  // useEffect(() => {
  //   let showGames = gamesDisplayed.map((game, idx) => {
  //     return <p key={idx}>{game}</p>
  //   })
  // }, [])

  // let allGames = gamesDisplayed.data.map((g, idx) => {
  //   return <CabinetScreen 
  //     stuff={g}
  //   />
  // })

  const getGames = () => {
    axios.get(`${REACT_APP_SERVER_URL}/api/games/arcade`)
    .then(response => {
      // console.log('RESPONSE HERE => ', response);
      setGamesDisplayed(response);
    })
    .catch(err => console.log('error getting server data \n', err))
  }

  useEffect(() => {
    getGames()
    gamesDisplayed.map((g, idx) => {
      console.log('THiS A G DOG', g)
      return <p key={idx}>{g}</p>
    })
  }, [])

  

  // we need to wait for state to set and, once it does
  // we need to display the state's game information
  // will this be promise based? probably? 


  return (
    <div>
      {/* {allGames}  */}
    </div>
  )
}

export default GameIndex;