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
      <div className="px-4 pt-8">
        <h1 className="text-[#151515] font-black text-6xl leading-[55px] tracking-normal">MODERN ART GALLERY</h1>
      </div>
    </main>
  );
}
