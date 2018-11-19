import React from 'react';
import renderer from 'react-test-renderer';
import AddFeeForm from "./FeeAddNewForm";

it('tests if AddFeeForm renders correctly', () => {
  const addFeeForm = renderer
  .create(<AddFeeForm
      currencies={[
        {from: 'EUR', to: 'USD'},
        {from: 'EUR', to: 'RUB'},
      ]}
      addFee={() => {
      }}
  />).toJSON();
  expect(addFeeForm).toMatchSnapshot();
});
