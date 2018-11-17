import React, {PureComponent} from 'react';
import {NumericInput} from '@blueprintjs/core';
import {CurrencySelects} from "../FeeEditor/FeeAddNewForm/FeeAddNewForm";
import {Link} from "react-router-dom";
import './CurrencyCalculator.css';
import getHttpClient from "../../httpclient/HttpClient";

export default class CurrencyCalculator extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      amountNumber: 0,
      amountString: "0",
      convertedAmount: 0,
      currencies: [],
      from: '',
      to: ''
    };
    this.handleFromChange = this.handleFromChange.bind(this);
    this.handleToChange = this.handleToChange.bind(this);
    this.handleAmountChange = this.handleAmountChange.bind(this);
  }

  componentDidMount() {
    this.getCurrencies();
  }

  async getCurrencies() {
    try {
      const {result: currencies} = await getHttpClient().getCurrencies();
      this.setState(() => {
        return {
          currencies,
          from: currencies[0] ? currencies[0].from : '',
          to: currencies[0] ? currencies[0].to : '',
        }
      });
    } catch (error) {
      console.log(error);
    }
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

  async handleAmountChange(amountNumber, amountString) {
    this.setState({amountNumber, amountString});
    const {result: {amount: convertedAmount}} = await getHttpClient().convert(
        amountNumber, this.state.from, this.state.to
    );
    this.setState({convertedAmount});
  }

  render() {
    console.log(this.state);
    const {from, to, amountString, convertedAmount, currencies} = this.state;
    return (
        <div className="bilderlings-homework-curr-calc display-flex">
          <Link to="/fees">Fee Editor</Link>
          <div className="display-flex">
            <NumericInput
                className="bilderlings-homework-amount-input width70-br5-mr-30"
                allowNumericCharactersOnly={true}
                buttonPosition="none"
                onValueChange={this.handleAmountChange}
                value={amountString}
            />
            <CurrencySelects
                handleFromChange={this.handleFromChange}
                handleToChange={this.handleToChange}
                toInitialValue={to}
                fromInitialValue={from}
                currencies={currencies}
            />
            {convertedAmount}
          </div>
        </div>
    );
  }
}
