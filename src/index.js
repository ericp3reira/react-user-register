import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(rootReducer);

render((
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
), document.getElementById('root'));
registerServiceWorker();
