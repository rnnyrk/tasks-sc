'use client';

import { usePosts } from '@queries/posts';
import { Heading } from '@common/typography/Heading';

import { AddBlogModal } from './AddBlogModal';

export function BlogOverview() {
  const { data, isLoading } = usePosts();

  if (!data || isLoading) return <div>Loading...</div>;

  return (
    <div className="mt-4">
      {data.map((post) => (
        <article
          key={post.id}
          className="mb-4 last:mb-0"
        >
          <Heading variant="h2">{post.name}</Heading>
          <p>{post.content}</p>
        </article>
      ))}

      <AddBlogModal />
    </div>
  );
}
