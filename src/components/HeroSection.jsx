import Spline from "@splinetool/react-spline";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[70vh] md:min-h-[80vh] lg:min-h-[85vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode"
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      {/* Subtle gradient to improve text contrast without blocking interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-white/0" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 md:pt-24 lg:pt-28">
        <div className="max-w-2xl text-white">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
            Astra One Multiversal
          </h1>
          <p className="mt-4 md:mt-6 text-base md:text-lg text-white/90">
            The fastest, smartest, and most multimodal AI. Understands and creates
            text, images, video, and audio in any language with human-level nuance.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href="#features"
              className="inline-flex items-center justify-center rounded-md bg-white text-gray-900 px-5 py-3 font-medium shadow hover:bg-gray-100"
            >
              Explore Capabilities
            </a>
            <a
              href="#modes"
              className="inline-flex items-center justify-center rounded-md bg-gray-900/70 text-white px-5 py-3 font-medium border border-white/20 hover:bg-gray-900"
            >
              Try Personality Modes
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
