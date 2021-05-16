import { FunctionComponent } from 'react';

import { Post } from './Post';
import posts from './posts.json';

export const Blog: FunctionComponent = () => (
  <>
    <div className="text-center mb-65">
      <h1 className="text-gray-900 text-3xl title-font font-medium mb-5">
        Latest News
      </h1>
      <p>AKITA INU 秋田犬 最新情報.</p>
    </div>
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {posts.map((post) => (
            <Post {...post}></Post>
          ))}
        </div>
      </div>
    </section>
  </>
);
