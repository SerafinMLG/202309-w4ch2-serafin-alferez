import { SyntheticEvent } from 'react';
type Props = {
  previousStep: () => void;
};
export function Login({ previousStep }: Props) {
  const handlePrevious = (event: SyntheticEvent) => {
    event.preventDefault();
    previousStep();
  };

  return (
    <>
      <p>Login</p>
      <div className="form-control">
        <label htmlFor="userName">User Name</label>
        <input type="text" name="userName" id="user-name" required />
      </div>
      <div className="form-control">
        <label htmlFor="password">Password</label>
        <input type="text" name="password" id="user-surname" required />
      </div>

      <button onClick={handlePrevious}>Previous</button>
      <button>Submit</button>
    </>
  );
}
