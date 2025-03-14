'use client';

import { Button } from '@workspace/ui/components/button';

export const NavigationButtons = ({
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
    <div className='w-full flex justify-end items-center mt-4 gap-4'>
      <Button variant='ghost' className='mr-auto' onClick={resetForm}>
        양식 지우기
      </Button>
      {currentStep < 3 && (
        <Button variant='outline' onClick={onBack}>
          뒤로
        </Button>
      )}
      {currentStep < 3 && (
        <Button variant='moon' onClick={onNext}>
          {currentStep === 2 ? '제출' : '다음'}
        </Button>
      )}
    </div>
  );
};
