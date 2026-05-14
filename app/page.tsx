import HeroPost from "@/components/HeroPost";
import LatestPosts from "@/components/LatestPosts";

import { client } from "@/sanity/lib/client";
import { POSTS_QUERY } from "@/sanity/lib/queries";

type Post = {
  _id: string;
  title: string;
  author: string;
  slug: {
    current: string;
  };
};

export default async function HomePage() {

  const posts: Post[] = await client.fetch(POSTS_QUERY);

  const featuredPost = posts[0];

  return (
    <main className="bg-[#f5f5f5] min-h-screen">

      {featuredPost && (
        <HeroPost
          title={featuredPost.title}
          author={featuredPost.author}
          slug={featuredPost.slug.current}
        />
      )}

      <LatestPosts />

    </main>
  );
}