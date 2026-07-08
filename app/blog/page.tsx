import { getSortedPostsData } from '@/lib/blog';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { BlogIndexClient } from './blog-index-client';

export default function BlogIndex() {
  // Strip the full MDX body — the index only needs the metadata.
  const allPosts = getSortedPostsData().map(({ content, ...preview }) => preview);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <BlogIndexClient posts={allPosts} />
      <Footer />
    </div>
  );
}
