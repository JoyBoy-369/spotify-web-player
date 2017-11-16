import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import App from './App';
import 'public/css/semantic-dist/semantic.min.css';
import 'public/css/style.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Router>
      <App />
    </Router>,
    document.getElementById("root")
  );
  
registerServiceWorker();
