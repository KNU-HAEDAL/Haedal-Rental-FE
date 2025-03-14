'use client';

import { useRouter } from 'next/navigation';
import { Button } from '@workspace/ui/components/button';

export const NoticeMessage = () => {
  const router = useRouter();

  return (
    <section className='w-[590px] rounded-lg overflow-hidden border border-gray-300 shadow-sm'>
      <header className='bg-haedal text-white p-3 text-center font-bold text-xl'>
        물품 대여 안내
      </header>

      <div className='bg-white p-6 text-left'>
        <p className='text-gray-800 leading-relaxed mb-5'>
          해달에서는 동아리 내의 공용 물품을 대여 장부 작성을 통해 무료로 대여하고 있습니다. 대여
          물품 관리를 위해 아래 사항을 꼭 지켜주세요.
        </p>

        <ol className='list-decimal list-outside text-gray-800 space-y-[1px] pl-4'>
          <li className='leading-relaxed pl-2 hanging-indent-6'>
            대여 가능 기간은 대여장부 작성일로부터
            <span className='text-red-500 font-bold'> 최대 일주일</span>입니다. 이후에는 반납 후
            다시 대여해주세요.
          </li>
          <li className='leading-relaxed pl-2 hanging-indent-6'>
            물품 반납 시 반드시 반납 체크를 진행해 주세요. 누락 시 발생하는 모든 책임은 대여자에게
            있음을 알립니다.
          </li>
          <li className='leading-relaxed pl-2 hanging-indent-6'>
            반납 기간이 지났을 경우 대여자에게 연락을 진행하며,
            <span className='text-red-500 font-bold'> 1회의 제재 횟수가 추가</span>됩니다.
          </li>
          <li className='leading-relaxed pl-2 hanging-indent-6'>
            1회 이상 제재를 받을 경우
            <span className='text-red-500 font-bold'> 일주일간 물품 대여가 제한</span>됩니다.
          </li>
          <li className='leading-relaxed pl-2 hanging-indent-6'>
            3회 이상 제재를 받을 경우
            <span className='text-red-500 font-bold'> 물품 대여가 영구적으로 제한</span>될 수
            있습니다.
          </li>
          <li className='leading-relaxed pl-2 hanging-indent-6'>
            일부 물품의 경우 대여가 제한될 수 있습니다. 대여 가능 물품 목록은 아래 페이지에서 확인할
            수 있습니다.
          </li>
          <li className='leading-relaxed pl-2 hanging-indent-6'>
            대여 물품의 원활한 관리를 위해 운영진은 대여자의 정보를 확인할 수 있습니다.
          </li>
        </ol>

        <div className='mt-6'>
          <div className='flex items-center justify-start gap-2'>
            <span className='text-gray-800 font-bold'>대여가능 물품 확인 :</span>
            <Button
              variant='moon'
              className='w-[150px] h-[35px] px-6 font-bold'
              onClick={() => router.push('/item-list')}
            >
              대여 물품 목록 페이지
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
