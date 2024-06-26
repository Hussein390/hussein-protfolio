import fs from 'fs'
import matter from 'gray-matter'

export default function getBlogsData(basePath: string) {
    const folder = basePath + '/'
    const files = fs.readdirSync(folder)
    const markdownBlogs = files.filter(file => file.endsWith('.md'))

    // get the file data
    const blogs = markdownBlogs.map((filename) => {
        const fileContents = fs.readFileSync(`${basePath}/${filename}`, 'utf8')
        const matterResult = matter(fileContents)
        return {
            title: matterResult.data.title,
            id: matterResult.data.id,
            date: matterResult.data.date,
            content: matterResult.data.content,
            author: matterResult.data.author,
            slug: filename.replace('.md', '')
        }
    })
    return blogs
}