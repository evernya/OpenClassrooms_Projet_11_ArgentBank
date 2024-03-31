import React from 'react';
import ReactDOM from 'react-dom/client';

// import { Provider } from "react-redux";

import App from './App';
// import store from './reducers'

import './Style/style.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <Provider store={store}> 
//       <App />
//     </Provider>
//   </React.StrictMode>
// );