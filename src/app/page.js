import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen w-full bg-[#2B2D42] pt-[145px]">
      <div className="flex flex-row pt-[70px] px-[360px] pb-[120px]">
        <Image
          className="h-auto w-auto rounded-[40px]"
          src="/rect.png"
          alt="Landing"
          width={580}
          height={702}
        />
        <div className="flex flex-col w-[995px] gap-5">
          <p className="pt-[123.5px] text-[88px] font-bold leading-[94px] text-[white] ml-[-300px]">
            Turn Your Website <br /> Into Your Best Sales <br />
            Person
          </p>
          <p className="text-[22px] leading-[33px] font-light text-[#F7F7FF] ">
            Triple your sales with a pixel-perfect website. <br />
            At SmartSite Studio, we don’t just design and write code, <br />
            we build a revenue-driving machine for your business.
          </p>
          <div className="gap-5">
            <button className="bg-[#FF632C] rounded-[30px] w-[200px] h-[60px] text-[white]">
              Talk to us
            </button>
            <button className="rounded-[30px] border-[1px] border-[#0083FE] w-[200px] h-[60px] text-[white]">
              See Portfolio
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
