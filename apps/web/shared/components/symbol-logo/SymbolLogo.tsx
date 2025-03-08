import Image from 'next/image';
import Link from 'next/link';

export const SymbolLogo = () => {
  return (
    <Link href='/'>
      <Image
        src='/logo/symbol-logo.png'
        alt='logo'
        className='cursor-pointer'
        width={230}
        height={139}
      />
    </Link>
  );
};
