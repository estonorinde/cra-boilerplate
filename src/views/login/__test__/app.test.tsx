import React from 'react';
import { render } from '@testing-library/react';
import Login from '../';

test('renders learn react link', () => {
  const { getByText } = render(<Login />);
  const linkElement = getByText(/Test button/i);

  expect(linkElement).toBeInTheDocument();
});
