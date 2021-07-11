import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import App1 from './contextToDo/App1';
import ToDosProvider from './contextToDo/context';

ReactDOM.render(
  <ToDosProvider>
    <App />
    <App1 />
  </ToDosProvider>,
  document.getElementById('root')
);

