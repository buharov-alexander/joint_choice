import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './app/store/configureStore'
import Navigator from './app/navigation/navigator';

const store = configureStore();

const App = () => (
    <Provider store={store}>
        <Navigator />
    </Provider>
);

export default App;
