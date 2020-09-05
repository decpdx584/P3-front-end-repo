import React from 'react';
import Iframe from 'react-iframe'

const Game = () => {
    return (
        <div className="arcade">
        <h2>Revenge of the Flower</h2>
        <Iframe url={"https://mgustavob.github.io/Revenge-of-the-Flower/"}
            width="60%"
            height="800px"
            id="myId"
            className="myClassname"
            display="initial"
            position="relative"
            overflow="hidden" />

    </div>
    )
}

export default Game
