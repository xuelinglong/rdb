import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import {Provider} from "react-redux";
import thunk from 'redux-thunk';
import Reducers from './redux/index'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
const store = createStore(Reducers,applyMiddleware(thunk));

ReactDOM.render((
  <Provider store={store}>
    <App />
  </Provider>
  ),
  document.getElementById('root')
);
registerServiceWorker();
