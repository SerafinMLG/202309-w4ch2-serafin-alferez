import { useState } from 'react';
import { AccessData } from '../access.data/access.data';
import { Confirmation } from '../confirmation/confirmation';
import { Login } from '../login/login';
import { PersonalData } from '../personal.data/personal.data';

export function Form() {
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
      return <PersonalData nextStep={nextStep} />;
    case 2:
      return <AccessData nextStep={nextStep} previousStep={previousStep} />;
    case 3:
      return <Confirmation nextStep={nextStep} previousStep={previousStep} />;
    case 4:
      return <Login previousStep={previousStep} />;
    default:
  }
}
