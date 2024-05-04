import React from 'react'
import { outfit } from "@/app/fonts";
import { Image } from "@nextui-org/image";
import Socials from '@/components/Socials';
import Link from 'next/link'

export default function page() {
  return (
    <>
      <div className='relative'>
        <Image
          src={"/mobile/image-map@2x.png"}
          alt='location map'
          height={1100}
          width={750}
          className='sm:hidden block'
        />
        <Image
          src={"/tablet/image-map@2x.png"}
          alt='location map'
          height={1200}
          width={1536}
          className='sm:block hidden lg:hidden'
        />
        <Image
          src={"/desktop/image-map@2x.png"}
          alt='location map'
          height={1200}
          width={2880}
          className='lg:block hidden h-[600px] object-cover w-full'
        />
        <div className='absolute inset-0'>
          <div className='max-w-[1110px] w-full mx-auto'>
            <Link href={"/"} className='hover:cursor-pointer'>
              <button className="flex h-full">
                <span className="bg-[#D5966C] p-6">
                  <svg width="10" height="24" xmlns="http://www.w3.org/2000/svg"><path stroke="#FFF" fill="none" d="M9 24 1 12 9 0" /></svg>
                </span>
                <span className="bg-[#151515] px-[30px] leading-6 py-6 text-white text-[20px] tracking-[3.64px]">BACK TO HOME</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-[#151515]">
        <div className='flex flex-col gap-12 px-4 sm:px-10 lg:px-0 pt-12 pb-14 sm:py-[84px] text-white sm:flex-row sm:gap-[68px] max-w-[1110px] w-full justify-between mx-auto'>
          <h1 className='text-[50px] leading-[45px] sm:text-[55px] sm:leading-[50px] md:text-[70px] md:leading-[70px]'>OUR<br className='sm:block contents' /> LOCATION</h1>
          <div className='flex flex-col gap-5 sm:max-w-[445px] lg:max-w-[540px] w-full'>
            <h3 className='text-[#D5966C] text-[32px] leading-8 uppercase'>99 King Street</h3>
            <div className={`${outfit.className} flex flex-col gap-5 text-lg lg:text-[22px] lg:leading-8`}>
              <p>Newport<br />RI 02840<br />United States of America</p>
              <p>
                Our newly opened gallery is located near the Edward King House on 99 King Street, the Modern Art Gallery is free to all visitors and open seven days a week from 8am to 9pm.
              </p>
            </div>
          </div>
        </div>
      </div>
      <footer className="bg-[#D5966C] text-[#151515] px-8 py-12 sm:px-10 sm:py-14">
        <div className='flex flex-col sm:flex-row items-start justify-between gap-[38px] max-w-[1110px] w-full mx-auto'>
          <div className='flex flex-col sm:flex-row gap-[38px] sm:gap-[65px] lg:gap-[140px]'>
            <Image
              src={"/logo-dark.svg"}
              alt="logo footer"
              width={111}
              height={40}
              className=""
            />
            <p className={`${outfit.className} sm:max-w-[281px] md:max-w-[430px] w-full md:text-lg`}>The Modern Art Gallery is free to all visitors and open seven days a week from 8am to 9pm. Find us at 99 King Street, Newport, USA.</p>
          </div>
          <Socials theme='#151515' />
        </div>
      </footer>
    </>
  )
}
