import React, {Component} from 'react';

export default class CurrencyPairEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      from: "",
      to: "",
      fee: 0.00
    };
  }

  handleFeeChange(e) {
    this.setState(() => {
      return {
        fee: e.target.value
      }
    });
  }
}
