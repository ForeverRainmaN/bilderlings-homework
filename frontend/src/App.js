import React, {Component} from 'react';
import '../node_modules/normalize.css/normalize.css';
import '../node_modules/@blueprintjs/core/lib/css/blueprint.css';
import './App.css';
import {FeeEditor} from "./components/FeeEditor/FeeEditor";

class App extends Component {
  render() {
    return (
        <div className="App">
          <FeeEditor />
        </div>
    );
  }
}

export default App;
