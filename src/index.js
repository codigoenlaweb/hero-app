// React
import React from 'react';
import ReactDOM from 'react-dom/client';
// Style Css
import './index.css';
// My app
import { HeroesApp } from './HeroesApp';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HeroesApp />
  </React.StrictMode>
);

