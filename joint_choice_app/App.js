import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './app/store/configureStore'
import Content from './app/components/Content';

const store = configureStore();

const App = () => (
    <Provider store={store}>
        <Content />
    </Provider>
);

export default App;
