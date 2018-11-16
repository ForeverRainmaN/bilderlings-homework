import React, {PureComponent} from 'react';
import AddFeeForm from './FeeAddNewForm/FeeAddNewForm';
import FeeList from "./FeeList/FeeList";
import getHttpClient from "../../httpclient/HttpClient";

export class FeeEditor extends PureComponent {
  constructor(props) {
    super(props);
    const from = ["USD", "EUR", "RUB"];
    const to = ["RUB", "USD", "EUR"];
    this.state = {
      from: from[0],
      to: to[0],
      fee: '',
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
      await this.fetchAllFees();
    } catch (error) {
      console.log(error);
    }
  }

  async fetchAllFees() {
    try {
      const response = await getHttpClient().getAll();
      this.setState(() => {
        return {
          feeList: response.result
        }
      });
    } catch (error) {
      console.log(error);
    }
  }

  async addFee() {
    const {from, to, fee} = this.state;
    try {
      const response = await getHttpClient().add(from, to, fee);
      const data = response.result;
      this.setState((prevState) => {
        return {
          feeList: [...prevState.feeList, data],
          createdFee: data
        }
      });
    } catch (error) {
      console.log(error);
    }
  }

  async removeFee(id) {
    await getHttpClient().remove(id)
    .then(() => this.setState((prevState) => {
      const {feeList} = prevState;
      const index = feeList
      .indexOf(feeList.find(fee => fee.id === id));
      return {
        feeList: [
          ...prevState.feeList.slice(0, index),
          ...prevState.feeList.slice(index + 1)
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
    const {feeList, from, to} = this.state;
    return (
        <div className="bilderlings-homework-fee-editor">
          <AddFeeForm
              handleFeeChange={this.handleFeeChange}
              handleFromChange={this.handleFromChange}
              handleToChange={this.handleToChange}
              addFee={this.addFee}
              fromInitialValue={from}
              toInitialValue={to}
          />
          <FeeList
              feeList={feeList}
              from={from}
              to={to}
              removeFee={this.removeFee}
          />
        </div>
    )
  }
}
