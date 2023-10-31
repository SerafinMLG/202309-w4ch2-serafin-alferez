import { SyntheticEvent } from 'react';

type Props = {
  nextStep: () => void;
  previousStep: () => void;
  handleChange: (ev: SyntheticEvent) => void;
};
export function AccessData({ nextStep, previousStep, handleChange }: Props) {
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

      <form className="user-form">
        <fieldset>
          <legend>User data</legend>
          <div className="form-control">
            <label htmlFor="userName">User Name</label>
            <input
              type="text"
              name="userName"
              id="user-name"
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-control">
            <label htmlFor="password">Password</label>
            <input
              type="text"
              name="password"
              id="user-surname"
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-control">
            <label htmlFor="password">Confirm your password</label>
            <input
              type="text"
              name="passwordRepeat"
              id="user-surname"
              required
            />
          </div>
        </fieldset>
        <fieldset onChange={handleChange}>
          <select name="accountType" id="pet-select">
            <option value="">--Please choose an option--</option>
            <option value="personal">Personal</option>
            <option value="pro">Pro</option>
            <option value="business">Business</option>
          </select>
        </fieldset>
      </form>

      <button onClick={handlePrevious}>Previous</button>
      <button onClick={handleNext}>Next</button>
    </>
  );
}
