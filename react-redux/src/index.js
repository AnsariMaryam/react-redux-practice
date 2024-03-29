import React from 'react';
import ReactDom from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import allReducers from './reducers';
import App from './components/app';


const store = createStore(allReducers);

ReactDom.render(
  <Provider store = {store}>
  <App />
  </Provider>,
  document.getElementById('root')
);

//ReactDom.render(<h1>hello</h1>, document.getElementById('root') );
