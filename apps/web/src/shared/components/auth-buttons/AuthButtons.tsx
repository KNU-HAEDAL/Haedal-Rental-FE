'use client';

import { useEffect, useState } from 'react';
import { Button } from '@workspace/ui/components';
import Link from 'next/link';
import { authStorage } from '@/shared';
import { TOKEN } from '@/features';

export const AuthButtons = () => {
  // TODO: 로그인 UI 완성 시 해당 로직 수정
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    const accessToken = authStorage.accessToken.get();
    if (accessToken !== null) {
      setIsLogin(true);
    }
  }, []);

  const onClickLogin = () => {
    setIsLogin(true);
    authStorage.accessToken.set(TOKEN.accessToken);
    authStorage.refreshToken.set(TOKEN.refreshToken);
  };

  const onClickLogout = () => {
    setIsLogin(false);
    authStorage.accessToken.set(null);
    authStorage.refreshToken.set(null);
  };

  return (
    <section className='flex gap-2 w-[550px] justify-end'>
      {isLogin ? (
        <div className='flex w-full items-center justify-between'>
          <p className='font-bold'>김해달님 반갑습니다.</p>
          <Button variant='sun' onClick={onClickLogout}>
            로그아웃
          </Button>
        </div>
      ) : (
        <>
          <Link href='/signup'>
            <Button variant='ghost'>회원가입</Button>
          </Link>
          <Link href='/login'>
            <Button variant='moon' onClick={onClickLogin}>
              로그인
            </Button>
          </Link>
        </>
      )}
    </section>
  );
};
