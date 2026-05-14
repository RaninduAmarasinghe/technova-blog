import Link from "next/link";

type PostCardProps = {
  title: string;
  author: string;
  slug: string;
};

export default function PostCard({
  title,
  author,
  slug,
}: PostCardProps) {
  return (
    <Link href={`/blog/${slug}`}>
      <article className="bg-[#111111] border border-gray-800 rounded-3xl p-8 hover:border-blue-500 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
        
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
            T
          </div>

          <div>
            <p className="text-white font-medium">
              {author}
            </p>

            <p className="text-gray-500 text-sm">
              TechNova Hub
            </p>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-white leading-tight">
          {title}
        </h2>

        <p className="text-gray-400 mt-4 leading-7">
          Read the latest insights and updates from TechNova Hub.
        </p>

        <div className="mt-6 flex items-center text-blue-500 font-medium">
          Read Article →
        </div>
      </article>
    </Link>
  );
}