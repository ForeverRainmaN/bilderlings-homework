import React from 'react';
import TestRenderer from 'react-test-renderer';
import FeeList from './FeeList';

const feeListToRender = [
  {
    id: 1,
    from: "USD",
    to: "EUR",
    fee: 1.25
  },
  {
    id: 2,
    from: "EUR",
    to: "RUB",
    fee: 1.05
  },
  {
    id: 3,
    from: "RUB",
    to: "EUR",
    fee: 1.06
  }
];

it('tests if FeeList renders all fees that are passed via props correctly',
    () => {
      const feeList = TestRenderer.create(
          <FeeList FeeList={feeListToRender} removeFee={() => {}} />
      )
    });