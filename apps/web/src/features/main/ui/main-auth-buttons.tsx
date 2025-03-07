'use client';

import { useEffect, useState } from 'react';
import { Button } from '@workspace/ui/components';
import Link from 'next/link';

const MainAuthButtons = () => {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    const storedLoginState = sessionStorage.getItem('isLogin');
    if (storedLoginState === 'true') {
      setIsLogin(true);
    }
  }, []);

  const onClickLogin = () => {
    setIsLogin(true);
    sessionStorage.setItem('isLogin', 'true');
  };

  const onClickLogout = () => {
    setIsLogin(false);
    sessionStorage.removeItem('isLogin');
  };

  return (
    <div className='flex gap-2 w-[550px] justify-end'>
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
    </div>
  );
};

export default MainAuthButtons;
