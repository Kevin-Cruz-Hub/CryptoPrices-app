import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// Router: is going to allow you to create those routes/links between components
// Router uses Context provider, that alot of libraries use to pass data down to nested components, allowing all the features of the router to be available to its children
// react router allows us to define components based on the URL, you can render different pages
// link components are similar to a tags and they allow you to link together different pages
import {BrowserRouter as Router} from 'react-router-dom'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Router>
    {/* Anything passed inside is rendered as a child of Router/BrowserRouter */}
    {/* anything within is put in a prop/render called children */}
    <App />
  </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
