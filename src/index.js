import React from 'react';
import { render } from 'react-dom';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import state from './reducers/root';

import * as serviceWorker from './serviceWorker';
import App from './App';
import './index.css';

const store = createStore(state);
render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
console.log(store.getState());

serviceWorker.unregister();
