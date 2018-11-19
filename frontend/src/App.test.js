import React from "react";
import App from "./App";
import renderer from "react-test-renderer";
import {MemoryRouter} from "react-router-dom";

it('tests if App renders correctly', () => {
  const addFeeForm = renderer
  .create(
      <MemoryRouter>
        <App/>
      </MemoryRouter>).toJSON();
  expect(addFeeForm).toMatchSnapshot();
});
