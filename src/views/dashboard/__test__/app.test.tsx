import React from 'react';
import { render } from '@testing-library/react';
import Dashboard from '../';

test('renders learn react link', () => {
  const { getByText } = render(<Dashboard />);
  const linkElement = getByText(/Test button/i);

  expect(linkElement).toBeInTheDocument();
});
