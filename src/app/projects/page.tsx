import Link from "next/link";
import Image from "next/image";
import { projects } from "../_components/data"
import { FaLink } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
export default async function page() {
  return (
    <div className="py-8 pl-1 ">
      <div className="">
        <h1 className="text-slate-50 font-bold text-2xl md:text-3xl  pb-2 border-b-4 border-slate-400 w-fit">Projects</h1>
        <p className="text-slate-300 mt-2 text-[16px]">Here are some of the <span className="text-yellow1 font-bold">Projects</span> that I built by myself or customers request</p>
      </div>
      <div className="">
        <h1 className="mt-5  text-2xl text-green font-semibold">Profional</h1>
        <div className="flex md:block flex-col justify-center items-center ml-6">
          <div className="grid grid-cols-1 sm:grid-cols-2   lg:grid-cols-3 mt-8 gap-8">

            {projects[0].profional?.map((item, id) => {
              return (
                <div key={id} className=" p-1 max-w-72 rounded border-2 border-[#57b6cb] relative">
                  <Link target="_blank" href={item.liveUrl} className="absolute top-2 group right-2"><FaLink className="text-2xl cursor-pointer text-blue-400  hover:text-blue-500 duration-100" /> <span className="absolute -top-11 opacity-0 text-sm text-nowrap transition-all duration-300 group-hover:opacity-100 bg-slate-500 p-1 rounded text-slate-50 font-semibold -right-3">Site Live</span></Link>
                  <Link target="_blank" href={item.gitUrl} className="absolute top-2 group left-2"><FaGithub className="text-2xl cursor-pointer  hover:text-slate-500 duration-100" /> <span className="absolute -top-11 opacity-0 text-sm text-nowrap transition-all duration-300 group-hover:opacity-100 bg-slate-500 p-1 rounded text-slate-50 font-semibold -left-3">Source Code</span></Link>
                  <Image
                    src={item.img}
                    width={297}
                    height={140}
                    alt=''
                    className="rounded object-cover"
                  />
                  <h1 className="text-slate-200 font-bold mt-2 pb-1 border-b-2 w-fit ml-2 text-lg">{item.proName}</h1>
                  <p className="text-slate-300 ml-2 my-3">{item.descaription}</p>
                  <div className="flex justify-end flex-col">
                    <div className="bg-gradient-to-r from-slate-600 to-[#122265b0] p-2 rounded max-w-full flex flex-wrap m-2 ">{item.tags.map(tag => <span key={id} className="p-1 m-1 text-sm rounded text-slate-200 font-semibold text-center bg-slate-500 ">{tag}</span>)}</div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
      <div className="">
        <h1 className="mt-5 text-2xl text-green font-semibold">Porsonal</h1>
        <div className="flex md:block flex-col justify-center items-center ml-6">
          <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 mt-8 gap-8">

            {projects[1].porsinal?.map((item, id) => {
              return (
                <div key={id} className="p-1 max-w-72 rounded border-2 border-[#57b6cb] relative">
                  <Link target="_blank" href={item.liveUrl} className="absolute top-2 group right-2"><FaLink className="text-2xl cursor-pointer text-slate-300  hover:text-blue-500 duration-100" /> <span className="absolute -top-11 opacity-0 text-sm text-nowrap transition-all duration-300 group-hover:opacity-100 bg-slate-500 p-1 rounded text-slate-50 font-semibold -right-3">Site Live</span></Link>
                  <Link target="_blank" href={item.gitUrl} className="absolute top-2 group left-2"><FaGithub className="text-2xl cursor-pointer text-slate-200  hover:text-slate-500 duration-100" /> <span className="absolute -top-11 opacity-0 text-sm text-nowrap transition-all duration-300 group-hover:opacity-100 bg-slate-500 p-1 rounded text-slate-50 font-semibold -left-3">Source Code</span></Link>
                  <Image
                    src={item.img}
                    width={297}
                    height={140}
                    alt=''
                    className="rounded object-cover"
                  />
                  <h1 className="text-slate-200 font-bold mt-2 pb-1 border-b-2 w-fit ml-2">{item.proName}</h1>
                  <p className="text-slate-300 ml-2 my-3">{item.descaription}</p>
                  <div className="bg-gradient-to-r from-slate-600 to-[#122265b0] p-2 rounded max-w-full flex flex-wrap m-2">{item.tags.map(tag => <span key={id} className="p-1 m-1 text-sm rounded text-slate-100 font-semibold text-center bg-slate-500 ">{tag}</span>)}</div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
