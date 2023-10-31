import { SyntheticEvent } from 'react';

export function Login({ previousStep }) {
  const handlePrevious = (event: SyntheticEvent) => {
    event.preventDefault();
    previousStep();
  };
  return (
    <>
      <p>Login</p>
      <button onClick={handlePrevious}>Previous</button>
      <button>Submit</button>
    </>
  );
}
