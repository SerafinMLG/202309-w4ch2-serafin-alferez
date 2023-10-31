import { SyntheticEvent } from 'react';

export function Confirmation({ nextStep, previousStep }) {
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
      <p>Confirmation</p>
      <button onClick={handlePrevious}>Previous</button>
      <button onClick={handleNext}>Next</button>
    </>
  );
}
