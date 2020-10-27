import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter } from 'react-router-dom';
// import reducers from './reducers';
// import promise from 'redux-promise';

import App from './components/App';

// const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  // <Provider store={createStoreWithMiddleware(reducers)}>
  // <Provider>
    <BrowserRouter>
      <Fragment>
        <App />
      </Fragment>
    </BrowserRouter>
  // </Provider>,
  ,
  document.getElementById('root')
);


