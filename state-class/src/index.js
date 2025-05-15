import React from 'react';
import ReactDOM from 'react-dom/client';
// PROJECTS: rename App.jsx to StepApp.jsx

// import App from "./StepApp/StepApp.jsx";
// import App from './ToggleApp/ToggleApp.jsx';
// import App from "./PracticeApp/PracticeApp.jsx" 
// import App from "./CalculatorApp/CalculatorApp.jsx"
import App from "./CatApp/CatApp.jsx"
// import './index.css';
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* not defined = means cpu cant find it */}
    <App />
  </React.StrictMode>
);

// reportWebVitals();
