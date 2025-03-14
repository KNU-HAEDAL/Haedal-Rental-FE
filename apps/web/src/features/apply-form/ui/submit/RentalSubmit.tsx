'use client';

import { GoToMainPageButton } from './components/GoToMainPageButton';
import { SubmitMessage } from './components/SubmitMessage';

export const RentalSubmit = () => {
  return (
    <div className='flex flex-col justify-center items-center w-[550px] bg-white'>
      <SubmitMessage />
      <GoToMainPageButton />
    </div>
  );
};
