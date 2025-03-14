'use client';

import { ProgressBar, NavigationButtons } from '../shared';
import { CreateForm } from './components/CreateForm';

export const RentalCreate = ({
  currentStep,
  onNext,
  onBack,
  resetForm,
}: {
  currentStep: number;
  onNext: () => void;
  onBack: () => void;
  resetForm: () => void;
}) => {
  return (
    <div className='flex flex-col justify-center items-center w-[550px] bg-white'>
      <CreateForm />
      <ProgressBar step={currentStep} totalSteps={3} />
      <NavigationButtons
        currentStep={currentStep}
        onNext={onNext}
        onBack={onBack}
        resetForm={resetForm}
      />
    </div>
  );
};
