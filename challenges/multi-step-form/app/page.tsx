import Image from 'next/image';
import bgSidebarMobileSvg from '@/public/images/bg-sidebar-mobile.svg';

export default function Page() {
  return (
    <div className="relative">
      <Image
        src={bgSidebarMobileSvg}
        alt="Background"
        className="absolute -z-10 h-44 w-full object-cover lg:hidden"
      />
    </div>
  );
}
