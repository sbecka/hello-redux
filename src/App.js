import React, { Component } from "react";
import HelloWorld from "./HelloWorld";
import { store } from './store';
import ButtonGroup from "./ButtonGroup";


class App extends Component {

  render() {
    return (
      <div>
        <HelloWorld key={1} tech={store.getState().tech} />
        <ButtonGroup key={2} technologies={['React', 'Elm', 'React-redux']} />
      </div>
    );
  }
}

export default App;
