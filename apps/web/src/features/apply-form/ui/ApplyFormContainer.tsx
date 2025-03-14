'use client';

import { useState } from 'react';
import { useRentalForm } from '../model';

import { RentalNotice } from './notice';
import { RentalCreate } from './create';
import { RentalSubmit } from './submit';

export const ApplyFormContainer = () => {
  const [step, setStep] = useState(1);
  const { resetForm } = useRentalForm();
  const [resetKey, setResetKey] = useState(0);

  const handleNext = () => {
    setStep((prev) => Math.min(prev + 1, 3));
  };

  const handleBack = () => {
    setStep((prev) => Math.max(prev - 1, 1));
  };

  const handleReset = () => {
    resetForm();
    setResetKey((prev) => prev + 1);
  };

  return (
    <div className='flex flex-col items-center justify-center'>
      {step === 1 && (
        <RentalNotice
          key={resetKey}
          currentStep={step}
          onNext={handleNext}
          onBack={handleBack}
          resetForm={handleReset}
        />
      )}
      {step === 2 && (
        <RentalCreate
          key={resetKey}
          currentStep={step}
          onNext={handleNext}
          onBack={handleBack}
          resetForm={handleReset}
        />
      )}
      {step === 3 && <RentalSubmit />}
    </div>
  );
};
