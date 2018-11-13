import React, {Component} from 'react';
import '../node_modules/normalize.css/normalize.css';
import '../node_modules/@blueprintjs/core/lib/css/blueprint.css';
import './App.css';
import FeeEditorList from "./components/currency_pair_list/CurrencyPairList";

class App extends Component {
  render() {
    return (
        <div className="App">
            <FeeEditorList />
        </div>
    );
  }
}

export default App;
