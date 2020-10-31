import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';

import NewParticipant from './NewParticipant';
import Main from './Main'
const App = () => {
  return (
    <Fragment>
      <Switch>
          <Route exact path='/' component={Main}/>
          <Route exact path='/participants/new' component={NewParticipant}/>
        </Switch>
    </Fragment>
  );
}

export default App;
