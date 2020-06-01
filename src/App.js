import React, { Component } from "react";
import HelloWorld from "./HelloWorld";
import reducer from './reducers';
import { createStore } from 'redux';
const initialState = { tech: "React " };
const store = createStore(reducer, initialState); // reducer is the mandatory argument
// reducer always talks to the store, store needs to be invoked with a reducer
// like Array.reduce(), createStore() responsible for passing the args into the reducer
// reducer has state and action arguments


class App extends Component {

  render() {
    return <HelloWorld tech={store.getState().tech} />;
  }
}

export default App;
