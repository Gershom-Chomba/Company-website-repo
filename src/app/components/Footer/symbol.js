import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import symbolImg from '@/public/company-symbol.png';

const Elephant = () => {
  return (
    <Link href="/" className="flex items-center text-dark space-x-2">
      <div className="w-15 h-15 md:w-20 md:h-20 lg:w-25 lg:h-25 rounded overflow-hidden">
        <Image
          src={symbolImg}
          alt="WorkBook"
          width={160} // Adjusted for responsiveness
          height={160}
          className="object-contain"
        />
      </div>
    </Link>
  );
};

export default Elephant;

