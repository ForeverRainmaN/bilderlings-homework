import React from 'react';
import WithFetching from "../../hoc/WithFetching";
import CurrencyPair from "./Fee/Fee";
import './FeeList.css';

function FeeList(props) {
  return (
      <div className="bilderlings-homework-currency-pair-list">
        {props.feeList.map(currencyPair =>
            <CurrencyPair key={currencyPair.id}
                          from={currencyPair.from}
                          to={currencyPair.to}
                          fee={currencyPair.fee}
            />
        )}
      </div>
  );
}

export default WithFetching('http://localhost:8080/fees/')(FeeList);