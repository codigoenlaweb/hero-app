// React
import React from 'react';
import ReactDOM from 'react-dom/client';
// React Router Dom
import { BrowserRouter } from "react-router-dom";
// Style Css
import './index.css';
// My app
import { HeroesApp } from './HeroesApp';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <HeroesApp />
    </BrowserRouter>
  </React.StrictMode>
);

