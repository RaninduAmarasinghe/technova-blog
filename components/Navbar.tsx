import { Search, Moon } from "lucide-react";

export default function Navbar() {
  return (
    <header className="w-full border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        
        <h1 className="text-4xl font-bold tracking-tight">
          TechNova <span className="text-blue-600">Hub</span>
        </h1>

        <div className="flex items-center gap-4">
      <button
  aria-label="Search"
  className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-100 transition"
>
  <Search size={22} />
</button>

<button
  aria-label="Dark Mode"
  className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-100 transition"
>
  <Moon size={22} />
</button>
        </div>
      </div>
    </header>
  );
}