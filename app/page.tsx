import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "OneTap - A button for your brain",
  description:
    "Tap. Speak. It remembers everything, surfacing what matters when it matters. No typing. No forms. Just speak and go.",
  openGraph: {
    title: "OneTap - A button for your brain",
    description:
      "Tap. Speak. It remembers everything, surfacing what matters when it matters. No typing. No forms. Just speak and go.",
    url: "https://onetap.jonathanb.dk",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "OneTap - A button for your brain",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "OneTap - A button for your brain",
    description:
      "Tap. Speak. It remembers everything, surfacing what matters when it matters.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://onetap.jonathanb.dk",
  },
};

export default function OneTapLanding() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="px-8 pt-12 md:pt-16 lg:pt-20">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-center mb-16 md:mb-24">
            <Image
              src="/logo.png"
              alt="OneTap"
              width={80}
              height={80}
              className="h-16 w-16 md:h-20 md:w-20"
            />
          </div>

          <div className="text-center space-y-8 md:space-y-12">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-gray-900 leading-tight">
              A button for
              <br />
              <span
                className="font-serif italic text-gray-700"
                style={{ fontFamily: "STIX Two Text, serif" }}
              >
                your brain
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 max-w-md mx-auto font-light leading-relaxed">
              Tap. Speak. It remembers everything, surfacing what matters when
              it matters.
            </p>
            <p className="text-base md:text-lg text-gray-500 max-w-sm mx-auto font-light leading-relaxed">
              No typing. No forms. Just speak and go.
            </p>
          </div>
        </div>
      </header>

      {/* Core Promise Section */}
      <section className="px-8 py-24 md:py-32 lg:py-40">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-16 md:gap-8 text-center">
            <div className="space-y-4">
              <div className="w-2 h-2 bg-gray-300 rounded-full mx-auto mb-8"></div>
              <h3 className="text-2xl md:text-3xl font-light text-gray-900">
                One tap
              </h3>
              <p className="text-gray-600 font-light leading-relaxed">
                No forms, no friction. Just press and begin.
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-2 h-2 bg-gray-400 rounded-full mx-auto mb-8"></div>
              <h3 className="text-2xl md:text-3xl font-light text-gray-900">
                Speak
              </h3>
              <p className="text-gray-600 font-light leading-relaxed">
                Your thoughts, plans, and moments flow naturally.
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-2 h-2 bg-gray-900 rounded-full mx-auto mb-8"></div>
              <h3 className="text-2xl md:text-3xl font-light text-gray-900">
                It remembers
              </h3>
              <p className="text-gray-600 font-light leading-relaxed">
                Everything connects. Nothing is forgotten.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="px-8 py-16 md:py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-gray-500 font-light text-sm md:text-base leading-relaxed">
            turns voice into todos · adds events automatically · writes your
            diary · reminds you just in time
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="px-8 py-24 md:py-32">
        <div className="max-w-3xl mx-auto text-center">
          <blockquote
            className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-800 leading-tight italic"
            style={{ fontFamily: "STIX Two Text, serif" }}
          >
            "Memory is the architecture of the future."
          </blockquote>
        </div>
      </section>

      {/* Spacer */}
      <div className="py-16 md:py-24"></div>

      {/* Footer */}
      <footer className="px-8 pb-12 md:pb-16">
        <div className="max-w-6xl mx-auto text-center space-y-8">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="bg-gray-100 rounded-xl px-5 py-4 hover:bg-gray-50 transition-colors duration-300 cursor-pointer">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gray-300 rounded">
                  <Image
                    src="/app-store.png"
                    alt="App Store"
                    width={32}
                    height={32}
                  />
                </div>
                <div className="text-left">
                  <div className="text-xs text-gray-500 font-medium">
                    Download on the
                  </div>
                  <div className="text-sm text-gray-900 font-semibold">
                    App Store
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-100 rounded-xl px-5 py-4 hover:bg-gray-50 transition-colors duration-300 cursor-pointer">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#6b7280"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                    <path d="M2 12h20" />
                  </svg>
                </div>
                <div className="text-left">
                  <div className="text-xs text-gray-500 font-medium">
                    Use it as a
                  </div>
                  <div className="text-sm text-gray-900 font-semibold">
                    Web App
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-100 rounded-xl px-5 py-4 hover:bg-gray-50 transition-colors duration-300 cursor-pointer">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gray-300 rounded">
                  <Image
                    src="/play-store.webp"
                    alt="Google Play"
                    width={32}
                    height={32}
                  />
                </div>
                <div className="text-left">
                  <div className="text-xs text-gray-500 font-medium">
                    Download on the
                  </div>
                  <div className="text-sm text-gray-900 font-semibold">
                    Google Play
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-sm text-gray-500 font-light space-y-2">
            <div>
              Crafted in the open. View on{" "}
              <a
                href="https://github.com/Ell1ott/OneTap/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-gray-900 transition-colors duration-200 underline decoration-1 underline-offset-2"
              >
                GitHub
              </a>
            </div>
            <div>
              <Link
                href="/privacy"
                className="text-gray-700 hover:text-gray-900 transition-colors duration-200 underline decoration-1 underline-offset-2"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
