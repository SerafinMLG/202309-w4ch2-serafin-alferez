import { SyntheticEvent } from 'react';

export function AccessData({ nextStep, previousStep }) {
  const handleNext = (event: SyntheticEvent) => {
    event.preventDefault();
    nextStep();
  };
  const handlePrevious = (event: SyntheticEvent) => {
    event.preventDefault();
    previousStep();
  };
  return (
    <>
      <p>Access Data</p>
      <button onClick={handlePrevious}>Previous</button>
      <button onClick={handleNext}>Next</button>
    </>
  );
}
