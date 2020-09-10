import React, { useEffect } from 'react';
import CabinetBottom from './CabinetBottom';
import axios from 'axios';
import Iframe from 'react-iframe'

const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;


const Arcade = (props) => {

  const arcadeGame = () => {
    console.log(props.match.params)
    axios.get(`${REACT_APP_SERVER_URL}/api/games/${props.match.params.id}`)
    .then(response => {
      // console.log('RESPOONSE FROM FRONT END', response.data);
      // console.log(props)
      props.setCurrentGame(response.data)
      })
      .catch(err => {console.log(err)})
    }
  
  useEffect(() => {
    arcadeGame()
    console.log(props.currentUser)
  }, [])

  let handleLoading = 
  props.currentGame ? (
    <div className="cabinet">
      <h1 className="pixel-text" id="game-title">{props.currentGame.name}</h1>
      <div className="arcade">
        <Iframe url={props.currentGame.gameUrl}
            className="myClassname"
            display="initial"
            position="relative"
            overflow="hidden" />
      </div>
      <h4>{props.currentGame.description != 'none' ? props.currentGame.description : ''}</h4>
    </div>
  ) : (
    <h3 className="pixel-text">Loading Game</h3>
  )

  const addFavorite = (e) => {    
    e.preventDefault()
    console.log('CURRENT GAME IN STATE : ', props.currentGame)
    // make a call to the database that gets the users info by ID
    axios.post(`${REACT_APP_SERVER_URL}/api/users/favorites/${props.currentUser.id}`,
    {params: {
      userId: props.currentUser.id,
      gameId: props.currentGame._id,
      currentGame: props.currentGame,
      gameName: props.currentGame.name
    }})
    .then(response => {
      return response
    })
    .catch(err => console.log('SHAME ON YOU'))
  }

  return(
    <div>
      {handleLoading}
      <form>
        <button
        onClick={(e) => addFavorite(e)}
        className="unclicked-fav"
        >
      Add to Favorites
        </button>
      </form>
    {/* ADD DEPLOYED GAME LINK */}
    </div>
  )
}

export default Arcade;
