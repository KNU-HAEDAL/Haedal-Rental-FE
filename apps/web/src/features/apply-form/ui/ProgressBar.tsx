import React from 'react';

interface ProgressBarProps {
  progress: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
  return (
    <div className='relative pt-1 w-2/5 mx-auto'>
      <div className='flex items-center justify-end gap-4 mb-2'>
        <div className='w-full bg-gray-200 rounded-full h-2.5'>
          <div className='bg-green-500 h-2.5 rounded-full' style={{ width: `${progress}%` }}></div>
        </div>
        <span className='text-sm font-medium text-gray-500 whitespace-nowrap'>
          {Math.floor(progress / 33)}/3 페이지
        </span>
      </div>
    </div>
  );
};

export default ProgressBar;
