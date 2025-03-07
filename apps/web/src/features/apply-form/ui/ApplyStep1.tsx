'use client';

import { useRouter } from 'next/navigation';
import { Button } from '@workspace/ui/components/button';

const Step1 = () => {
  const router = useRouter();

  return (
    <section className='rounded-lg overflow-hidden border border-haedal'>
      <header className='bg-haedal text-white p-6 text-center font-bold text-2xl tracking-tight'>
        물품 대여 안내
      </header>

      <div className='bg-background p-6'>
        <p className='text-foreground mb-8 text-lg font-bold leading-relaxed tracking-tight'>
          해달에서는 동아리 내의 공용 물품을 대여 장부 작성을 통해 무료로 대여하고 있습니다. 대여
          물품 관리를 위해 아래 사항을 꼭 지켜주세요.
        </p>

        <ul className='list-decimal list-inside text-foreground space-y-3'>
          <li className='text-lg font-semibold tracking-tight'>
            대여 가능 기간은 대여장부 작성일로부터{' '}
            <span className='text-destructive font-bold'>최대 일주일</span>입니다. 이후에는 반납 후
            다시 대여해주세요.
          </li>
          <li className='text-lg font-semibold tracking-tight'>
            물품 반납 시 반드시 반납 체크를 진행해 주세요. 누락 시 발생하는 모든 책임은 대여자에게
            있음을 알립니다.
          </li>
          <li className='text-lg font-semibold tracking-tight'>
            반납 기간이 지났을 경우 대여자에게 연락을 진행하며,{' '}
            <span className='text-destructive font-bold'>1회의 제재 횟수가 추가</span>됩니다.
          </li>
          <li className='text-lg font-semibold tracking-tight'>
            1회 이상 제재를 받을 경우{' '}
            <span className='text-destructive font-bold'>일주일간 물품 대여가 제한</span>됩니다.
          </li>
          <li className='text-lg font-semibold tracking-tight'>
            3회 이상 제재를 받을 경우{' '}
            <span className='text-destructive font-bold'>물품 대여가 영구적으로 제한</span>될 수
            있습니다.
          </li>
          <li className='text-lg font-semibold tracking-tight'>
            일부 물품의 경우 대여가 제한될 수 있습니다. 대여 가능 물품 목록은 아래 페이지에서 확인할
            수 있습니다.
          </li>
          <li className='text-lg font-semibold tracking-tight'>
            대여 물품의 원활한 관리를 위해 운영진은 대여자의 정보를 확인할 수 있습니다.
          </li>
        </ul>

        <div className='mt-8'>
          <div className='flex items-center justify-start gap-2'>
            <span className='text-foreground font-bold tracking-tight'>
              📌 대여가능 물품 확인 :
            </span>
            <Button
              variant='moon'
              size='lg'
              className='w-auto px-6 text-lg font-bold'
              onClick={() => router.push('/rental-items')}
            >
              대여 물품 목록 페이지
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Step1;
