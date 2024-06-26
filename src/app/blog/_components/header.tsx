import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <header className=" mt-5 relative rounded bg-slate-700 ">
      <nav className="flex  items-center justify-between container py-2 ">
        <h1 className="text-2xl md:text-4xl text-slate-200 font-bold">Blog</h1>
        <ul className="items-center gap-x-5 flex">
          <div className="relative group">
            <Link className="text-lg text-slate-200 font-semibold duration-150 hover:text-slate-400" href={'/blog'}>Articles</Link>
          </div>
          <div className="relative group">
            <Link className="text-lg text-slate-200 font-semibold duration-150 hover:text-slate-400" href={'/blog/create'}>Create</Link>
          </div>
        </ul>
      </nav>
    </header>
  )
}
