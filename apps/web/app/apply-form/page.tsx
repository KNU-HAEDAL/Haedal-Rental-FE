'use client';

import { useState } from 'react';
import ApplyFormLayout from '../../src/features/apply-form/ui/ApplyFormLayout';
import ApplyStep1 from '../../src/features/apply-form/ui/ApplyStep1';
import ApplyStep2 from '../../src/features/apply-form/ui/ApplyStep2';
import ApplyStep3 from '../../src/features/apply-form/ui/ApplyStep3';

const ApplyForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 3;

  const goToNextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const goBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const resetForm = () => {
    setCurrentStep(1);
  };

  return (
    <ApplyFormLayout
      currentStep={currentStep}
      totalSteps={totalSteps}
      onNext={goToNextStep}
      onBack={goBack}
      resetForm={resetForm}
    >
      {currentStep === 1 && <ApplyStep1 />}
      {currentStep === 2 && <ApplyStep2 />}
      {currentStep === 3 && <ApplyStep3 />}
    </ApplyFormLayout>
  );
};

export default ApplyForm;
