'use client';

import { useForm } from 'react-hook-form';

type FormData = {
  id: string;
  password: string;
};

export const LoginContainer = () => {
  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm<FormData>({ mode: 'onChange' });

  const onSubmit = (data: FormData) => {
    // Todo: API 요청
  };

  const inputFields = [
    { name: 'id', label: '아이디', type: 'text' },
    { name: 'password', label: '비밀번호', type: 'password' },
  ];

  return (
    <div className='flex flex-col gap-8 bg-white py-6 rounded-xl text-black w-96'>
      <h1 className='font-semibold px-8 text-xl'>로그인</h1>
      <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-8'>
        <ul className='flex flex-col gap-3 px-8'>
          {inputFields.map(({ name, label, type }) => (
            <li key={name} className='flex flex-col gap-2 items-start'>
              <label className='text-sm font-semibold'>{label}</label>
              <input
                type={type}
                {...register(name as keyof FormData, { required: `${label}를 입력해주세요.` })}
                className='w-full text-sm py-2 px-3 rounded-lg border'
              />
            </li>
          ))}
        </ul>
        <div className='w-full px-8'>
          <button
            type='submit'
            disabled={!isValid}
            className={`w-full font-semibold text-sm rounded-lg py-2 px-4 border 
              ${!isValid ? 'bg-gray-200 text-gray-500 cursor-not-allowed' : 'bg-[#0F1729] text-white'}
            `}
          >
            로그인
          </button>
        </div>
      </form>
    </div>
  );
};
