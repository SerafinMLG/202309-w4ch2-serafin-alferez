import { SyntheticEvent } from 'react';
        

export function PersonalData({ nextStep }) {
  const handleNext = (event: SyntheticEvent) => {
    event.preventDefault();
    nextStep();
  };
  return (
    <>
      <p>Personal Data</p>
      
      <form className="user-form" >
      <fieldset>
        <legend>User data</legend>
        <div className="form-control">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="user-name"
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-control">
          <label htmlFor="lastName">SurName</label>
          <input
            type="text"
            name="lastName"
            id="user-surname"
            onChange={handleChange}
            required
          />
        </div>
      </fieldset>
      <div className="form-control">
        <fieldset onChange={handleChange}>
          <legend>Fecha de nacimiento</legend>
          <label>
            <input type="date" name="birthdate" required />
          </label>
          <input type="radio" name="gender" id="male" value = 'male'/>
          <label htmlFor="male">Male</label>
          <input type="radio" name="gender" id="female" value='female' />
          <label htmlFor="female">Female</label>
          <input type="radio" name="gender" id="other" value='other' />
          <label htmlFor="other">Other</label>
          <input type="radio" name="gender" id="prefer not to mention" value='prefer not to mention' />
          <label htmlFor="prefer not to mention">Prefer not to mention</label>
        </fieldset>
        <div className="form-control">
          <label htmlFor="email">email</label>
          <input
            type="email"
            name="email"
            id="user-surname"
            onChange={handleChange}
            required
          />
        </div>
          <div className="form-control">
            <input
              type="checkbox"
              name="newsLetter"
              id="is-ok"
              onChange={handleChange}
              required
            />
          <label htmlFor="newsLetter">Agree to subscribe to our newsletter</label>
        </div>
      </div>
      <button type="submit">Send</button>
    </form>
      
      <button onClick={handleNext}>Next</button>
    </>)
}
