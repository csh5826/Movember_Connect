import React, { Fragment } from 'react';
import NavBar from './NavBar';
import Map from './Map';
import ParticipantsPledged from './ParticipantStats';

const Main = () => {
  return (
    <Fragment>
        <NavBar />
        <ParticipantsPledged />
        <Map />
    </Fragment>
  );
}

export default Main;