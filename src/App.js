import React, { Component } from "react";
import Charts from "./component/charts/Charts";
import store from './dux/store'
import { Provider } from "react-redux";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Charts />
        </div>
      </Provider>
    );
  }
}

export default App;
