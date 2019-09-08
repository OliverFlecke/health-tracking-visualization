import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';

import Application from './components/Application';
import store from './store';

// Create main element
const mainElement = document.createElement('div');
document.body.appendChild(mainElement);

const bootstrapStyles = document.createElement('link');
bootstrapStyles.rel="stylesheet";
bootstrapStyles.href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css";
bootstrapStyles.integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T";
bootstrapStyles.crossOrigin="anonymous";
document.head.appendChild(bootstrapStyles);

document.title = 'Health tracking';

// Render components
const render = (Component: () => JSX.Element) => {
    ReactDOM.render(
        <AppContainer>
            <Provider store={store}>
                <Component />
            </Provider>
        </AppContainer>,
        mainElement
    );
};

render(Application);
