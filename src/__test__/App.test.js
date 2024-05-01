import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders header', () => {
  render(<App />);
  
  const headerElement = screen.getByTestId('App-header');
  expect(headerElement).toBeInTheDocument();
});

test('renders main', () => {
  render(<App />);
  
  const mainElement = screen.getByTestId('App-main');
  expect(mainElement).toBeInTheDocument();
});

test('renders footer', () => {
  render(<App />);

  const footerElement = screen.getByTestId('App-footer');
  expect(footerElement).toBeInTheDocument();
});
