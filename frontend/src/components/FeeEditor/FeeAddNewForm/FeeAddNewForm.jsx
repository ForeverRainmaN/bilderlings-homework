import React from 'react';
import PropTypes from 'prop-types';
import {Button, Intent} from '@blueprintjs/core';
import "./FeeAddNewForm.css";

function AddFeeFormSelects({
  handleFromChange,
  handleToChange,
  fromInitialValue,
  toInitialValue,
}) {
  const from = ["USD", "EUR", "RUB"];
  const to = ["RUB", "USD", "EUR"];
  return (
      <div className="bilderlings-homework-add-fee-form-selects">
        <select className="bliderlings-homework-select-from"
                id="from"
                onChange={handleFromChange}
                defaultValue={fromInitialValue}
        >
          {from.map(
              (element) => <option key={element}>{element}</option>)}
        </select>
        <select className="bliderlings-homework-select-to"
                id="to"
                onChange={handleToChange}
                defaultValue={toInitialValue}
        >
          {to.map((element) => <option key={element}>{element}</option>)}
        </select>
      </div>
  )
}

export default function AddFeeForm(
    {
      handleFeeChange,
      handleFromChange,
      handleToChange,
      addFee,
      fromInitialValue,
      toInitialValue
    }
) {
  return (
      <div className="bilderlings-homework-add-fee-form">
        <AddFeeFormSelects
            handleToChange={handleToChange}
            handleFromChange={handleFromChange}
            fromInitialValue={fromInitialValue}
            toInitialValue={toInitialValue}
        />
        <input placeholder="fee"
               onChange={handleFeeChange}
        >
        </input>
        <Button
            intent={Intent.PRIMARY}
            onClick={addFee}
        >
          Add
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