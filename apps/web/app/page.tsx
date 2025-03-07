import Image from 'next/image';
import { MainAuthButtons, MainContainer } from '@/src/features';
import Link from 'next/link';

export default function Page() {
  return (
    <div className='flex flex-col items-center h-dvh text-center justify-center gap-3'>
      <Link href='/'>
        <Image
          src='/logo/symbol-logo.png'
          alt='logo'
          className='cursor-pointer'
          width={230}
          height={139}
        />
      </Link>
      <MainAuthButtons />
      <MainContainer />
    </div>
  );
}
