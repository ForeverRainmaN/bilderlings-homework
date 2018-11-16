import React, {PureComponent} from 'react';
import {NumericInput} from '@blueprintjs/core';
import {CurrencySelects} from "../FeeEditor/FeeAddNewForm/FeeAddNewForm";
import './CurrencyCalculator.css';
import {Link} from "react-router-dom";

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
    this.handleAmountChange = this.handleAmountChange.bind(this);
    this.handleFromChange = this.handleFromChange.bind(this);
    this.handleToChange = this.handleToChange.bind(this);
  }

  handleAmountChange(e) {
    this.setState(() => {
      return {
        amount: e.target.value
      }
    });
  }

  handleFromChange(e) {
    this.setState(() => {
      return {
        from: e.target.value
      }
    });
  }

  handleToChange(e) {
    this.setState(() => {
      return {
        to: e.target.value
      }
    });
  }

  render() {
    const {from, to} = this.state;
    return (
          <div className="bilderlings-homework-curr-calc display-flex">
            <Link to="/"> Back to Fee editor </Link>
            <div className="display-flex">
            <NumericInput
                className="bilderlings-homework-amount-input width70-br5-mr-30"
                allowNumericCharactersOnly={true}
                buttonPosition="none"
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
