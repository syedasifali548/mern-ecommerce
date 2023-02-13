import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from "react-router-dom";
import {store,persistor} from './redux/store';
import {Provider} from "react-redux"
import { PersistGate } from 'redux-persist/integration/react'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter >
    <PersistGate loading={null} persistor={persistor}>
       <App />
    </PersistGate>
    </BrowserRouter>
    </Provider>
   </React.StrictMode> ,
  document.getElementById('root')
);

reportWebVitals();
