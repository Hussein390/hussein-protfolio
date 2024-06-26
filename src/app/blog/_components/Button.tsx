'use client'
import { useRouter } from "next/navigation"
import { deleteBlog } from "../_actions/blog"

export function DeleteBtn({ id }: { id: string }) {
  const router = useRouter()
  return <button onClick={() => {
    deleteBlog(id)
    router.refresh()
  }} className="text-slate-50 mt-3 hover:bg-red-500 absolute -top-4 -right-2 bg-slate-600 rounded p-1 size-8">X</button> 
}