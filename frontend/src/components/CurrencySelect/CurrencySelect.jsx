import React from "react";
import propTypes from 'prop-types';

export default function CurrencySelect({
  handleFromChange,
  handleToChange,
  currencies
}) {
  function option(e) {
    return <option key={e}>{e}</option>;
  }

  const from = [...new Set(currencies.map(({from}) => from))];
  const to = [...new Set(currencies.map(({to}) => to))];
  return (
      <div className="bilderlings-homework-add-fee-form-selects display-flex">
        <select className="bliderlings-homework-select-from width70-br5-mr-30"
                id="from"
                onChange={handleFromChange}
                defaultValue={from[0]}
        >
          {from.map(option)}
        </select>
        <select className="bliderlings-homework-select-to width70-br5-mr-30"
                id="to"
                onChange={handleToChange}
                defaultValue={to[0]}
        >
          {to.map(option)}
        </select>
      </div>
  )
}

CurrencySelect.propTypes = {
  handleFromChange: propTypes.func.isRequired,
  handleToChange: propTypes.func.isRequired,
};
