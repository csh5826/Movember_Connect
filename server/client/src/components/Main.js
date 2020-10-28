import React, { Fragment } from 'react';
import NavBar from './NavBar';
import Map from './Map';
import ParticipantsStats from './ParticipantStats';
import FirstGraph from './FirstGraph'

const Main = () => {
  return (
    <Fragment>
        <NavBar />
        <ParticipantsStats />
        <Map />
        <FirstGraph />

    </Fragment>
  );
}

export default Main;