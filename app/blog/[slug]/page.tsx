import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import Link from "next/link";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

type Post = {
  title: string;
  author: string;
};

const postQuery = groq`
  *[_type == "post" && slug.current == $slug][0]{
    title,
    author
  }
`;

export default async function BlogPostPage({
  params,
}: PageProps) {
  const { slug } = await params;

  const post: Post = await client.fetch(postQuery, {
    slug,
  });

  return (
    <main className="min-h-screen bg-black text-white px-6 py-16">
      <div className="max-w-4xl mx-auto">
        
        <Link
          href="/"
          className="text-blue-500 hover:underline"
        >
          ← Back to Home
        </Link>

        <h1 className="text-5xl font-bold mt-10 leading-tight">
          {post.title}
        </h1>

        <div className="mt-6 flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center">
            T
          </div>

          <div>
            <p className="font-medium">
              {post.author}
            </p>

            <p className="text-gray-400 text-sm">
              TechNova Hub
            </p>
          </div>
        </div>

        <article className="mt-12 text-gray-300 leading-8 text-lg">
          <p>
            This article content will come dynamically from Sanity CMS next.
          </p>

          <p className="mt-6">
            You have successfully connected a full CMS-powered blog system using Next.js and Sanity.
          </p>
        </article>
      </div>
    </main>
  );
}