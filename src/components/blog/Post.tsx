import { FunctionComponent } from 'react';

export interface PostProps {
  title: string;
  description?: string;
  imgUrl: string;
  link: string;
}

export const Post: FunctionComponent<PostProps> = ({
  title,
  imgUrl,
  link,
  description,
}) => (
  <div className="p-4 md:w-1/3">
    <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-md overflow-hidden">
      <a href={link}>
        <img
          className="lg:h-72 w-full object-cover object-center"
          src={imgUrl}
          alt="blog"
        />
      </a>
      <div className="p-6">
        <div className="grid grid-cols-1 divide-y gap-y-5">
          <h2>{title}</h2>
          {description && <p className="pt-5">{description}</p>}
        </div>
      </div>
    </div>
  </div>
);
