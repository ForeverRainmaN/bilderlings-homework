import React from 'react';
import ShallowRenderer from 'react-test-renderer';
import AddFeeForm from "./FeeAddNewForm";

it('tests if Add fee form renders correctly', () => {
  const addFeeForm = ShallowRenderer
  .create(<AddFeeForm
      handleFromChange={() => {
      }}
      handleToChange={() => {
      }}
      addFee={() => {
      }}
      handleFeeChange={() => {
      }}
  />).toJSON();
  expect(addFeeForm).toMatchSnapshot();
});