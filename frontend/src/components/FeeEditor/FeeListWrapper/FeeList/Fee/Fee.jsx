import React from 'react';
import PropTypes from 'prop-types'
import { Button } from "@blueprintjs/core";
import './Fee.css';

export default function CurrencyPair({from, to, fee, removeFee}) {
  return (
      <div className="bilderlings-homework-curr-pair">
        <span>{from}</span>
        <span>{to}</span>
        <span>{fee}</span>
        <Button className="bp3-intent-danger"
                onClick={removeFee}
        >
          Remove
        </Button>
      </div>
  );
}

CurrencyPair.propTypes = {
  from: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  fee: PropTypes.number.isRequired
};