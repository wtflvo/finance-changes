import { render, screen } from '@testing-library/react';
import App from './App';
import React from 'react'


test('renders header row', () => {
  render(<App />);
  const linkElement = screen.getByText('Companies');
  expect(linkElement).toBeInTheDocument();
});

test('renders data rows', () => {
  render(<App />);
  const linkElement = screen.getByText(/Apple/);
  expect(linkElement).toBeInTheDocument();
});

