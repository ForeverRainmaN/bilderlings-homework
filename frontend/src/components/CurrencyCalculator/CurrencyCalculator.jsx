import React, {PureComponent} from 'react';
import {NumericInput} from '@blueprintjs/core';
import {CurrencySelects} from "../FeeEditor/FeeAddNewForm/FeeAddNewForm";
import {Link} from "react-router-dom";
import './CurrencyCalculator.css';

export default class CurrencyCalculator extends PureComponent {
  constructor(props) {
    const from = ["USD", "EUR", "RUB"];
    const to = ["RUB", "USD", "EUR"];
    super(props);
    this.state = {
      amount: 0.00,
      from: from[0],
      to: to[0]
    };
    this.handleFromChange = this.handleFromChange.bind(this);
    this.handleToChange = this.handleToChange.bind(this);
    this.handleAmountChange = this.handleAmountChange.bind(this);
  }

  handleFromChange({target: {value: from}}) {
    this.setState(() => {
      return {from};
    });
  }

  handleToChange({target: {value: to}}) {
    this.setState(() => {
      return {to};
    });
  }

  handleAmountChange(amount) {
    this.setState(() => {
      return {amount};
    });
  }

  render() {
    const {from, to, amount} = this.state;
    return (
        <div className="bilderlings-homework-curr-calc display-flex">
          <Link to="/fees">Fee Editor</Link>
          <div className="display-flex">
            <NumericInput
                className="bilderlings-homework-amount-input width70-br5-mr-30"
                allowNumericCharactersOnly={true}
                buttonPosition="none"
                onValueChange={this.handleAmountChange}
                value={amount}
            />
            <CurrencySelects
                handleFromChange={this.handleFromChange}
                handleToChange={this.handleToChange}
                toInitialValue={to}
                fromInitialValue={from}
            />
          </div>
        </div>
    );
  }
}
