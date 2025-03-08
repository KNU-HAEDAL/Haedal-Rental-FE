import { NAVIGATE_BUTTONS_DATA } from '../model';
import Image from 'next/image';
import Link from 'next/link';

export const MainContainer = () => {
  return (
    <section className='flex flex-col items-center w-[550px] h-[450px] gap-5 border border-gray-200'>
      <div className='w-full bg-haedal py-3'>
        <p className='text-white text-xl font-bold'>물품 대여 장부 서비스</p>
      </div>
      <div className='text-start mx-5'>
        <p>해달 동아리방 물품 대여 서비스 입니다.</p>
        <p>해달 물품은 해달 동아리원이라면 대여 장부 작성 후 누구나 대여 가능합니다.</p>
      </div>
      <div className='flex justify-center items-center w-full h-full'>
        <div className='grid grid-cols-2 gap-4 place-items-center place-content-center w-[375px] h-auto'>
          {NAVIGATE_BUTTONS_DATA.map((data) => (
            <Link key={data.key} href={data.navigateTo}>
              <div
                className='w-[175px] h-[125px] flex flex-col cursor-pointer items-center py-2 border border-gray-200 rounded-md shadow-md hover:shadow-[5px_5px_20px_0px_rgba(0,0,0,0.10)] 
              hover:-translate-y-1 transition-all ease-in-out'
              >
                <div className='flex-grow flex items-center'>
                  <Image src={data.icon} alt={data.title} width={60} height={50} />
                </div>
                <p className='font-bold'>{data.title}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

