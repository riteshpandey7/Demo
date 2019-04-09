import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import NavBar from './components/NavBar'

ReactDOM.render(<div><NavBar /><App /></div>, document.getElementById('root'));


serviceWorker.unregister();
