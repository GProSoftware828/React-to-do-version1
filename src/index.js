import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from "react-redux";
import store from "./store";
import 'bootstrap' from 'bootstrap/dist/css/bootstrap.css';


import App from './App';
import { BrowserRouter } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
	<BrowserRouter>
	<Provider store={store}>
	<App />   
    </Provider>
    </BrowserRouter>
	, document.getElementById('root'));
registerServiceWorker();
