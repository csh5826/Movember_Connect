import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';

import Participant from './Participant';
import NewParticipant from './NewParticipant';
import Main from './Main'
const App = () => {
  return (
    <Fragment>
      <Switch>
          <Route exact path='/' component={Main}/>
          <Route exact path='/participants/new' component={NewParticipant}/>
          <Route path='/participants/:id' component={Participant}/>
        </Switch>
    </Fragment>
  );
}

export default App;
