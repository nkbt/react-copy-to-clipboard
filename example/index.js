import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './App';
import './reset.css';
import './app.css';


const appRoot = document.createElement('div');


appRoot.id = 'app';
document.body.appendChild(appRoot);
ReactDOM.createRoot(appRoot).render(<React.StrictMode><App /></React.StrictMode>);
