/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react';
import App from './App';

test('<App />', () => {
  render(<App />);
  const linkElement = screen.getByText(/React Tetris/i);
  expect(linkElement).toBeInTheDocument();
});
