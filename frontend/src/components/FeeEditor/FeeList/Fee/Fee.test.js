import React from 'react';
import ShallowRenderer from 'react-test-renderer';
import Fee from './Fee';

it('tests if fee renders correctly', () => {
  const fee = ShallowRenderer
  .create(<Fee
      from="USD"
      to="EUR"
      fee={0.05}
      removeFee={() => {}}
  />).toJSON();
  expect(fee).toMatchSnapshot();
});
