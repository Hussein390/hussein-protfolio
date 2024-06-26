import { authOptions } from "@/lib/auth"
import { getServerSession } from "next-auth"
import Image from "next/image"
import Btton from "./Btton"

export default async function page() {
  const session = await getServerSession(authOptions)
  const email = session?.user?.email
  return (
    <div className="mx-auto  my-4 border w-fit p-4 flex   relative">
      <div className="w-fit mx-auto">
        <Image
          src={session?.user?.image as string ?? '/assets/hussein.jpg'}
          height={100}
          width={100}
          alt=""
          className="rounded-full"
        />
      </div>
      <div className="px-2 ml-5">
        <h1 className="text-lg text-white font-semibold mb-4"><span className="text-slate-300 mr-1">Name:</span>{session?.user?.name ?? 'Hussein'}</h1>
        <h2 className="text-white font-semibold flex-wrap"><span className="text-slate-300 mr-1">Email:</span>{email?.replace(/@.*$/, "") ?? 'example'}</h2>
        <div className="w-fit ml-auto">
          <Btton />
        </div>
      </div>
    </div>
  )
}
