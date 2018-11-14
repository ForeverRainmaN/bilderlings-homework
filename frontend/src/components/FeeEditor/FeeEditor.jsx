import React, {PureComponent} from 'react';
import AddFeeForm from './FeeAddNewForm/FeeAddNewForm';
import FeeListWrapper from "./FeeListWrapper/FeeListWrapper";

export class FeeEditor extends PureComponent {
  constructor(props) {
    super(props);
    this.url = "http://localhost:8080/fees/";

    const from = ["USD", "EUR", "RUB"];
    const to = ["RUB", "USD", "EUR"];
    this.state = {
      from: from[0],
      to: to[0],
      fee: 0.00,
      createdFee: [],
      feeList: []
    };

    this.handleFeeChange = this.handleFeeChange.bind(this);
    this.handleFromChange = this.handleFromChange.bind(this);
    this.handleToChange = this.handleToChange.bind(this);
    this.addFee = this.addFee.bind(this);
    this.removeFee = this.removeFee.bind(this);
  }

  async componentDidMount() {
    try {
      await this.fetchAllFees(this.url);
    } catch (error) {
      console.log(error);
    }
  }

  async fetchAllFees(url) {
    fetch(url)
    .then(result => result.json())
    .then(data => this.setState(() => {
      return {
        feeList: data.result
      }
    })).catch(error => console.log(error));
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
    .then(data => this.setState((prevState) => {
      return {
        feeList: [...prevState.feeList, data.result] ,
        createdFee: data
      }
    })).catch(error => console.log(error));
  }

  async removeFee(id) {
    fetch(`http://localhost:8080/fees/${id}`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    })
    .then(result => result.json())
    .then(() => this.setState((prevState) => {
      const {feeList} = prevState;
      const index = feeList.indexOf(feeList.find(fee => fee.id === id));
      return {
        feeList: [
          ...prevState.feeList.slice(0, index),
          ...prevState.feeList.slice(index +1)
        ]
      }
    }));
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
    const {feeList} = this.state;
    return (
        <div className="bilderlings-homework-fee-editor">
          <AddFeeForm
              handleFeeChange={this.handleFeeChange}
              handleFromChange={this.handleFromChange}
              handleToChange={this.handleToChange}
              addFee={this.addFee}
          />
          <FeeListWrapper
              feeList={feeList}
              removeFee={this.removeFee}
          />
        </div>
    )
  }
}
