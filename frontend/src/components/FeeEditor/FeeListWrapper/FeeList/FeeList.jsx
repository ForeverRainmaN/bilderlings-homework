import React from 'react';
import CurrencyPair from "./Fee/Fee";
import PropTypes from 'prop-types';
import './FeeList.css';

export default function FeeList({feeList, removeFee}) {
  return (
      <div className="bilderlings-homework-currency-pair-list">
        {feeList.map(currencyPair =>
            <CurrencyPair key={currencyPair.id}
                          from={currencyPair.from}
                          to={currencyPair.to}
                          fee={currencyPair.fee}
                          removeFee={() => removeFee(currencyPair.id)}
            />
        )}
      </div>
  );
}

FeeList.propTypes = {
  FeeList: PropTypes.shape({
    id: PropTypes.number.isRequired,
    from: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    fee: PropTypes.number.isRequired
  })
};