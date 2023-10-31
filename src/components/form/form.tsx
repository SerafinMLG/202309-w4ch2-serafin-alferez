import { SyntheticEvent, useState } from 'react';
import { AccessData } from '../access.data/access.data';
import { Confirmation } from '../confirmation/confirmation';
import { Login } from '../login/login';
import { PersonalData } from '../personal.data/personal.data';
import { User } from '../../models/type';

export function Form() {
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
    console.log(userState);
  };

  const [stepState, setStepState] = useState(1);

  const previousStep = () => {
    setStepState(stepState - 1);
    console.log(stepState);
  };

  const nextStep = () => {
    setStepState(stepState + 1);
    console.log(stepState);
  };

  switch (stepState) {
    case 1:
      return <PersonalData nextStep={nextStep} handleChange={handleChange} />;
    case 2:
      return (
        <AccessData
          nextStep={nextStep}
          previousStep={previousStep}
          handleChange={handleChange}
        />
      );
    case 3:
      return (
        <Confirmation
          nextStep={nextStep}
          previousStep={previousStep}
          user={userState}
        />
      );
    case 4:
      return <Login previousStep={previousStep} />;
    default:
  }
}
