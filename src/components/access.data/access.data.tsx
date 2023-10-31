
import { SyntheticEvent, useState } from 'react';
import { User } from '../../models/type'
import React from 'react';

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
      
      <button onClick={handlePrevious}>Previous</button>
      <button onClick={handleNext}>Next</button>
    </>
  );
}
