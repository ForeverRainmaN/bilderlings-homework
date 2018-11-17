import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Button, Intent, NumericInput} from '@blueprintjs/core';
import "./FeeAddNewForm.css";


export function CurrencySelects({
  handleFromChange,
  handleToChange,
  fromInitialValue,
  toInitialValue,
}) {
  const from = ["USD", "EUR", "RUB"];
  const to = ["RUB", "USD", "EUR"];
  function option(e) {
    return <option key={e}>{e}</option>;
  }
  return (
      <div className="bilderlings-homework-add-fee-form-selects display-flex">
        <select className="bliderlings-homework-select-from width70-br5-mr-30"
                id="from"
                onChange={handleFromChange}
                defaultValue={fromInitialValue}
        >
          {from.map(option)}
        </select>
        <select className="bliderlings-homework-select-to width70-br5-mr-30"
                id="to"
                onChange={handleToChange}
                defaultValue={toInitialValue}
        >
          {to.map(option)}
        </select>
      </div>
  )
}

export default class AddFeeForm extends PureComponent {
  constructor(props) {
    super(props);
    const from = ["USD", "EUR", "RUB"];
    const to = ["RUB", "USD", "EUR"];
    this.state = {
      from: from[0],
      to: to[0],
      fee: 0.00,
    };
    this.handleFromChange = this.handleFromChange.bind(this);
    this.handleToChange = this.handleToChange.bind(this);
    this.handleFeeChange = this.handleFeeChange.bind(this);
  }

  handleFromChange({target: {value: from}}) {
    this.setState(() => {
      return {from}
    });
  }

  handleToChange({target: {value: to}}) {
    this.setState(() => {
      return {to}
    });
  }

  handleFeeChange(fee) {
    this.setState(() => {
      return {fee};
    });
  }

  render() {
    const {from, to, fee} = this.state;
    const {addFee} = this.props;
    return (
        <div className="bilderlings-homework-add-fee-form display-flex">
          <CurrencySelects
              handleToChange={this.handleToChange}
              handleFromChange={this.handleFromChange}
              fromInitialValue={from}
              toInitialValue={to}
          />
          <NumericInput
              className="bilderlings-homework-amount-input width70-br5-mr-30"
              allowNumericCharactersOnly={true}
              buttonPosition="none"
              onValueChange={this.handleFeeChange}
              value={fee}
          />
          <Button className="width70-br5-mr-30"
                  intent={Intent.PRIMARY}
                  onClick={() => addFee(from, to, fee)}
          >
            Add
          </Button>
        </div>
    )
  }
}

AddFeeForm.propTypes = {
  addFee: PropTypes.func.isRequired
};
