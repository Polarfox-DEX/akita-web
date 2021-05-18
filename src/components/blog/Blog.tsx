import { Post } from './Post'
import posts from './posts.json'

export function Blog() {
  return (
    <section id="news" className="container px-5 mx-auto mt-24">
      <h1 className="mb-4">Latest News</h1>
      <p>AKITA INU 秋田犬 最新情報.</p>
      <div className="flex flex-wrap pt-12">
        {posts.map((post) => (
          <Post key={post.title} {...post}></Post>
        ))}
      </div>
    </section>
  )
}
