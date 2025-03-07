'use client';

import { ReactNode } from 'react';
import { Button } from '@workspace/ui/components/button';
import ProgressBar from './ProgressBar';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

interface ApplyFormLayoutProps {
  currentStep: number;
  totalSteps: number;
  children: ReactNode;
  onNext: () => void;
  onBack: () => void;
  resetForm: () => void;
}

const ApplyFormLayout = ({
  currentStep,
  totalSteps,
  children,
  onNext,
  onBack,
  resetForm,
}: ApplyFormLayoutProps) => {
  const router = useRouter();
  const progress = (currentStep / totalSteps) * 100;

  const goToHomePage = () => {
    router.push('/');
  };

  return (
    <div className='flex justify-center items-center min-h-screen bg-gray-100'>
      <div className='w-[1000px] min-h-[1000px] flex flex-col items-center py-16 px-12 bg-white shadow-lg rounded-xl border border-gray-200'>
        <Image
          src='/logo/symbol-logo.png'
          alt='Haedal Mascot'
          width={250}
          height={200}
          className='mb-4 cursor-pointer'
          onClick={() => router.push('/')}
        />

        {children}

        {currentStep < totalSteps && (
          <div className='w-full mt-6'>
            <ProgressBar progress={progress} />
          </div>
        )}

        {currentStep < totalSteps && (
          <div className='w-full flex justify-end items-center mt-4 gap-4'>
            <Button variant='ghost' size='lg' className='mr-auto' onClick={resetForm}>
              양식 지우기
            </Button>
            <Button variant='outline' size='lg' onClick={onBack}>
              뒤로
            </Button>
            <Button variant='moon' size='lg' onClick={onNext}>
              다음
            </Button>
          </div>
        )}

        {currentStep === totalSteps && (
          <div className='w-full flex justify-center items-center mt-4'>
            <Button variant='moon' size='lg' className='bg-yellow-400' onClick={goToHomePage}>
              첫 페이지로 이동
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ApplyFormLayout;