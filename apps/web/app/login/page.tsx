import { LoginContainer } from '@/features/auth';
import { SimpleLogo } from '@/shared';
import Link from 'next/link';

const LoginPage = () => {
  return (
    <main className='w-full flex flex-col items-center h-dvh text-center justify-center gap-3 bg-[#0F1729] text-white'>
      <SimpleLogo />
      <LoginContainer />
      <Link href='/signup'>
        <p className='font-semibold text-sm'>회원가입</p>
      </Link>
    </main>
  );
};

export default LoginPage;
