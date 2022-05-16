import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Type away', () => {
  render(<App />);
  const linkElement = screen.getByText(/Type away in the search bar to find beautiful flowers/i);
  expect(linkElement).toBeInTheDocument();
});
