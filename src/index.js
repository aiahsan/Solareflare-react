import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Provider} from 'react-redux'
import {store,perssistor} from './redux/store';
import { PersistGate } from "redux-persist/integration/react";
import Routes from './routes'
ReactDOM.render(
  <React.StrictMode>
    <Provider store={ store}>
 <PersistGate persistor={perssistor}>
 <Routes/>
 </PersistGate>
 </Provider> 
</React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
