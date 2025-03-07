import Image from 'next/image';
import { MainAuthButtons, MainContainer } from '@/src/features';

export default function Page() {
  return (
    <div className='flex flex-col items-center h-dvh text-center justify-center gap-3'>
      <Image src='/logo/symbol-logo.png' alt='logo' width={230} height={139} />
      <MainAuthButtons />
      <MainContainer />
    </div>
  );
}
