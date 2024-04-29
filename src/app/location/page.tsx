import React from 'react'
import { outfit } from "@/app/fonts";
import Image from "next/image"

export default function page() {
  return (
    <>
      <div className='relative'>
        <Image
          src={"/mobile/image-map@2x.png"}
          alt='location map'
          height={1100}
          width={750}
        />
        <div className='absolute top-0 left-0'>
          <button className="flex h-full">
            <span className="bg-[#D5966C] p-6">
              <svg width="10" height="24" xmlns="http://www.w3.org/2000/svg"><path stroke="#FFF" fill="none" d="M9 24 1 12 9 0" /></svg>
            </span>
            <span className="bg-[#151515] px-[30px] leading-6 py-6 text-white text-[20px] tracking-[3.64px]">BACK TO HOME</span>
          </button>
        </div>
      </div>
      <div className='bg-[#151515] px-4 pt-12 pb-14 text-white flex flex-col gap-12'>
        <h1 className='text-[50px] leading-[45px] '>OUR LOCATION</h1>
        <div className='flex flex-col gap-5'>
          <h3 className='text-[#D5966C] text-[32px] leading-8 uppercase'>99 King Street</h3>
          <div>
            <p className={`${outfit.className}`}>Newport<br />RI 02840<br />United States of America</p>
          </div>
        </div>
      </div>
      <footer className="bg-[#D5966C] text-[#151515] px-8 py-12">
        <Image
          src={"/logo-dark.svg"}
          alt="logo footer"
          width={111}
          height={40}
          className="pb-[38px]"
        />
        <p className={`${outfit.className} pb-[38px]`}>The Modern Art Gallery is free to all visitors and open seven days a week from 8am to 9pm. Find us at 99 King Street, Newport, USA.</p>
        <div className="flex gap-5 invert">
          <Image
            src={"/icon-facebook.svg"}
            alt="facebook icon"
            width={20}
            height={20}
          />
          <Image
            src={"/icon-instagram.svg"}
            alt="instagram icon"
            width={20}
            height={20}
          />
          <Image
            src={"/icon-twitter.svg"}
            alt="twitter icon"
            width={20}
            height={20}
          />
        </div>
      </footer>
    </>
  )
}
