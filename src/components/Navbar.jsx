import { Rocket, Languages, Settings } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-fuchsia-500 via-purple-500 to-blue-500 flex items-center justify-center text-white shadow">
            <Rocket className="h-5 w-5" />
          </div>
          <span className="font-semibold text-gray-900 tracking-tight">Astra One</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-700">
          <a href="#features" className="hover:text-gray-900">Features</a>
          <a href="#modes" className="hover:text-gray-900">Modes</a>
          <a href="#safety" className="hover:text-gray-900">Safety</a>
        </nav>
        <div className="flex items-center gap-2">
          <button className="inline-flex items-center gap-2 text-sm px-3 py-2 rounded-md border border-gray-200 hover:border-gray-300 bg-white text-gray-700">
            <Languages className="h-4 w-4" />
            Global
          </button>
          <button className="hidden sm:inline-flex items-center gap-2 text-sm px-3 py-2 rounded-md bg-gray-900 text-white hover:bg-gray-800">
            <Settings className="h-4 w-4" />
            Console
          </button>
        </div>
      </div>
    </header>
  );
}
