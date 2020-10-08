import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import Navigation from './navigation';
import App from './App';
import ErrorBoundary from './ErrorBoundary';


ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundary>
	    <App {...window.__STATE__}>
        <BrowserRouter>
          <Navigation />
        </BrowserRouter>
      </App>
    </ErrorBoundary>
  </React.StrictMode>,
  document.getElementById('root')
);
