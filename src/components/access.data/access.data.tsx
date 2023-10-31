import { SyntheticEvent, useState } from 'react';
import { User } from '../../models/type'
import React from 'react';

export function AccessData() {
  const initialState: User = {
    name: '',
    lastName: '',
    birthdate: '',
    gender: '',
    email: '',
    newsLetter: false,
    userName: '',
    password: '',
    accountType: '',
  };

  const [userState, setUserState] = useState(initialState);

  const handleChange = (ev: SyntheticEvent) => {
    const control = ev.target as HTMLInputElement;
    const value = control.type === 'checkbox' ? control.checked : control.value;
    const name = control.name;
    setUserState({ ...userState, [name]: value });
    console.log(userState)
  };


  return (
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
          name="password"
          id="user-surname"
          onChange={handleChange}
          required
        />
      </div>
    </fieldset>
    <fieldset>
      <select name="accountType" value="personal"></select>
      <select name="accountType" value="pro"></select>
      <select name="accountType" value="business"></select>
    </fieldset>
    </form>
  );
 
}


