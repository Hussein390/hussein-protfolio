'use client'
import Image from 'next/image';
import { useState } from 'react';
import { Download, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

function P({ text }: { text: string }) {
  return <span className="pb-[2px] font-bold text-[16px] border-b-2  border-[#03a9f4] text-[#74c0e2]">{text}</span>
}
function Imagy({ url, id }: { url: string, id?: string }) {
  return (
    <Image
      src={url}
      alt=""
      width={65}
      height={64}
      className="cursor-pointerrounded object-cover"
      id={id}
    />
  )
}
export default function Page() {
  const [src, setSrc] = useState('')
  const [activeDivs, setActiveDivs] = useState<boolean[]>([false, true, false, false]);

  const handleDivClick = (index: number) => {
    const newActiveDivs = activeDivs.map((_, i) => i === index);
    setActiveDivs(newActiveDivs);
    // Handle any other logic you need here
  };
  const color = 'border-2 border-[#03a9f4] bg-slate-900 bg-opacity-40'
  return (
    <div className="mt-12 mb-6 md:max-w-[900px] px-1">
      <div className="">
        <h1 className="text-slate-50 font-bold text-3xl  pb-2 border-b-4 border-slate-400 w-fit">About <span className="text-slate-400">Me</span></h1>
        <div className="">
          <p className="text-slate-300 mt-6 text-[16px] leading-8">One day I got tired of physical hard work {<P text='" I have had enough "' />}, so I started to think {`" Is there a way to change this miserable situation? "`} The answer definitely {<P text="Yes" />}.</p>

          <p className="text-slate-300 mt-6 text-[16px] leading-8">I like Tech in general, but how I will learn and I am a high school drop out? I found out that programming somehow does not required a certificate, sounds realiy cool, right? So I started my research on careers. I just want one that I like to do and improve me constantly.</p>

          <p className="text-slate-300 mt-6 text-[16px] leading-8">So each career has to pass through these three conditions:
          </p>
          <ul className="list-disc pl-8 border-l-4 border-slate-400 mt-2 ml-2">
            <li className="text-slate-50 my-3 font-semibold" >I like to do</li>
            <li className="text-slate-50 my-3 font-semibold">Improve me constantly</li>
            <li className="text-slate-50 my-3 font-semibold">Develop my creativity</li>
          </ul>
          <p className="text-slate-300 mt-6 text-[16px] leading-8">
            <P text="Front-end web development" /> was chosen. And I started my journey learning things setp by step until I have the abilty to make modern websites.
          </p>
        </div>
        <div className="w-[300px] mt-5 mx-auto">
          <Image
            src={src || '/assets/hussein.jpg'}
            width={400}
            height={300}
            className='rounded imgShadow'
            alt=''

          />
          <div className="mt-4 flex gap-x-3">
            <div className={`relative w-[65px] group `} onClick={() => handleDivClick(0)}>
              <span className={`cursor-pointer absolute top-0 left-0 w-full h-full group-hover:bg-black group-hover:bg-opacity-20 ${activeDivs[0] ? color : ''}`} onClick={(e: React.MouseEvent) => setSrc((e.target as HTMLSpanElement).nextElementSibling?.id || '')}></span>
              <Imagy id='/assets/hussein1.jpg' url='/assets/hussein1.jpg' />
            </div>
            <div className={`relative w-[65px] group `} onClick={() => handleDivClick(1)}>
              <span className={`cursor-pointer absolute top-0 left-0 w-full h-full group-hover:bg-black group-hover:bg-opacity-20 ${activeDivs[1] ? color : ''}`} onClick={(e: React.MouseEvent) => setSrc((e.target as HTMLSpanElement).nextElementSibling?.id || '')}></span>
              <Imagy id='/assets/hussein.jpg' url='/assets/hussein.jpg' />
            </div>
            <div className={`relative w-[65px] group `} onClick={() => handleDivClick(2)}>
              <span className={`cursor-pointer absolute top-0 left-0 w-full h-full group-hover:bg-black group-hover:bg-opacity-20 ${activeDivs[2] ? color : ''}`} onClick={(e: React.MouseEvent) => setSrc((e.target as HTMLSpanElement).nextElementSibling?.id || '')}></span>
              <Imagy id='/assets/hussein2.jpg' url='/assets/hussein2.jpg' />
            </div>
            <div className={`relative w-[65px] group`} onClick={() => handleDivClick(3)}>
              <span className={`cursor-pointer absolute top-0 left-0 w-full h-full group-hover:bg-black group-hover:bg-opacity-20 ${activeDivs[3] ? color : ''}`} onClick={(e: React.MouseEvent) => setSrc((e.target as HTMLSpanElement).nextElementSibling?.id || '')}></span>
              <Imagy id='/assets/hussein3jpg.jpg' url='/assets/hussein3jpg.jpg' />
            </div>
          </div>
        </div>
      </div>

      <div className="">
        <h1 className="text-slate-50 mt-12 font-bold text-3xl  pb-2 border-b-4 border-slate-400 w-fit">Skills</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-6 w-fit mx-auto mt-12">
          <div className="bg-slate-50 p-4 px-6 rounded">
            <p className="pb-2 flex justify-center items-center h-[100px]">
              <Imagy url='assets/next-js.svg' />
            </p>
            <h2 className='font-bold  text-lg  pt-2 border-t-4 border-t-slate-500'>Next Js</h2>
          </div>
          <div className="bg-slate-50 p-4 px-6 rounded">
            <p className="pb-2 flex justify-center items-center h-[100px]">
              <Imagy url='assets/react-2.svg' />
            </p>
            <h2 className='font-bold  text-lg  pt-2 border-t-4 border-t-slate-500'>React Js</h2>
          </div>
          <div className="bg-slate-50 p-4 px-6 rounded">
            <p className="pb-2 flex justify-center items-center h-[100px]">
              <Imagy url='assets/typescript.svg' />
            </p>
            <h2 className='font-bold  text-lg  pt-2 border-t-4 border-t-slate-500'>TypeScript</h2>
          </div>
          <div className="bg-slate-50 p-4 px-6 rounded">
            <p className="pb-2 flex justify-center items-center h-[100px]">
              <Imagy url='assets/html-1.svg' />
            </p>
            <h2 className='font-bold  text-lg  pt-2 border-t-4 border-t-slate-500'>HTML5</h2>
          </div>
          <div className="bg-slate-50 p-4 px-6 rounded">
            <p className="pb-2 flex justify-center items-center h-[100px]">
              <Imagy url='assets/tailwindcss.svg' />
            </p>
            <h2 className='font-bold  text-lg  pt-2 border-t-4 border-t-slate-500'>Tailwindcss</h2>
          </div>
          <div className="bg-slate-50 p-4 px-6 rounded">
            <p className="pb-2 flex justify-center items-center h-[100px]">
              <Imagy url='/assets/shadcn.png' />
            </p>
            <h2 className='font-bold  text-lg  pt-2 border-t-4 border-t-slate-500'>Shadcn-UI</h2>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <h1 className="text-slate-50 font-bold text-3xl  pb-2 border-b-4 border-slate-400 w-fit">Get In <span className="text-slate-400">Touch</span></h1>
        <p className="text-slate-300 my-5 leading-8">Get in touch for any reason, if you want to <P text='Discuss' /> or <P text='Work' />. I will be happy if you do that.</p>

        <footer className="w-full h-20 p-2 z-10 flex gap-4 md:gap-8 justify-center items-center">
          <Link
            target="_blank"
            href={"https://www.linkedin.com/in/hussein2004"}
            className="hover:bg-gray-100 text-slate-100 hover:text-black rounded-full p-4"
          >
            <Linkedin aria-label="LinkedIn Icon" />
          </Link>
          <Link
            target="_blank"
            download
            href={"/assets/my-resume.pdf"}
            className="hover:bg-gray-100 hover:text-black text-slate-100 rounded-full p-4"
          >
            <span className="text-fs-300 flex items-center gap-1 font-semibold">
              CV <Download aria-label="Download CV Icon" size={18} />
            </span>
          </Link>
          <Link
            href="mailto:hsssseeeen2002@gmail.com"
            className="hover:bg-gray-100 hover:text-black text-slate-100 rounded-full p-4"
          >
            <Mail aria-label="Mail Icon" />
          </Link>
        </footer>
      </div>
    </div>
  )
}
