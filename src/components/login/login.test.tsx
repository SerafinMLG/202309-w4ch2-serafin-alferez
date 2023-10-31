import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Login } from './login';

describe('Given Footer component', () => {
  describe('When we instantiate', () => {
    render(
      <Login
        previousStep={function (): void {
          throw new Error('Function not implemented.');
        }}
      ></Login>
    );

    test('It should be in the document', () => {
      const element = screen.getByText('Password');
      expect(element).toBeInTheDocument();
    });
  });
});
