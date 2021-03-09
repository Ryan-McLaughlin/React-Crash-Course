import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'; // App.js contains the root (used below) app component
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App /> 
  </React.StrictMode>,
  document.getElementById('root') // this is grabed from the body of index.html, the imported App will be inserted here
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
