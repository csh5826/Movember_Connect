import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles'

import NewParticipant from './NewParticipant';
import Main from './Main'
const App = () => {
  const THEME = createMuiTheme({
    typography: {
      'fontFamily' : 'geneva,arial,helvetica'
    }
  })
  return (
    <ThemeProvider theme={THEME}>
      <Switch>
          <Route exact path='/' component={Main}/>
          <Route exact path='/participants/new' component={NewParticipant}/>
        </Switch>
    </ThemeProvider>
  );
}

export default App;
