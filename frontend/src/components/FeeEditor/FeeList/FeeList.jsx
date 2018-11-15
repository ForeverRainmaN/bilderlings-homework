import React from 'react';
import Fee from "./Fee/Fee";
import PropTypes from 'prop-types';
import './FeeList.css';

export default function FeeList({feeList, removeFee}) {
  return (
      <div className="bilderlings-homework-currency-pair-list">
        {feeList.map(fee =>
            <Fee key={fee.id}
                 from={fee.from}
                 to={fee.to}
                 fee={fee.fee}
                 removeFee={() => removeFee(fee.id)}
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