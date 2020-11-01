import React, { Fragment } from 'react';
import NavBar from './NavBar';
import Map from './Map';
import ParticipantsStats from './ParticipantStats';
import CauseGraph from './CauseGraph';
import CauseSelect from './CauseSelect';
import WeeklyGraph from './WeeklyGraph';

const Main = () => {
  return (
    <Fragment>
        <NavBar />
        <ParticipantsStats />
        <Map />
        <h1 style={{marginTop: 60, textAlign: 'center'}}>See data below</h1>
        <WeeklyGraph />
        <CauseSelect />
        <CauseGraph />

    </Fragment>
  );
}

export default Main;