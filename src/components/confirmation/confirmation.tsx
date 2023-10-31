import { SyntheticEvent } from 'react';
import { User } from '../../models/type';
type Props = {
  user: User;
  nextStep: () => void;
  previousStep: () => void;
};
export function Confirmation({ nextStep, previousStep, user }: Props) {
  const handleNext = (event: SyntheticEvent) => {
    event.preventDefault();
    nextStep();
  };
  const handlePrevious = (event: SyntheticEvent) => {
    event.preventDefault();
    previousStep();
  };

  const data = user;
  return (
    <>
      <p>Confirmation</p>
      <p>Name: {data.name}</p>
      <p>Surname: {data.lastName}</p>
      <p>Birthday: {data.birthdate}</p>
      <p>Gender: {data.gender}</p>
      <p>Email: {data.email}</p>
      <p>Newsletter: {data.newsLetter}</p>
      <p>UserName: {data.userName}</p>
      <p>Account Type: {data.accountType}</p>
      <button onClick={handlePrevious}>Previous</button>
      <button onClick={handleNext}>Next</button>
    </>
  );
}
