import { createRoot } from 'react-dom/client';

import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import { persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';

import App from './components/app/App';
import Spinner from './components/spinner/Spinner';

import { GlobalStyle } from './styles/GlobalStyles';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <Provider store={store}>
        <PersistGate loading={<Spinner />} persistor={persistor}>
            <Router>
                <GlobalStyle />
                <App />
            </Router>
        </PersistGate>
    </Provider>
);
