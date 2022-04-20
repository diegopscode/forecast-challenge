import React from "react"
import { render } from '@testing-library/react';
import FormSearch from './';

describe("renders form search component", () => {
  test.only('should render form', () => {
    const { getByText } = render(<FormSearch onSubmit={() => {}}/>);
  
    expect(getByText("Search any US location")).toBeInTheDocument();
  });
})