import Socials from "@/components/Socials";
import { outfit } from "./fonts";
import { Image } from "@nextui-org/image";
import Link from "next/link"

export default function Home() {
  return (
    <>
      <main className="pb-[120px]">
        <Image
          src={"/mobile/image-hero@2x.jpg"}
          alt="hero image"
          width={750}
          height={480}
        />
        <div className="px-4 pt-8 pb-[120px] flex flex-col gap-8">
          <h1 className="text-[#151515] font-black text-6xl leading-[55px] tracking-normal">MODERN<br /> ART GALLERY</h1>
          <p className={`${outfit.className} text-[##444444] text-lg`}>The arts in the collection of the Modern Art Gallery all started from a spark of inspiration. Will these pieces inspire you? Visit us and find out.</p>
          <Link href={"/location"} className="hover:cursor-pointer">
            <button className="flex h-full">
              <span className="bg-[#151515] px-8 py-6 text-white">OUR LOCATION</span>
              <span className="bg-[#D5966C] p-6">
                <svg width="10" height="24" xmlns="http://www.w3.org/2000/svg"><path stroke="#FFF" fill="none" d="m1 0 8 12-8 12" /></svg>
              </span>
            </button>
          </Link>
        </div>

        <div className="px-4">
          <Image
            src={"/mobile/image-grid-1@2x.jpg"}
            alt="hero image"
            width={686}
            height={640}
            className="pb-8"
          />
          <h2 className="text-[#151515] pb-[21px] font-black text-[50px] leading-[45px] uppercase">Your Day<br /> at the Gallery</h2>
          <p className={`${outfit.className} text-[#444444] text-lg`}>Wander through our distinct collections and find new insights about our artists. Dive into the details of their creative process.</p>
          <Image
            src={"/mobile/image-grid-2@2x.jpg"}
            alt="hero image"
            width={686}
            height={960}
            className="pt-8 pb-4"
          />
          <Image
            src={"/mobile/image-grid-3@2x.jpg"}
            alt="art gallery"
            width={686}
            height={400}
            className="pb-4"
          />
          <div className="bg-[#151515] text-white px-6 py-12">
            <h2 className="pb-[21px] font-black text-[50px] leading-[45px] uppercase">COME &amp; BE INSPIRED</h2>
            <p className={`${outfit.className} text-lg`}>{"We’re excited to welcome you to our gallery and see how our collections influence you."}</p>
          </div>
        </div>

      </main>
      <footer className="bg-[#151515] text-[#fff] px-8 py-12 sm:px-10 sm:py-14">
        <div className='flex flex-col sm:flex-row items-start justify-between gap-[38px] max-w-[1110px] w-full mx-auto'>
          <div className='flex flex-col sm:flex-row gap-[38px] sm:gap-[65px] lg:gap-[140px]'>
            <Image
              src={"/logo-light.svg"}
              alt="logo footer"
              width={111}
              height={40}
              className=""
            />
            <p className={`${outfit.className} sm:max-w-[281px] md:max-w-[430px] w-full md:text-lg`}>The Modern Art Gallery is free to all visitors and open seven days a week from 8am to 9pm. Find us at 99 King Street, Newport, USA.</p>
          </div>
          <Socials theme='#fff' />
        </div>
      </footer>
    </>
  );
}
