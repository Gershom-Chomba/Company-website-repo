import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import profileImg from '@/public/company-logo.png';

const Logo = () => {
  return (
    <Link href="/" className="flex items-center text-dark space-x-2">
      <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 rounded-full overflow-hidden flex-shrink-0">
        <Image src={profileImg} alt="WorkBook" className="w-full h-full rounded-full object-cover" />
      </div>
      <span className="font-bold text-lg sm:text-xl md:text-2xl">WorkBook</span>
    </Link>
  );
};

export default Logo;
