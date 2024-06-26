'use client'
import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import {FormData } from '../../../types/blog'
import { addBlog} from '../_actions/blog'
import { useRouter } from 'next/navigation'

export default function CreateArticle() {
  const router = useRouter()
  const [fromDate, setFromDate] = useState<FormData>({ title: '', content: '', auther: '', date: Date().slice(4, 16).toString() })
    
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.preventDefault()
    const { name, value } = e.target;
    setFromDate({...fromDate, [name]: value})
  }
  const handleSubmit = (e: FormEvent) => {

    e.preventDefault()
    addBlog(fromDate)
    setFromDate({ title: '', content: '', auther: '', date: '' })
    router.refresh()
  }
  return (
    <div className='max-w-[900px] mx-auto px-3 mt-9'>
      <h1 className="text-slate-100 font-semibold text-2xl pb-1 border-b-4 w-fit border-slate-500 mb-8">Create An Article</h1>
      <form onSubmit={e => handleSubmit(e)} className="w-fit mx-auto">
        <div className="mb-7">
          <input value={fromDate.title} onChange={handleChange} type="text" className="p-2 bg-slate-300 outline-none focus:outline-blue-500 font-semibold rounded text-slate-900" name='title' placeholder='Title'/>
        </div>
        <div className="mb-7">
          <input value={fromDate.auther} onChange={handleChange} type="text" className="p-2 bg-slate-300 outline-none focus:outline-blue-500 font-semibold rounded text-slate-900" name='auther' placeholder='Auther Name'/>
        </div>
        <div className="mb-5 ">
          <textarea value={fromDate.content} onChange={handleChange} name="content" className='bg-slate-300 rounded outline-none focus:outline-blue-600 text-black font-semibold p-2 ' cols={30} rows={10} placeholder='Content..'></textarea>
        </div>
        <button type='submit' className='bg-blue-500 text-slate-200 font-bold hover:text-slate-400 duration-150 float-end p-2 rounded'>Create</button>
      </form>
    </div>
  )
}
