'use client'
import React, { useState } from 'react'
import { editItem } from "../_actions/blog";

export default function Eidt({data, itemId}: {data: string, itemId: string}) {
  const [isOpen, setIsOpen] = useState(true);
  const [content, setContent] = useState(data)
  const data1 = {
    itemId,
    content: content
  }
  function handleSave() {
    editItem(data1)
    setIsOpen(prev => prev = true)
  }
  return (
    <div  className="mb-6">
        {isOpen ?
        <p onDoubleClick={() => setIsOpen(prev => !prev)} className="pl-1 mb-8 text-slate-300 select-none">{data}</p>
        : <div className="">
          <textarea  className='w-full resize-none h-[300px] p-2 rounded mb-8 text-slate-300 bg-slate-600' value={content} onChange={e => setContent(e.target.value)}></textarea>
          <div className="flex gap-x-3">
            <button onClick={()=> setIsOpen(prev => prev = true)} className='p-1 w-20 rounded text-lg font-semibold text-slate-100 bg-red-500 hover:bg-red-600'>Cancel</button>
            <button onClick={handleSave} className='p-1 w-20 rounded text-lg font-semibold text-slate-100 bg-slate-500 hover:bg-slate-600'>Save</button>
          </div>
          </div> 
      }
      </div>
  )
}
