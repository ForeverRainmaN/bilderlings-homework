import React from "react";
import ShallowRenderer from "react-test-renderer";
import {MemoryRouter} from "react-router-dom";
import CurrencyCalculator from "./CurrencyCalculator";

it('tests if CurrencyCalculator form renders correctly', () => {
  const addFeeForm = ShallowRenderer
  .create(
      <MemoryRouter>
        <CurrencyCalculator/>
      </MemoryRouter>).toJSON();
  expect(addFeeForm).toMatchSnapshot();
});
