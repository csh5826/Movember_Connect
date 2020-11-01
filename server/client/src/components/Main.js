import React, { Fragment } from 'react';
import NavBar from './NavBar';
import Map from './Map';
import ParticipantsStats from './ParticipantStats';
import FirstGraph from './FirstGraph';
import CauseSelect from './CauseSelect';

const Main = () => {
  return (
    <Fragment>
        <NavBar />
        <ParticipantsStats />
        <Map />
        <h1 style={{marginTop: 60, textAlign: 'center'}}>See data below</h1>
        <CauseSelect />
        <FirstGraph />

    </Fragment>
  );
}

export default Main;