import React from 'react';
import MarkerImg from '../pics/map-marker.svg';

class ParkMarker extends React.Component {

  render() {
    return (
       <div className="park-marker">
          <img src={MarkerImg} alt="marker"/>
       </div>
    );
  }
}

export default ParkMarker;
