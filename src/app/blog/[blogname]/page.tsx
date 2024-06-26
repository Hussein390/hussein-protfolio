
import prisma from "@/db/db";
import Link from "next/link";
import Eidt from "../_components/Eidt";

async function getBlogs(id: number) {
  let idd = id.toString()
  const blogs = await prisma.blog.findUnique({ where: { id: idd } });
  return blogs;
}

export default async function Article({ params }: { params: { blogname: string } }) {
  const blogId = parseInt(params.blogname, 10); 
  const blogs = await getBlogs(blogId);
  const data = blogs!;
  return (
    <div className="max-w-[900px] mt-11">
      <h1 className="font-bold text-2xl text-slate-100 mb-12">{data.title}</h1>
      
      <Eidt data={data.content} itemId={params.blogname}/>
      <div className="flex justify-between mb-12">
        <span className="text-slate-300 font-semibold">Author: <span className="text-slate-100 text-sm">{data.auther}</span></span>
        <span className="text-slate-300 font-semibold">Published: <span className="text-slate-100 text-sm">{data.date}</span></span>
      </div>

      <Link href="/blog" className="fixed bottom-5 right-3 p-2 text-slate-50 bg-blue-500 rounded font-semibold hover:bg-blue-600">Articles</Link>
    </div>
  );
}
