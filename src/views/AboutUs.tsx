"use client";

import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { DownloadBar } from "@/components/sections/Downloadbar";
import { HeroBanner } from "./Herobanner";
import {
  Users,
  ShieldCheck,
  Mic2,
  Heart,
  Globe2,
  Sparkles,
  Building2,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

const GRADIENT = "linear-gradient(135deg, #e91e8c, #2563eb)";

// ── REUSABLE COMPONENTS ───────────────────────────────────────────
function ValueCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="flex items-center gap-3 mb-3">
        <div
          className="w-10 h-10 flex items-center justify-center rounded-xl text-white shrink-0"
          style={{ background: GRADIENT }}
        >
          {icon}
        </div>
        <h3 className="text-base sm:text-lg font-bold text-gray-900">{title}</h3>
      </div>
      <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}

function InfoRow({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex items-start gap-3">
      <div
        className="w-8 h-8 flex items-center justify-center rounded-lg text-white shrink-0 mt-0.5"
        style={{ background: GRADIENT }}
      >
        {icon}
      </div>
      <div>
        <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">{label}</p>
        <p className="text-sm sm:text-base text-gray-800 font-semibold">{value}</p>
      </div>
    </div>
  );
}

// ── PAGE ─────────────────────────────────────────────────────────
export default function About() {
  return (
    <div className="bg-[#0b1220] text-white min-h-screen">
      <Navbar />

      <HeroBanner title="About Us" />

      <div className="max-w-[84rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="bg-gray-50 text-black rounded-2xl shadow-lg p-5 sm:p-8 md:p-10 border border-gray-200 space-y-10">

          {/* ── HERO INTRO ── */}
          <div
            className="rounded-2xl p-6 sm:p-8 text-center border"
            style={{
              borderColor: "#e91e8c33",
              background: "linear-gradient(135deg, #fdf2f8, #eff6ff)",
            }}
          >
            <div className="flex justify-center mb-4">
              <div
                className="w-14 h-14 flex items-center justify-center rounded-2xl text-white"
                style={{ background: GRADIENT }}
              >
                <Heart className="w-7 h-7" />
              </div>
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 mb-3">
              Welcome to{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: GRADIENT }}
              >
                Yaari Zone
              </span>
            </h1>
            <p
              className="text-base sm:text-lg font-semibold mb-4"
              style={{ backgroundImage: GRADIENT, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
            >
              Where Real Bonds Begin
            </p>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-3xl mx-auto">
              At Yaari Zone, we're reimagining the way people connect online. In a world overflowing
              with noise, we've built a platform that helps you create meaningful connections, engage
              in genuine conversations, and be part of communities that truly resonate with you. We
              believe that friendship, belonging, and self-expression should be simple, safe, and
              accessible to everyone.
            </p>
          </div>

          {/* ── OUR VISION ── */}
          <div>
            <div
              className="rounded-xl px-4 py-3 mb-5 inline-flex items-center gap-2 text-white font-bold text-base sm:text-lg"
              style={{ background: GRADIENT }}
            >
              <Globe2 className="w-5 h-5" />
              Our Vision
            </div>
            <div className="bg-white border border-gray-100 rounded-2xl p-5 sm:p-6 shadow-sm">
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                To create a digital world where every interaction feels genuine, every community
                feels welcoming, and every user feels safe. We are committed to building a platform
                rooted in trust, empathy, and the simple joy of human connection — one meaningful
                conversation at a time.
              </p>
            </div>
          </div>

          {/* ── WHAT WE STAND FOR ── */}
          <div>
            <div
              className="rounded-xl px-4 py-3 mb-5 inline-flex items-center gap-2 text-white font-bold text-base sm:text-lg"
              style={{ background: GRADIENT }}
            >
              <Sparkles className="w-5 h-5" />
              What We Stand For
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              <ValueCard
                icon={<Users className="w-5 h-5" />}
                title="Real Connections"
                description="Meet like-minded people and foster relationships that matter. Yaari Zone is built to go beyond surface-level interactions — helping you find friends who truly get you."
              />
              <ValueCard
                icon={<Heart className="w-5 h-5" />}
                title="Inclusive Communities"
                description="Join spaces built on respect, empathy, and shared passions. Everyone deserves a place where they feel seen, heard, and welcomed without judgment."
              />
              <ValueCard
                icon={<ShieldCheck className="w-5 h-5" />}
                title="Safety First"
                description="With privacy controls and community safeguards, your well-being is always our top priority. We work tirelessly to ensure Yaari Zone remains a safe space for all."
              />
              <ValueCard
                icon={<Mic2 className="w-5 h-5" />}
                title="Empowered Voices"
                description="A platform that encourages you to express yourself, share ideas, and celebrate individuality. Your voice matters — and here, it's always heard."
              />
            </div>
          </div>

          {/* ── CLOSING STATEMENT ── */}
          <div
            className="rounded-2xl p-5 sm:p-6 border text-sm sm:text-base text-gray-700 leading-relaxed"
            style={{ borderColor: "#2563eb33", background: "linear-gradient(135deg, #eff6ff, #fdf2f8)" }}
          >
            <p>
              Whether you're here to make new friends, spark conversations, or simply discover
              communities that feel like home — <strong>Yaari Zone</strong> is here to make every
              interaction meaningful. Together, we're building not just an app, but a global
              community powered by connection, trust, and positivity.
            </p>
          </div>

          {/* ── COMPANY DETAILS ── */}
          <div>
            <div
              className="rounded-xl px-4 py-3 mb-5 inline-flex items-center gap-2 text-white font-bold text-base sm:text-lg"
              style={{ background: GRADIENT }}
            >
              <Building2 className="w-5 h-5" />
              Company Information
            </div>
            <div className="bg-white border border-gray-100 rounded-2xl p-5 sm:p-6 shadow-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <InfoRow
                  icon={<Building2 className="w-4 h-4" />}
                  label="Company Name"
                  value="Shakya Technology"
                />
                <InfoRow
                  icon={<MapPin className="w-4 h-4" />}
                  label="Registered Address"
                  value="Chilsari, Kaimganj, Farrukhabad, Uttar Pradesh - 209502"
                />
                <InfoRow
                  icon={<Phone className="w-4 h-4" />}
                  label="Contact Number"
                  value="9170271034"
                />
                <InfoRow
                  icon={<Mail className="w-4 h-4" />}
                  label="Email Address"
                  value="deepakshakya9766@gmail.com"
                />
              </div>
            </div>
          </div>

        </div>
      </div>

      <Footer />
      <DownloadBar />
    </div>
  );
}