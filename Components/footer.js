import React from 'react'
import Image from 'next/image';

function Footer() {
  return (
    <>
      <footer class="bg-black text-white md:py-12 py-2">
        <div className='flex md:items-left items-center md:flex-row flex-col max-w-7xl mx-auto mb-10 justify-between px-10 py-10 border-b-2 border-gray-100'>
          <div className='md:text-4xl text-2xl  '>
            Make your dreams a <span className='text-amber-500'>reality</span>
          </div>
          <button class="bg-amber-500 text-white md:py-3 py-3 md:px-10 px-5 rounded-tr-lg flex items-center w-44  md:w-52 space-x-4 md:mt-0 mt-5 ">
            <div className='mx-1 text-black text-base -mr-2' >
              Work with us
            </div>
            <Image
              src="/Arrow.png"
              className="cursor-pointer"
              width={20}
              height={20}
            />
          </button>
        </div>
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:place-items-start place-items-center justify-between mt-10">
          <div class="mb-8">
            <Image
              src="/Logo.png"
              width="205"
              height="75"
              className="cursor-pointer"
              priority
            />
            <div className='flex md:gap-5 gap-7 mt-5 justify-center '>
              <Image
                src="/facebook.png"
                width="10"
                height="10"
                className="cursor-pointer"
                priority
              />
              <Image
                src="/twitter.png"
                width="20"
                height="10"
                className="cursor-pointer"
                priority
              />
              <Image
                src="/instagram.png"
                width="20"
                height="10"
                className="cursor-pointer"
                priority
              />
            </div>
          </div>


          <div class="mb-8  flex items-center flex-col ">
            <h3 class="text-xl font-semibold mb-4">Services</h3>
            <ul class="list-none">
              <li><a href="#" class="hover:text-gray-400">Service 1</a></li>
              <li><a href="#" class="hover:text-gray-400">Service 2</a></li>
              <li><a href="#" class="hover:text-gray-400">Service 3</a></li>
              <li><a href="#" class="hover:text-gray-400">Service 4</a></li>
            </ul>
          </div>


          <div class="mb-8  flex items-center flex-col ">
            <h3 class="text-xl font-semibold mb-4">Services</h3>
            <ul class="list-none">
              <li><a href="#" class="hover:text-gray-400">Service 1</a></li>
              <li><a href="#" class="hover:text-gray-400">Service 2</a></li>
              <li><a href="#" class="hover:text-gray-400">Service 3</a></li>
              <li><a href="#" class="hover:text-gray-400">Service 4</a></li>
            </ul>
          </div>

          <div class="mb-8  flex items-center flex-col justify-center">
            <h3 class="text-xl font-semibold mb-4">Services</h3>
            <ul class="list-none">
              <li><a href="#" class="hover:text-gray-400">Service 1</a></li>
              <li><a href="#" class="hover:text-gray-400">Service 2</a></li>
              <li><a href="#" class="hover:text-gray-400">Service 3</a></li>
              <li><a href="#" class="hover:text-gray-400">Service 4</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
