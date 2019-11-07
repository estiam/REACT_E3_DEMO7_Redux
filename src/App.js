import React from 'react';
import { Provider } from 'react-redux';
import logo from './logo.svg';
import { createStore, applyMiddleware, compose } from 'redux';
import './App.css';
import reducer from './redux';
import Incrementer from './components/Incrementer';
import thunk from 'redux-thunk';
import Decrementer from './components/Decrementer';
import Counter from './components/Counter';

const store = createStore(reducer, compose(applyMiddleware(thunk)));

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <Incrementer />
        <Decrementer />
        <Counter />
      </div>
    </Provider>
  );
}

export default App;