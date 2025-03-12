import Image from 'next/image';
import Link from 'next/link';

export const SimpleLogo = () => {
  return (
    <Link href='/' className='absolute top-6'>
      <Image
        src='/logo/simple-logo.svg'
        alt='haedal'
        className='cursor-pointer'
        width={230}
        height={0}
      />
    </Link>
  );
};
