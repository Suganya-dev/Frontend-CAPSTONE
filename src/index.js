import React from 'react';
import ReactDOM from 'react-dom'
import './index.css';
import {Chorepad} from './App';
import { BrowserRouter as Router } from "react-router-dom";
// import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Router> 
    <Chorepad />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

