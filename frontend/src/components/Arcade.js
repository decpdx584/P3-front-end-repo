import React from 'react';
import CabinetTop from './CabinetTop';
import CabinetScreen from './CabinetScreen';
import CabinetBottom from './CabinetBottom';

const Arcade = (props) => {
  return(
    <div>
      <h1>{props.name}</h1>
      <h1>This the arcade container</h1>
      <CabinetTop />
      <CabinetScreen />
      <CabinetBottom />
    </div>
  )
}

export default Arcade;