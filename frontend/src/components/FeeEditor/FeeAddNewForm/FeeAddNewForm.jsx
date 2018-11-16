import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Button, Intent} from '@blueprintjs/core';
import "./FeeAddNewForm.css";

function AddFeeFormSelects({
  handleFromChange,
  handleToChange,
  fromInitialValue,
  toInitialValue,
}) {
  const from = ["USD", "EUR", "RUB"];
  const to = ["RUB", "USD", "EUR"];
  return (
      <div className="bilderlings-homework-add-fee-form-selects">
        <select className="bliderlings-homework-select-from width70-br5-mr-30"
                id="from"
                onChange={handleFromChange}
                defaultValue={fromInitialValue}
        >
          {from.map(
              (element) => <option key={element}>{element}</option>)}
        </select>
        <select className="bliderlings-homework-select-to width70-br5-mr-30"
                id="to"
                onChange={handleToChange}
                defaultValue={toInitialValue}
        >
          {to.map((element) => <option key={element}>{element}</option>)}
        </select>
      </div>
  )
}

export default class AddFeeForm extends PureComponent {
  constructor(props) {
    const from = ["USD", "EUR", "RUB"];
    const to = ["RUB", "USD", "EUR"];
    super(props);
    this.state = {
      from: from[0],
      to: to[0],
      fee: 0.00,
    };
    this.handleFeeChange = this.handleFeeChange.bind(this);
    this.handleFromChange = this.handleFromChange.bind(this);
    this.handleToChange = this.handleToChange.bind(this);
  }

  handleFeeChange(e) {
    const {value} = e.target;
    this.setState(() => {
      return {
        fee: value
      }
    });
  }

  handleFromChange(e) {
    const {value} = e.target;
    this.setState(() => {
      return {
        from: value
      }
    });
  }

  handleToChange(e) {
    const {value} = e.target;
    this.setState(() => {
      return {
        to: value
      }
    });
  }

  render() {
    const {from, to, fee} = this.state;
    const {addFee} = this.props;
    return (
        <div className="bilderlings-homework-add-fee-form">
          <AddFeeFormSelects
              handleToChange={this.handleToChange}
              handleFromChange={this.handleFromChange}
              fromInitialValue={from}
              toInitialValue={to}
          />
          <input className="width70-br5-mr-30"
                 onChange={this.handleFeeChange}/>
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