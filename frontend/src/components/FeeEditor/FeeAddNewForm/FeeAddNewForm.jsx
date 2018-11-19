import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Button, Intent, NumericInput} from '@blueprintjs/core';
import CurrencySelect from "../../CurrencySelect/CurrencySelect";
import "./FeeAddNewForm.css";

export default class AddFeeForm extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      from: this.props.currencies[0] ? this.props.currencies[0].from : '',
      to: this.props.currencies[0] ? this.props.currencies[0].to : '',
      fee: 0.00
    };
    this.handleFromChange = this.handleFromChange.bind(this);
    this.handleToChange = this.handleToChange.bind(this);
    this.handleFeeChange = this.handleFeeChange.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.currencies !== this.props.currencies) {
      const {currencies} = this.props;
      this.setState(() => {
        return {
          from: currencies[0].from,
          to: currencies[0].to
        }
      });
    }
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
      return {fee}
    });
  }

  render() {
    const {from, to, fee} = this.state;
    const {addFee, currencies} = this.props;
    return (
        <div className="bilderlings-homework-add-fee-form display-flex">
          <CurrencySelect
              handleToChange={this.handleToChange}
              handleFromChange={this.handleFromChange}
              fromInitialValue={from}
              toInitialValue={to}
              currencies={currencies}
          />
          <NumericInput
              className="bilderlings-homework-amount-input width70-br5-mr-30 ml-30"
              allowNumericCharactersOnly={true}
              buttonPosition="none"
              onValueChange={this.handleFeeChange}
              name="createFeeInput"
              value={fee}
          />
          <Button className=""
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
  addFee: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.shape({
    from: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired
  })).isRequired
};
