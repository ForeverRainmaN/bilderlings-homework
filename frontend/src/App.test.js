import React from "react";
import App from "./App";
import TestRenderer from "react-test-renderer";
import {MemoryRouter} from "react-router-dom";

it('tests if App renders correctly', () => {
  const addFeeForm = TestRenderer
  .create(
      <MemoryRouter>
        <App />
      </MemoryRouter>).toJSON();
  expect(addFeeForm).toMatchSnapshot();
});
