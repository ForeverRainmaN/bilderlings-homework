import React from 'react';
import PropTypes from 'prop-types'
import {Button} from "@blueprintjs/core";
import './Fee.css';

export default function Fee({from, to, fee, removeFee}) {
  return (
      <div className="bilderlings-homework-fee">
        <div className="bilderlings-homework-fee-element">{from}</div>
        <div className="bilderlings-homework-fee-element">{to}</div>
        <div className="bilderlings-homework-fee-element">{fee}</div>
        <Button className="bp3-intent-danger"
                onClick={removeFee}
        >
          Remove
        </Button>
      </div>
  );
}

Fee.propTypes = {
  from: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  fee: PropTypes.number.isRequired,
  removeFee: PropTypes.func.isRequired
};
