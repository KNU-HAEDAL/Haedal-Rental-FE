'use client';

import { useState } from 'react';

export const LoginContainer = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const isDisabled = !id || !password;

  const inputFields = [
    { label: '아이디', type: 'text', value: id, onChange: setId },
    { label: '비밀번호', type: 'password', value: password, onChange: setPassword },
  ];

  // Todo: 폼 제출 - 실패 시 응답 보여주기

  return (
    <div className='flex flex-col gap-8 bg-white py-6 rounded-xl text-black w-96'>
      <h1 className='font-semibold px-8 text-xl'>로그인</h1>
      <form action='' className='flex flex-col gap-8'>
        <ul className='flex flex-col gap-3 px-8'>
          {inputFields.map(({ label, type, value, onChange }) => (
            <li key={label} className='flex flex-col gap-2 items-start'>
              <label className='text-sm font-semibold'>{label}</label>
              <input
                type={type}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className='w-full text-sm py-2 px-3 rounded-lg border'
              />
            </li>
          ))}
        </ul>
        <div className='w-full px-8'>
          <button
            type='submit'
            disabled={isDisabled}
            className={`w-full font-semibold text-sm rounded-lg py-2 px-4 border
              ${isDisabled ? 'bg-gray-200 text-gray-500 cursor-not-allowed' : 'bg-[#0F1729] text-white'}
            `}
          >
            로그인
          </button>
        </div>
      </form>
    </div>
  );
};
