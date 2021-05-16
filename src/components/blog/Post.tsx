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
    <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
      <a href={link}>
        <img
          className="lg:h-48 md:h-36 w-full object-cover object-center"
          src={imgUrl}
          alt="blog"
        />
      </a>
      <div className="p-6">
        <div className="grid grid-cols-1 divide-y divide-gray-600">
          <div>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              <a href={link}>{title}</a>
            </h1>
          </div>
          {description && (
            <div>
              <p className="leading-relaxed mb-3">{description}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  </div>
);
