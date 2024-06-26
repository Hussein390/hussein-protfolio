'use client'
import { signOut } from 'next-auth/react'

export default function Btton() {
  return <button className="p-2 rounded bg-red-800 text-white hover:text-slate-300 mt-6 w-fit ml-auto" onClick={() => signOut()}>Sign Out</button>
}
