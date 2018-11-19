import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {showError} from './util/notification';
import 'normalize.css/normalize.css';
import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/icons/lib/css/blueprint-icons.css';
import './index.css';

window.addEventListener('error', (event) => {
  showError(`Unhandled application error: ${event.message}`);
  event.preventDefault();
});

ReactDOM.render(<App/>, document.getElementById('root'));
