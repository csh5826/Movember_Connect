import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Switch, Route, Router } from 'react-router-dom';
// import reducers from './reducers';
import promise from 'redux-promise';

import App from './components/App';
import Participant from './components/Participant';
import NewParticipant from './components/NewParticipant'

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  // <Provider store={createStoreWithMiddleware(reducers)}>
  <Provider>
    <Router>
      <Switch>
        <Route exact path='/' component={App} />
        <Route exact path='/participants/new' component={NewParticipant}/>
        <Route exact path='/participants/:id' component={Participant}/>
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);


