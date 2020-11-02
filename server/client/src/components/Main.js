import React, { Fragment } from 'react';
import NavBar from './NavBar';
import Map from './Map';
import ParticipantsStats from './ParticipantStats';
import CauseParticipantsGraph from './Graphs/CauseParticipantsGraph';
import CausePledgedGraph from './Graphs/CausePledgedGraph';
import CauseSelect from './Graphs/CauseSelect';
import WeeklyParticipantsGraph from './Graphs/WeeklyParticipantsGraph';
import WeeklyPledgedGraph from './Graphs/WeeklyPledgedGraph';
import Grid from '@material-ui/core/Grid'


const Main = () => {
  return (
    <Fragment>
        <NavBar />
        <ParticipantsStats />
        <Map />
        <h1 style={{marginTop: 60, textAlign: 'center'}}>See data below</h1>
        <WeeklyParticipantsGraph />
        <WeeklyPledgedGraph />
        <CauseSelect />
        <Grid container spacing={2} style={{marginTop: 25}}>
          <Grid item lg={6}>
          <CauseParticipantsGraph />
          </Grid>
          <Grid item lg={6}>
          <CausePledgedGraph />
          </Grid>
        </Grid>

    </Fragment>
  );
}

export default Main;