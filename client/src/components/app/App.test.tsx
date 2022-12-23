import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import DarkMode from '../screens/darkmode/DarkMode';

test('renders Go to previous version@1.0 link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Go to previous version@1.0/i);
  expect(linkElement).toBeInTheDocument();
});

// 1
test("renders dark mode component", () => {
  render(<DarkMode />);

  // 2
  const inputElement = screen.getByRole("checkbox") as HTMLInputElement;
  expect(inputElement).toBeInTheDocument();
});

// 3
test("toggles dark mode", () => {
  render(<DarkMode />);
  const inputElement = screen.getByRole("checkbox") as HTMLInputElement;

  // 4
  expect(inputElement.checked).toEqual(false);
  fireEvent.click(inputElement);
  expect(inputElement.checked).toEqual(true);

  // 5
  expect(document.documentElement.getAttribute("data-theme")).toBe("dark");
});