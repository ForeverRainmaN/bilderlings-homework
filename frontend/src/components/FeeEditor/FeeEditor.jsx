import React, {Component} from 'react';
import AddFeeForm from './FeeAddNewForm/FeeAddNewForm';
import CurrencyPairList from "./FeeList/FeeList";

export class FeeEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      from: "",
      to: "",
      fee: 0.00,
      createdFee: []

    };
    this.handleFeeChange = this.handleFeeChange.bind(this);
    this.handleFromChange = this.handleFromChange.bind(this);
    this.handleToChange = this.handleToChange.bind(this);
    this.addFee = this.addFee.bind(this);
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
    let {value} = e.target;
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

  async addFee() {
    fetch('http://localhost:8080/fees/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: this.state.from,
        to: this.state.to,
        fee: this.state.fee
      })
    })
    .then(result => result.json())
    .then(data => this.setState(() => {
      return {
        createdFee: data
      }
    }));
  }

  render() {
    console.log(this.state);
    return (
        <div className="bilderlings-homework-currency-editor">
          <AddFeeForm
              handleFeeChange={this.handleFeeChange}
              handleFromChange={this.handleFromChange}
              handleToChange={this.handleToChange}
              addFee={this.addFee}
          />
          <CurrencyPairList/>
        </div>
    )
  }
}
