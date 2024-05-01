import { render, screen } from '@testing-library/react';
import Header from '../';

test('renders header', () => {
  render(<Header />);
  
  const headerElement = screen.getByTestId('App-header');
  expect(headerElement).toBeInTheDocument();
});

test('renders LetCreation link with correct href attribute', () => {
  render(<Header />);
  
  const letCreationLink = screen.getByText('LetCreation');
  expect(letCreationLink).toHaveAttribute('href', '#');
});

test('renders Contact link with correct href attribute', () => {
  render(<Header />);
  
  const contactLink = screen.getByText('Contact');
  expect(contactLink).toHaveAttribute('href', 'https://www.notion.so/Introduce-9707df63fe504ddbb5ed7140bc7608a0');
});

test('renders GitHub link with correct href attribute', () => {
  render(<Header />);
  
  const gitHubLink = screen.getByText('GitHub');
  expect(gitHubLink).toHaveAttribute('href', 'https://github.com/AriSongYe/LetCreation');
});
