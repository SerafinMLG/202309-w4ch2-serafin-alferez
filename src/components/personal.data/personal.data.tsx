import { SyntheticEvent } from 'react';

export function PersonalData({ nextStep }) {
  const handleNext = (event: SyntheticEvent) => {
    event.preventDefault();
    nextStep();
  };
  return (
    <>
      <p>Personal Data</p>
      <button onClick={handleNext}>Next</button>
    </>
  );
}
