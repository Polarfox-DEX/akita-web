import { FunctionComponent } from 'react'
import classnames from 'classnames'
import { Post } from './Post'
import posts from './posts.json'

export interface BlogProps {
  className?: string
}

export const Blog: FunctionComponent<BlogProps> = ({ className }) => (
  <section className={classnames('container px-5 mx-auto', className)}>
    <h1 className="mb-4">Latest News</h1>
    <p>AKITA INU 秋田犬 最新情報.</p>
    <div className="flex flex-wrap pt-12">
      {posts.map((post) => (
        <Post key={post.title} {...post}></Post>
      ))}
    </div>
  </section>
)
