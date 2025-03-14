'use client';

import { useRouter } from 'next/navigation';

export const SubmitMessage = () => {
  const router = useRouter();

  return (
    <section className='w-[590px] rounded-lg overflow-hidden border border-gray-300'>
      <header className='bg-haedal text-white p-3 text-center font-bold text-xl mb-3'>
        물품 대여 장부
      </header>

      <div className='bg-white p-2'>
        <p className='text-gray-800 text-center font-medium leading-relaxed'>
          물품 대여 장부가 정상적으로 제출되었습니다.
        </p>
        <p className='text-gray-800 text-center leading-relaxed mb-6'>
          원활한 물품 대여를 위해 <span className='font-bold'>반납 기한을 준수</span>해주세요.
        </p>

        <p className='text-gray-800 text-center leading-relaxed mb-6'>
          대여한 물품은 해달의 소중한 재산입니다. 2차 공유 및 파손을 자제해주세요.
        </p>

        <p className='text-gray-800 text-center leading-relaxed mb-3'>
          물품 대여 관련 문의는 해구르르에게 개인적으로 연락해주시면 감사하겠습니다.
        </p>
      </div>
    </section>
  );
};
