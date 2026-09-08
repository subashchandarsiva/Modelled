import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders the profile and table', () => {
  const { getByText } = render(<App />);
  expect(getByText('Subash')).toBeInTheDocument();
  expect(getByText('King of Pirates')).toBeInTheDocument();
  expect(getByText('@mdo')).toBeInTheDocument();
});
