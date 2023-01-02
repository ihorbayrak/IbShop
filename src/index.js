import React from 'react';
import { createRoot } from 'react-dom/client';

import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/index';
import { persistor } from './store/index';
import { PersistGate } from 'redux-persist/integration/react';

import App from './components/app/App';
import Spinner from './components/spinner/Spinner';

import './styles/style.scss';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <Provider store={store}>
        <PersistGate loading={<Spinner />} persistor={persistor}>
            <Router>
                <App />
            </Router>
        </PersistGate>
    </Provider>
);
