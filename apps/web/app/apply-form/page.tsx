'use client';

import { ApplyFormContainer } from '@/features';
import { SymbolLogo } from '@/shared';

export default function Page() {
  return (
    <div className='flex flex-col items-center min-h-screen'>
      <div className='relative mt-10'>
        <SymbolLogo />
      </div>

      <div className='mt-5'>
        <ApplyFormContainer />
      </div>
    </div>
  );
}
