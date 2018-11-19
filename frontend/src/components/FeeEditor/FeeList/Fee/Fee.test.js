import React from 'react';
import renderer from 'react-test-renderer';
import Fee from './Fee';

it('tests if fee renders correctly', () => {
  const fee = renderer
  .create(<Fee
      from="USD"
      to="EUR"
      fee={0.05}
      removeFee={() => {
      }}
  />).toJSON();
  expect(fee).toMatchSnapshot();
});
