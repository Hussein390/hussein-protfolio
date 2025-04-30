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
        <Link href={'/'} className="text-2xl text-green font-bold">Hussein Saleem</Link>
      </nav>
    </header>
  )
}
