import { Rocket } from "lucide-react";

export default function FooterCTA() {
  return (
    <footer id="safety" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-tr from-purple-600 via-fuchsia-600 to-blue-600 opacity-10" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="rounded-2xl bg-gray-900 text-white p-8 md:p-12 overflow-hidden">
          <div className="pointer-events-none absolute -top-24 right-0 h-64 w-64 bg-fuchsia-500/30 rounded-full blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-10 h-64 w-64 bg-blue-500/30 rounded-full blur-3xl" />

          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold">Ready to build with Astra One?</h3>
              <p className="mt-2 text-white/80 max-w-xl">
                Use the unified API, plug in your favorite models, and go from idea to production in minutes.
              </p>
            </div>
            <div className="flex gap-3">
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-md bg-white text-gray-900 px-5 py-3 font-medium shadow hover:bg-gray-100"
              >
                <Rocket className="h-4 w-4" />
                Launch Console
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-md bg-transparent border border-white/20 text-white px-5 py-3 font-medium hover:bg-white/10"
              >
                View Docs
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center text-sm text-gray-600">
          <p>© {new Date().getFullYear()} Astra One. Ethics-first AI for everyone.</p>
        </div>
      </div>
    </footer>
  );
}
