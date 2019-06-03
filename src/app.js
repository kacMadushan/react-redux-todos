import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import TodosApp from './components/TodosApp';
import './styles/styles.scss';

const store = configureStore();

const appRoot = (
    <Provider store={store}>
        <TodosApp />
    </Provider>
);

ReactDOM.render(appRoot, document.getElementById('root'));