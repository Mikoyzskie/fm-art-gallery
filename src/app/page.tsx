import { outfit } from "./fonts";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Image
        src={"/mobile/image-hero@2x.jpg"}
        alt="hero image"
        width={750}
        height={480}
      />
      <div className="px-4 pt-8 pb-[120px] flex flex-col gap-8">
        <h1 className="text-[#151515] font-black text-6xl leading-[55px] tracking-normal">MODERN<br /> ART GALLERY</h1>
        <p className={`${outfit.className} text-[##444444] text-lg`}>The arts in the collection of the Modern Art Gallery all started from a spark of inspiration. Will these pieces inspire you? Visit us and find out.</p>
        <button className="flex h-full">
          <span className="bg-[#151515] px-8 py-6 text-white">OUR LOCATION</span>
          <span className="bg-[#D5966C] p-6">
            <svg width="10" height="24" xmlns="http://www.w3.org/2000/svg"><path stroke="#FFF" fill="none" d="m1 0 8 12-8 12" /></svg>
          </span>
        </button>
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
        <p className={`${outfit.className} text-[##444444] text-lg`}>Wander through our distinct collections and find new insights about our artists. Dive into the details of their creative process.</p>
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
        />
      </div>

    </main>
  );
}
