'use client'
import Link from "next/link";
import { FcAbout } from "react-icons/fc";
import { GrProjects } from "react-icons/gr";
import { IoMdHome } from "react-icons/io";
import { MdOutlineMenu } from "react-icons/md";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { useState } from "react";
export default function Header() {
  const [open, setOpen] = useState(false)

  return (

    <header className={`z-20   bg-[#1332982e]`}>
      <nav className="flex  items justify-between px-4 container py-2 ">
        <Link href={'/'} className="text-2xl md:text-4xl text-green font-bold">Hussein Saleem</Link>
        <ul className="items-center gap-x-5 hidden md:flex">
          <div className="relative group">
            <Link className="text-lg text-slate-200 font-semibold duration-150 hover:text-slate-400" href={'/'}>Home</Link>
            <span className="absolute p-[2px] rounded-full bg-slate-100 -bottom-8 left-3 hidden group-hover:block "><IoMdHome className="text-2xl" /></span>
          </div>
          <div className="relative group">
            <Link className="text-lg text-slate-200 font-semibold duration-150 hover:text-slate-400" href={'/projects'}>Project</Link>
            <span className="absolute p-[2px] rounded-full bg-slate-100 -bottom-8 left-3 hidden group-hover:block "><GrProjects className="text-2xl" /></span>
          </div>
          <div className="relative group">
            <Link className="text-lg text-slate-200 font-semibold duration-150 hover:text-slate-400" href={'/about'}>About</Link>
            <span className="absolute p-[2px] rounded-full bg-slate-100 -bottom-8 left-3 hidden group-hover:block "><FcAbout className="text-2xl" /></span>
          </div>
        </ul>
        <div className="block md:hidden  ">
          <MdOutlineMenu onClick={() => setOpen(prev => !prev)} className=" p-1 hover:text-black rounded-full  duration-150 hover:bg-slate-100 cursor-pointer text-4xl text-cyan-50" />
          {open && <ul className={`transition-all duration-100 w-44 absolute ${open ? 'translate-x-0' : 'translate-x-44'} top-0 right-0 min-h-screen flex flex-col gap-y-5 bg-black z-40 bg-opacity-90  p-3`}>
            <div className="flex justify-between items-center">
              <IoMdCloseCircleOutline onClick={() => setOpen(prev => prev = false)} className="text-slate-400 hover:text-red-500 duration-150 float-end text-3xl  mt-1 cursor-pointer" />
            </div>
            <Link onClick={() => setOpen(prev => prev = false)} className="text-lg p-2 rounded text-slate-200 hover:bg-slate-300 font-semibold duration-150 hover:text-slate-700" href={'/'}>Home <IoMdHome className="text-2xl ml-4 inline" /></Link>
            <Link onClick={() => setOpen(prev => prev = false)} className="text-lg p-2 rounded text-slate-200 hover:bg-slate-300 font-semibold duration-150 hover:text-slate-700" href={'/projects'}>Projects <GrProjects className="text-2xl ml-4 inline" /></Link>
            <Link onClick={() => setOpen(prev => prev = false)} className="text-lg p-2 rounded text-slate-200 hover:bg-slate-300 font-semibold duration-150 hover:text-slate-700" href={'/about'}>About<FcAbout className="text-2xl ml-4 inline" /></Link>
          </ul>}
        </div>
      </nav>
    </header>
  )
}
