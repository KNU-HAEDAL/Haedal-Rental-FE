'use client';

import { useRouter } from 'next/navigation';
import { ProgressBar, NavigationButtons } from '../shared';
import { NoticeMessage } from './components/NoticeMessage';

export const RentalNotice = ({
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
  const router = useRouter();

  const handleBack = () => {
    router.push('/');
  };

  return (
    <div className='flex flex-col justify-center items-center w-[550px] bg-white'>
      <NoticeMessage />
      <ProgressBar step={currentStep} totalSteps={3} />
      <NavigationButtons
        currentStep={currentStep}
        onNext={onNext}
        onBack={handleBack}
        resetForm={resetForm}
      />
    </div>
  );
};
