import Image from "next/image";

export default async function Home() {

  return (
    <div className="flex justify-between flex-col lg:flex-row items-start pt-5 pb-3 ">
      <div className="flex  gap-x-8 md:gap-x-12 items-center">

        <div className="mt-14">
          <h1 className="pb-3 text-3xl text-slate-200">Self-Taught <span className="text-slate-50 font-semibold">Front-end</span>  Developer</h1>
          <p className="text-lg text-slate-300 text-pretty">I have started learning Front-end web development since 2023 now.</p>
          <p className="text-lg text-slate-300 text-pretty">I love to make well <span className="pb-1 font-bold border-b-2  text-yellow border-b-blue-500">designed</span>, <span className="pb-1 font-bold border-b-2 border-b-blue-500 text-green">interactive </span> and <span className="pb-1 font-bold border-b-2 border-b-blue-500 text-yellow1">user friendly </span> web pages</p>
        </div>
      </div>
      <div className="flex mx-auto gap-x-6 mt-9 lg:mt-0">
        <div className="mt-32">
          <Imagy url="/assets/vaporwave-background-5.webp" />
        </div>
        <div className="flex flex-col gap-y-5 mt-8">
          <Imagy url="/assets/vaporwave-background-1.webp" />
          <Imagy url="/assets/vaporwave-background-2.webp" />
        </div>
        <div className="flex flex-col gap-y-5 ">
          <Imagy url="/assets/vaporwave-background-3.webp" />
          <Imagy url="/assets/vaporwave-background-4.webp" />
        </div>

      </div>
    </div>
  );
}


function Imagy({ url }: { url: string }) {
  return (
    <Image
      src={url}
      alt=""
      width={180}
      height={64}
      className="rounded "
    />
  )
}
