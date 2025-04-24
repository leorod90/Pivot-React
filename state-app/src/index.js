import React from 'react';
import ReactDOM from 'react-dom/client';
// PROJECTS: rename App.jsx to StepApp.jsx
// import App from './StepApp';
import App from './ToggleApp';
// import './index.css';
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// reportWebVitals();
