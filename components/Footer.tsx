import { FaLinkedinIn, FaFacebookF, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white mt-20">

      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col lg:flex-row items-center justify-between gap-8">

        {/* LEFT */}
        <div>

          <h2 className="text-3xl font-bold text-gray-900">
            TechNova <span className="text-blue-600">Hub</span>
          </h2>

          <p className="mt-4 text-gray-500 max-w-md leading-7">
            Your daily source for the latest in technology,
            gadgets, AI, and digital trends.
          </p>

        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-5">

          <button
            aria-label="Twitter"
            className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-100 transition"
          >
            <FaXTwitter size={18} />
          </button>

          <button
            aria-label="LinkedIn"
            className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-100 transition"
          >
            <FaLinkedinIn size={18} />
          </button>

          <button
            aria-label="Facebook"
            className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-100 transition"
          >
            <FaFacebookF size={18} />
          </button>

        </div>

      </div>

      {/* COPYRIGHT */}
      <div className="border-t border-gray-200 py-6 text-center text-gray-500 text-sm">
        © 2026 TechNova Hub. All rights reserved.
      </div>

    </footer>
  );
}