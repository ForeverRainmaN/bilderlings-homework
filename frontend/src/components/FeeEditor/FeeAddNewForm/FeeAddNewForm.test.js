import React from 'react';
import ShallowRenderer from 'react-test-renderer';
import AddFeeForm from "./FeeAddNewForm";

it('tests if AddFeeForm renders correctly', () => {
  const addFeeForm = ShallowRenderer
  .create(<AddFeeForm
      addFee={() => {
      }}
  />).toJSON();
  expect(addFeeForm).toMatchSnapshot();
});
