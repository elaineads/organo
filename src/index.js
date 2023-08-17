import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // 'StrictMode' add renderizações a mais, para encontrar possíveis erros (durante o desenvolvimento)
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
