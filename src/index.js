import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Top from './Top';
import Timer from './Timer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Top/>
    <Timer/>
    <App />
  </>
);

