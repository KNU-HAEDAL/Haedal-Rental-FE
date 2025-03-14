'use client';

import { useRouter } from 'next/navigation';
import { Button } from '@workspace/ui/components/button';

export const GoToMainPageButton = () => {
  const router = useRouter();

  const handleGoToMainPage = () => {
    router.push('/');
  };

  return (
    <div className='mt-6'>
      <Button variant='moon' onClick={handleGoToMainPage} className='w-[150px] y-[35px] font-bold'>
        첫 페이지로 이동
      </Button>
    </div>
  );
};
