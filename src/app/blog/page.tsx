import { Heading } from '@common/typography/Heading';
import { BlogOverview } from '@modules/blog/BlogOverview';

export const metadata = {
  title: 'Blog',
};

function Blog() {
  return (
    <article>
      <Heading>Blog</Heading>
      <BlogOverview />
    </article>
  );
}

export default Blog;
