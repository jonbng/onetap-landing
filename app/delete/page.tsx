import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Data Deletion",
  description:
    "Request deletion of your OneTap account or specific data. We're committed to giving you full control over your information.",
  openGraph: {
    title: "Data Deletion | OneTap",
    description:
      "Request deletion of your OneTap account or specific data. We're committed to giving you full control over your information.",
    url: "https://onetap.jonathanb.dk/delete",
  },
  twitter: {
    title: "Data Deletion | OneTap",
    description:
      "Request deletion of your OneTap account or specific data. We're committed to giving you full control over your information.",
  },
  alternates: {
    canonical: "https://onetap.jonathanb.dk/delete",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function DeletePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header with Logo and Back Button */}
      <header className="px-8 pt-12 md:pt-16">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-16 md:mb-20">
            <Link
              href="/"
              className="text-gray-600 hover:text-gray-900 transition-colors duration-200 font-light"
            >
              ← Back
            </Link>
            <Image
              src="/logo.png"
              alt="OneTap"
              width={40}
              height={40}
              className="h-10 w-10"
            />
            <div className="w-12"></div> {/* Spacer for centering */}
          </div>

          <div className="text-center space-y-6 md:space-y-8">
            <h1 className="text-3xl md:text-5xl font-light tracking-tight text-gray-900 leading-tight">
              Data Deletion
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
              Your privacy matters. We're happy to help you manage or delete
              your data.
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-8 py-16 md:py-20">
        <div className="max-w-3xl mx-auto space-y-12 md:space-y-16">
          {/* Security Statement */}
          <section className="text-center">
            <p className="text-gray-700 font-light leading-relaxed text-base md:text-lg">
              Security and privacy are important to us. We believe you should
              have full control over your data.
            </p>
          </section>

          {/* Instructions */}
          <section className="space-y-8">
            <h2 className="text-2xl md:text-3xl font-light text-gray-900 text-center">
              What can we delete?
            </h2>

            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
              <div className="space-y-4">
                <h3 className="text-xl font-light text-gray-900">
                  Delete everything
                </h3>
                <p className="text-gray-600 font-light leading-relaxed">
                  Permanently remove your entire account and all associated
                  data. This cannot be undone.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-light text-gray-900">
                  Delete specific data
                </h3>
                <p className="text-gray-600 font-light leading-relaxed">
                  Remove specific recordings, notes, or time periods while
                  keeping your account active.
                </p>
              </div>
            </div>
          </section>

          {/* How to Request */}
          <section className="space-y-8">
            <h2 className="text-2xl md:text-3xl font-light text-gray-900 text-center">
              How to request deletion
            </h2>

            <div className="bg-gray-50 rounded-2xl p-8 md:p-10 space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-gray-900">
                  Send us an email
                </h3>
                <p className="text-gray-700 font-light leading-relaxed">
                  Email us at{" "}
                  <a
                    href="mailto:onetap-deletion@jonathanb.dk"
                    className="text-gray-900 underline decoration-1 underline-offset-2 hover:text-gray-700 transition-colors duration-200"
                  >
                    onetap-deletion@jonathanb.dk
                  </a>
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium text-gray-900">
                  Include this information
                </h3>
                <ul className="space-y-3 text-gray-700 font-light leading-relaxed">
                  <li className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
                    <span>
                      What you'd like to delete (everything or specific data)
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
                    <span>
                      Your User ID (found in the app at the bottom of Settings)
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Any specific details about what data to remove</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Response Time */}
          <section className="text-center">
            <p className="text-gray-600 font-light leading-relaxed">
              We'll respond within 48 hours and complete your request as quickly
              as possible.
            </p>
          </section>
        </div>
      </main>

      {/* Footer Spacer */}
      <div className="py-16 md:py-20"></div>
    </div>
  );
}
