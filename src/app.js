import { render } from 'react-dom';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import App from './components/App';

const containerEl = document.getElementById('app');
render(
  <App />,
  containerEl
);
