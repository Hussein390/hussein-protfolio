'use server'
import prisma from "@/db/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export type BlogProps={
  title: string,
  content: string,
  auther: string,
  date: string
}

export async function addBlog({title, content, auther, date}: BlogProps) {
 const blog =  await prisma.blog.create({
    data: {
      title: title,
      content: content,
      auther: auther,
      date: date
  }
 })
  revalidatePath("/")
  revalidatePath("/blog")
  redirect('/blog')
  return blog
}
export async function deleteBlog(id: string): Promise<void> {
  
  try {
    await prisma.blog.delete({
      where: { id: id }
    });
    console.log(`Blog with ID ${id} deleted successfully.`);
  } catch (error) {
    console.error(`Error deleting blog with ID ${id}:`, error);
    throw error;
  }
}

interface EidtProps {
  itemId: string,
  content: string
}
export async function editItem({itemId, content}: EidtProps) {
  try {
    // Fetch the item from the database
    const item = await prisma.blog.findUnique({
      where: { id: itemId },
    });

    if (!item) {
      throw new Error('Item not found');
    }

    // Update the properties of the item
    const updatedItem = await prisma.blog.update({
      where: { id: itemId },
      data: {
        content: content
      }
    });

    return updatedItem;
  } catch (error) {
    console.error('Error editing item:', error);
    throw error;
  } finally {
    revalidatePath("/")
    revalidatePath("/blog")
    await prisma.$disconnect();
  }
}

// create comment

// export async function addCommet({text, name}: {text: string, name: string}) {
//  const comment =  await prisma.comment.create({
//     data: {
//      text: text,
//      name: name,

//   }
//  })
//   revalidatePath("/")
//   revalidatePath("/blog")
  
//   return comment
// }