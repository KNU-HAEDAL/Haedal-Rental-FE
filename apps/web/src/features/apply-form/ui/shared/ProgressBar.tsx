'use client';

import { Progress } from '@workspace/ui/components/progress';

interface ProgressBarProps {
  step: number;
  totalSteps: number;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ step, totalSteps }) => {
  const progressValue = (step / totalSteps) * 100;

  return (
    <div className='w-2/5 px-2 my-4 flex items-center'>
      <Progress value={progressValue} className='flex-1' />
      <span className='ml-2 text-sm text-gray-800'>
        {step}/{totalSteps} 페이지
      </span>
    </div>
  );
};
