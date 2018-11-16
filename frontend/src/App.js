import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {FeeEditor} from "./components/FeeEditor/FeeEditor";
import CurrencyCalculator
  from "./components/CurrencyCalculator/CurrencyCalculator";
import '../node_modules/normalize.css/normalize.css';
import '../node_modules/@blueprintjs/core/lib/css/blueprint.css';
import './App.css';

class App extends Component {
  render() {
    return (
        <div className="App">
          <BrowserRouter>
            <Switch>
              <Route path="/" exact component={FeeEditor}/>
              <Route path="/currency-calc" component={CurrencyCalculator}/>
            </Switch>
          </BrowserRouter>
        </div>
    );
  }
}


export default App;
