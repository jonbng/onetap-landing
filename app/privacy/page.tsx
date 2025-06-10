import Image from "next/image";
import Link from "next/link";
import { Lock } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Your privacy is our top priority. Learn how OneTap protects your data with the highest security standards.",
  openGraph: {
    title: "Privacy Policy | OneTap",
    description:
      "Your privacy is our top priority. Learn how OneTap protects your data with the highest security standards.",
    url: "https://onetap.jonathanb.dk/privacy",
  },
  twitter: {
    title: "Privacy Policy | OneTap",
    description:
      "Your privacy is our top priority. Learn how OneTap protects your data with the highest security standards.",
  },
  alternates: {
    canonical: "https://onetap.jonathanb.dk/privacy",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header with Logo and Back Button */}
      <header className="px-8 pt-12 md:pt-16">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-12 md:mb-16">
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

          {/* Lock Icon */}
          <div className="flex justify-center mb-8 md:mb-12">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-gray-100 rounded-full flex items-center justify-center">
              <Lock className="w-8 h-8 md:w-10 md:h-10 text-gray-600" />
            </div>
          </div>

          <div className="text-center space-y-6 md:space-y-8">
            <h1 className="text-3xl md:text-5xl font-light tracking-tight text-gray-900 leading-tight">
              Privacy Policy
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
              Your privacy is our top priority. We're committed to protecting
              your data with the highest standards.
            </p>
          </div>
        </div>
      </header>

      {/* Summary Section */}
      <section className="px-8 py-16 md:py-20">
        <div className="max-w-3xl mx-auto">
          <div className="bg-gray-50 rounded-2xl p-8 md:p-10 space-y-6">
            <h2 className="text-2xl md:text-3xl font-light text-gray-900 text-center mb-8">
              Privacy at a glance
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                <h3 className="text-lg font-medium text-gray-900">
                  Secure by design
                </h3>
                <p className="text-gray-700 font-light leading-relaxed text-sm">
                  All data encrypted in transit and at rest through our trusted
                  partner, Supabase.
                </p>
              </div>

              <div className="space-y-3">
                <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                <h3 className="text-lg font-medium text-gray-900">
                  Your control
                </h3>
                <p className="text-gray-700 font-light leading-relaxed text-sm">
                  Request deletion of your account or specific data anytime.
                </p>
              </div>

              <div className="space-y-3">
                <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                <h3 className="text-lg font-medium text-gray-900">
                  Trusted logins
                </h3>
                <p className="text-gray-700 font-light leading-relaxed text-sm">
                  We use Google and Apple for authentication—we never store your
                  credentials.
                </p>
              </div>

              <div className="space-y-3">
                <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                <h3 className="text-lg font-medium text-gray-900">
                  Transparent
                </h3>
                <p className="text-gray-700 font-light leading-relaxed text-sm">
                  Clear policies, no hidden practices. Questions? We're here to
                  help.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Policy Sections */}
      <section className="px-8 py-8 md:py-12">
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem
              value="what-we-collect"
              className="border border-gray-200 rounded-xl px-6"
            >
              <AccordionTrigger className="text-xl font-light text-gray-900 hover:no-underline py-6">
                What We Collect
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 font-light leading-relaxed pb-6">
                <p>
                  When you use OneTap, any data you input is securely stored in
                  the cloud through our trusted partner, Supabase. This includes
                  your voice recordings, notes, and any other content you choose
                  to save within the app.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="how-we-protect"
              className="border border-gray-200 rounded-xl px-6"
            >
              <AccordionTrigger className="text-xl font-light text-gray-900 hover:no-underline py-6">
                How We Protect Your Data
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 font-light leading-relaxed pb-6">
                <p>
                  We encrypt all data in transit and at rest. Supabase handles
                  all data storage on our behalf, following strong security
                  practices and industry standards to keep your information
                  safe.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="logins"
              className="border border-gray-200 rounded-xl px-6"
            >
              <AccordionTrigger className="text-xl font-light text-gray-900 hover:no-underline py-6">
                Authentication & Logins
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 font-light leading-relaxed pb-6">
                <p>
                  We use Google and Apple as login providers for your
                  convenience and security. Your login credentials are never
                  stored by us directly—they remain with these trusted
                  providers.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="deleting-data"
              className="border border-gray-200 rounded-xl px-6"
            >
              <AccordionTrigger className="text-xl font-light text-gray-900 hover:no-underline py-6">
                Deleting Your Data
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 font-light leading-relaxed pb-6">
                <p>
                  You can request deletion of your account or specific data at
                  any time. Visit{" "}
                  <Link
                    href="/delete"
                    className="text-gray-900 underline decoration-1 underline-offset-2 hover:text-gray-700 transition-colors duration-200"
                  >
                    onetap.jonathanb.dk/delete
                  </Link>{" "}
                  for detailed instructions on how to manage your data.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="contact"
              className="border border-gray-200 rounded-xl px-6"
            >
              <AccordionTrigger className="text-xl font-light text-gray-900 hover:no-underline py-6">
                Questions & Contact
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 font-light leading-relaxed pb-6">
                <p>
                  Questions or concerns about your privacy? We're here to help.
                  Email us at{" "}
                  <a
                    href="mailto:onetap@jonathanb.dk"
                    className="text-gray-900 underline decoration-1 underline-offset-2 hover:text-gray-700 transition-colors duration-200"
                  >
                    onetap@jonathanb.dk
                  </a>
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Footer Info */}
      <section className="px-8 py-12 md:py-16">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm text-gray-500 font-light">
            Copyright © 2025 OneTap (onetap.jonathanb.dk) · Last updated: 2025
          </p>
        </div>
      </section>

      {/* Footer Spacer */}
      <div className="py-8 md:py-12"></div>
    </div>
  );
}
