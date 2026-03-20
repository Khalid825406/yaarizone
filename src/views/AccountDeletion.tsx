"use client";

import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { DownloadBar } from "@/components/sections/Downloadbar";
import { HeroBanner } from "./Herobanner";
import {
  Settings,
  ShieldCheck,
  RotateCcw,
  Download,
  Coins,
  HelpCircle,
  CheckCircle2,
} from "lucide-react";

// ── BRAND COLORS (from logo: rose/pink → cobalt blue) ────────────
// Primary gradient : #e91e8c (pink/magenta) → #2563eb (cobalt blue)
// Used on: card icons, step circles, bullet icons, CTA

// ── SECTION CARD ─────────────────────────────────────────────────
function Card({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="flex items-center gap-3 mb-4">
        {/* Icon badge — pink-to-blue gradient matching logo */}
        <div
          className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-xl text-white shrink-0"
          style={{ background: "linear-gradient(135deg, #e91e8c, #2563eb)" }}
        >
          {icon}
        </div>
        <h2 className="text-base sm:text-lg font-bold text-gray-900">{title}</h2>
      </div>
      {children}
    </div>
  );
}

// ── STEP ITEM ────────────────────────────────────────────────────
function Step({ number, text }: { number: number; text: string }) {
  return (
    <li className="flex items-start gap-3 text-sm sm:text-base text-gray-700">
      <span
        className="mt-0.5 w-6 h-6 flex items-center justify-center rounded-full text-white text-xs font-bold shrink-0"
        style={{ background: "linear-gradient(135deg, #e91e8c, #2563eb)" }}
      >
        {number}
      </span>
      <span>{text}</span>
    </li>
  );
}

// ── BULLET ITEM ──────────────────────────────────────────────────
function Bullet({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-2.5 text-sm sm:text-base text-gray-700">
      {/* Pink-tinted check icon */}
      <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0" style={{ color: "#e91e8c" }} />
      <span>{text}</span>
    </li>
  );
}

// ── ACCOUNT DELETION PAGE ─────────────────────────────────────────
export default function AccountDeletion() {
  return (
    <div className="bg-[#0b1220] text-white min-h-screen">
      <Navbar />

      <HeroBanner title="Account Deletion" />

      {/* CONTENT */}
      <div className="max-w-[84rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="bg-gray-50 text-black rounded-2xl shadow-lg p-5 sm:p-8 md:p-10 border border-gray-200">

          {/* INTRO — subtle gradient top border */}
          <div
            className="rounded-xl p-4 sm:p-5 mb-8 text-sm sm:text-base text-gray-700 leading-relaxed border"
            style={{
              borderColor: "#e91e8c33",
              background: "linear-gradient(135deg, #fdf2f8, #eff6ff)",
            }}
          >
            <span className="font-semibold text-gray-900">Important: </span>
            If you decide to delete your Real Frnd account, please review the following information
            carefully before proceeding. This action has permanent consequences and cannot be undone
            after the 30-day recovery window.
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">

            {/* 1 — HOW TO DELETE */}
            <Card icon={<Settings className="w-5 h-5" />} title="How to Delete">
              <ol className="space-y-3">
                <Step number={1} text="Go to Settings → Delete Account" />
                <Step number={2} text="Log in and verify your account" />
                <Step number={3} text="Enter your registered mobile number and email address" />
                <Step number={4} text="(Optional) Share your reason for leaving" />
                <Step number={5} text='Click "Submit" to confirm' />
              </ol>
            </Card>

            {/* 2 — WHAT HAPPENS AFTER */}
            <Card icon={<ShieldCheck className="w-5 h-5" />} title="What Happens After Deletion">
              <ul className="space-y-3">
                <Bullet text="Your profile, posts, and activity will no longer be visible" />
                <Bullet text="You will lose access to all app features — calling history, uploads, and communities" />
                <Bullet text="Some cached links may remain briefly, but your profile will not be accessible" />
                <Bullet text="Certain personal data may be retained temporarily for legal, security, or compliance purposes" />
              </ul>
            </Card>

            {/* 3 — CANCELLING DELETION */}
            <Card icon={<RotateCcw className="w-5 h-5" />} title="Cancelling Deletion">
              <ul className="space-y-3">
                <Bullet text="You can restore your account by logging back in within 30 days of submitting the request" />
                <Bullet text="After 30 days, your account and data will be permanently deleted and cannot be recovered" />
              </ul>
              <div className="mt-4 rounded-xl px-4 py-3 text-xs sm:text-sm text-yellow-900 bg-yellow-50 border border-yellow-200">
                ⚠️ After 30 days, recovery is not possible under any circumstances.
              </div>
            </Card>

            {/* 4 — DOWNLOADING DATA */}
            <Card icon={<Download className="w-5 h-5" />} title="Downloading Your Data">
              <ul className="space-y-3">
                <Bullet text="A secure download link will be sent to your registered email" />
                <Bullet text="The link remains active for 7 days only" />
                <Bullet text="Data may include your posts, call history, coins history, and profile details" />
              </ul>
            </Card>

            {/* 5 — COINS & REWARDS */}
            <Card icon={<Coins className="w-5 h-5" />} title="Coins and Rewards">
              <ul className="space-y-3">
                <Bullet text="Please use your Coins before initiating deletion" />
                <Bullet text="Once the process begins, all unused Coins or rewards will be forfeited" />
                <Bullet text="Coins are non-refundable and cannot be transferred" />
              </ul>
              <div className="mt-4 rounded-xl px-4 py-3 text-xs sm:text-sm text-red-800 bg-red-50 border border-red-200">
                ⚠️ Unused Coins will be permanently lost after deletion begins.
              </div>
            </Card>

            {/* 6 — NEED HELP */}
            <Card icon={<HelpCircle className="w-5 h-5" />} title="Need Help?">
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
                If you face any issues during the account deletion process or have further questions,
                please reach out to us. Our support team is available{" "}
                <strong>Monday to Friday, 10:00 AM – 6:00 PM</strong>.
              </p>
              <a
                href="mailto:support@realfrnd.com"
                className="inline-flex items-center justify-center w-full text-white text-sm sm:text-base font-semibold py-2.5 rounded-xl transition-opacity hover:opacity-90 active:scale-[0.98]"
                style={{ background: "linear-gradient(135deg, #e91e8c, #2563eb)" }}
              >
                support@realfrnd.com
              </a>
            </Card>

          </div>
        </div>
      </div>

      <Footer />
      <DownloadBar />
    </div>
  );
}