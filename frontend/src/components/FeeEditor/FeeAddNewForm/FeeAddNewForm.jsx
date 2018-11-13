import React from 'react';
import PropTypes from 'prop-types';
import {Button, Intent} from '@blueprintjs/core';

export default function AddFeeForm(
    {
      handleFeeChange,
      handleFromChange,
      handleToChange,
      addFee
    }
) {

  const from = ["USD", "EUR", "RUB"];
  const to = ["RUB", "USD", "EUR"];

  return (
      <div className="bilderlings-homework-add-fee-form">
        <select className="bliderlings-homework-select-from"
                onChange={handleFromChange}
        >
          {from.map(
              (element) => <option key={element}>{element}</option>)}
        </select>
        <select className="bliderlings-homework-select-to"
                onChange={handleToChange}
        >
          {to.map((element) => <option key={element}>{element}</option>)}
        </select>
        <input placeholder="fee"
               onChange={handleFeeChange}
        >
        </input>
        <Button
            intent={Intent.PRIMARY}
            onClick={addFee}
        >
          add
        </Button>
      </div>
  );
}

AddFeeForm.propTypes = {
  handleFeeChange: PropTypes.func.isRequired,
  handleFromChange: PropTypes.func.isRequired,
  handleToChange: PropTypes.func.isRequired,
  addFee: PropTypes.func.isRequired
};