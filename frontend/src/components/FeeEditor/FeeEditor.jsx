import React, {PureComponent} from 'react';
import AddFeeForm from './FeeAddNewForm/FeeAddNewForm';
import FeeList from "./FeeList/FeeList";
import getHttpClient from "../../httpclient/HttpClient";
import {Link} from "react-router-dom";
import './FeeEditor.css';

export class FeeEditor extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      feeList: []
    };

    this.getAllFees = this.getAllFees.bind(this);
    this.addFee = this.addFee.bind(this);
    this.removeFee = this.removeFee.bind(this);
  }

  componentDidMount() {
    this.getAllFees();
  }

  async getAllFees() {
    try {
      const {result: feeList} = await getHttpClient().getAll();
      this.setState(() => {
        return {feeList}
      });
    } catch (error) {
      console.log(error);
    }
  }

  async addFee(from, to, fee) {
    try {
      const {result: createdFee} = await getHttpClient().add(from, to, fee);
      this.setState(({feeList}) => {
        return {
          feeList: [...feeList, createdFee]
        }
      });
    } catch (error) {
      console.log(error);
    }
  }

  async removeFee(id) {
    await getHttpClient().remove(id);
    this.setState(({feeList}) => {
      const index = feeList.indexOf(
          feeList.find(fee => fee.id === id)
      );
      return {
        feeList: [
          ...feeList.slice(0, index),
          ...feeList.slice(index + 1)
        ]
      }
    });
  }

  render() {
    const {feeList} = this.state;
    return (
        <div className="bilderlings-homework-fee-editor">
          <Link to="/">Calculator</Link>
          <AddFeeForm addFee={this.addFee}/>
          <FeeList
              feeList={feeList}
              removeFee={this.removeFee}
          />
        </div>
    )
  }
}

