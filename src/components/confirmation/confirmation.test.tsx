import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Confirmation } from './confirmation';

describe('Given Footer component', () => {
  describe('When we instantiate', () => {
    render(
      <Confirmation
        previousStep={function (): void {
          throw new Error('Function not implemented.');
        }}
        user={{
          name: '',
          lastName: '',
          birthdate: '',
          gender: '',
          email: '',
          newsLetter: false,
          userName: '',
          password: '',
          accountType: '',
        }}
        nextStep={function (): void {
          throw new Error('Function not implemented.');
        }}
      ></Confirmation>
    );

    test('It should be in the document', () => {
      const element = screen.getByText('Gender:');
      expect(element).toBeInTheDocument();
    });
  });
});
