import React from 'react';
import ShallowRenderer from 'react-test-renderer';
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

describe('tests if FeeList renders properly', () => {
  it('tests if FeeList renders without data in passed via props',
      () => {
        const feeList = ShallowRenderer
        .create(<FeeList
            feeList={[]}
            removeFee={() => {
            }}
        />).toJSON();
        expect(feeList).toMatchSnapshot();
      });
  it('tests if FeeList renders with data passed to props',
      () => {
        const feeList = ShallowRenderer
        .create(<FeeList
            feeList={feeListToRender}
            removeFee={() => {
            }}
        />).toJSON();
        expect(feeList).toMatchSnapshot();
      });
});
