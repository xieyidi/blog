import * as serviceWorker from './serviceWorker';

import React from 'react';
import './App.css';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './reducers'
import { render } from 'react-dom'
import App from './App'

const store = createStore(reducer)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

export default App;

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
