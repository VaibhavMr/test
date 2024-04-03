import React from 'react';
import Image from 'next/image';
// import Logo from '@/Assets/Logo.png'
// import Arrow from '@/Assets/Arrow.png'

import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="fixed w-full md:h-20 shadow-xl">
      <div className='flex justify-between items-center h-full w-full md:px-10  px-6 py-4 bg-black'>
        <Link href='/'>
        <Image
          src="/Logo.png"
          width="205"
          height="75"
          className="cursor-pointer"
          priority
        />
        </Link>
        <div className='text-white hidden sm:flex'>
             <ul className="flex">
                <li className='ml-10 hover:border-b list-none'>
                <a href="/">Home</a>
                </li>
                <li className='ml-10  hover:border-b list-none'>
                 <a href="/about">About us</a>
                </li>
                 <li className='ml-10 hover:border-b list-none'>
                  <a href="/contact">Contact us</a>
                </li>
                 </ul>
                </div>
                <button class="bg-amber-500 text-white md:py-3 py-3 md:px-10 px-5 rounded-tr-lg flex items-center space-x-4 ">
                      <div className='mx-1 text-black text-base -mr-2 ' >
                        Work with us
                      </div>
                        <Image
                        src="/Arrow.png"
                        className="cursor-pointer"
                        width={20}
                        height={10}
                        />  
                </button>
      </div>
    </nav>
  );
};

export default Navbar;