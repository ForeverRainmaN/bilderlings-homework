import React from 'react';
import ShallowRenderer from 'react-test-renderer';
import {mount} from 'enzyme';
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
      const feeList = ShallowRenderer
      .create(<FeeList
          feeList={feeListToRender}
          removeFee={() => {
          }}
      />).toJSON();
      expect(feeList).toMatchSnapshot();

      const mountedFeeList = mount(<FeeList feeList={feeListToRender}
                                            removeFee={() => ({})}/>);
      const fee = mountedFeeList.find('.bilderlings-homework-curr-pair');
      expect(fee).toHaveLength(3);
    });