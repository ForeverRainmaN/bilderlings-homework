import React, {PureComponent} from 'react';
import FeeList from "./FeeList/FeeList";

export default class FeeListWrapper extends PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    const {feeList, removeFee} = this.props;
    console.log(feeList);
    return (
        <FeeList feeList={feeList}
                 removeFee={removeFee}
        />
    );
  }
}