import Image from "next/image";

export default function PostCard() {
  return (
    <div className="bg-white rounded-3xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition">

      {/* IMAGE */}
      <div className="relative w-full h-56">
        <Image
          src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1200&auto=format&fit=crop"
          alt="Post Image"
          fill
          className="object-cover"
        />
      </div>

      {/* CONTENT */}
      <div className="p-6">

        <p className="text-blue-600 text-sm font-semibold uppercase tracking-wide">
          Gadgets
        </p>

        <h2 className="mt-3 text-2xl font-bold text-gray-900 leading-snug">
          Top 5 Smartphones Launching in May 2026
        </h2>

        {/* AUTHOR */}
        <div className="mt-6 flex items-center gap-3 text-sm text-gray-500">

          <div className="w-8 h-8 rounded-full bg-gray-300"></div>

          <span>Neha Verma</span>

          <span>•</span>

          <span>Apr 20, 2026</span>
        </div>

      </div>
    </div>
  );
}