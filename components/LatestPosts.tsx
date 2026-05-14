import PostCard from "./PostCard";
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

export default async function LatestPosts() {
  const posts: Post[] = await client.fetch(POSTS_QUERY);

  return (
    <section className="max-w-7xl mx-auto px-6 pb-20">

      {/* TITLE */}
      <div className="flex items-center justify-between mb-8">

        <h2 className="text-4xl font-bold text-gray-900">
          Latest Articles
        </h2>

      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

        {posts.map((post) => (
          <PostCard
            key={post._id}
            title={post.title}
            author={post.author}
            slug={post.slug.current}
          />
        ))}

      </div>

      {/* LOAD MORE */}
      <div className="flex justify-center mt-14">

        <button className="px-8 py-4 rounded-2xl border border-gray-300 bg-white hover:bg-gray-100 transition font-medium">
          Load More Articles
        </button>

      </div>

    </section>
  );
}