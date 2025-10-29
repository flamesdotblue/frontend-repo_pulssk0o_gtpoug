import { Languages, Image, Video, Mic, Shield } from "lucide-react";

const features = [
  {
    icon: Languages,
    title: "Multilingual Intelligence",
    desc:
      "Understands 100+ languages with cultural nuance, auto-detects and code-switches in real time.",
  },
  {
    icon: Image,
    title: "Image Mastery",
    desc:
      "Advanced editing, object removal, color grading, and photorealistic generation.",
  },
  {
    icon: Video,
    title: "Video Generation & Editing",
    desc:
      "Transitions, VFX, subtitles, and animation with instant translation and dubbing.",
  },
  {
    icon: Mic,
    title: "Expressive Voice",
    desc:
      "Natural TTS, real-time dubbing, and lip-synced narration across regional styles.",
  },
  {
    icon: Shield,
    title: "Ethics & Safety",
    desc:
      "Built-in safeguards, privacy controls, and on-device processing options.",
  },
];

export default function FeatureGrid() {
  return (
    <section id="features" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Built for creation, translation, and innovation</h2>
          <p className="mt-3 text-gray-600">
            Fuse LLMs, diffusion, video, and speech into one unified assistant that responds instantly.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="group rounded-xl border border-gray-200 hover:border-gray-300 bg-white p-6 shadow-sm hover:shadow transition"
            >
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-fuchsia-500 via-purple-500 to-blue-500 text-white flex items-center justify-center shadow">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{f.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
