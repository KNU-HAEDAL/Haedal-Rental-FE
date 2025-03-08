import { MainContainer } from '@/features';
import { SymbolLogo, AuthButtons } from '@/shared';

export default function Page() {
  return (
    <div className='flex flex-col items-center h-dvh text-center justify-center gap-3'>
      <SymbolLogo />
      <AuthButtons />
      <MainContainer />
    </div>
  );
}
