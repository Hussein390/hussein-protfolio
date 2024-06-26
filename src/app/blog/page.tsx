
import Link from "next/link";
import Header from "./_components/header";
import prisma from "@/db/db";
import { DeleteBtn } from "./_components/Button";

async function getBlogs() {
  return await prisma.blog.findMany();
}


export default async function Blog() {
  const blogs = await getBlogs()
  return (
    <div>
      <Header />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-12  gap-y-9 sm:gap-4">
        {blogs.length > 0 ? blogs.map((item, id) => (
          <div className="mx-auto  border-2 group min-w-60 max-w-80 transition-colors duration-300 hover:border-[#236197] border-[#57b6cb] p-3 cursor-pointer  relative" key={id}>
              <DeleteBtn id={item.id}/>
          <Link href={`/blog/${item.id}`}   >
            <h1 className="font-bold text-slate-100 mb-5  group-hover:text-slate-300 text-xl">{item.title}</h1>
            <p className="mb-4 text-slate-300">{item.content.length > 30? `${item.content.slice(0, 30)}. .`: item.content}</p>
            <div className="flex justify-between items-center">
              <span className="text-slate-100 font-semibold text-sm">{ item.auther}</span>
              <span className="text-slate-100 font-semibold text-sm">{item.date}</span>
            </div>
          </Link>
          </div>

        )): <h1 className="text-slate-200 text-xl font-bold">No Articles to display</h1>}
      </div>
    </div>
  );
}

