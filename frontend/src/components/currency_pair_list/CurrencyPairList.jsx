import React from 'react';
import WithFetching from "../HOC/WithFetching";
import './CurrencyPairList.css';
import CurrencyPair from "../currency_pair/CurrencyPair";

function CurrencyPairList(props) {
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

export default WithFetching('http://localhost:8080/fees/')(CurrencyPairList);