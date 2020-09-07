import React from 'react';

const UserFavorites = (props) => {
  return(
    <div>
    {/* Wont need the following ternary once private to logged in users */}
      {
        props.currentUser ?
        <h1>{props.currentUser.name}'s Favorites</h1>
        : <h1>Favorites</h1>
      }
      <h1></h1>
    </div>
  )
}

export default UserFavorites