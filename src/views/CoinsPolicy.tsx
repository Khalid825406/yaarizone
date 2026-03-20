"use client";

import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { DownloadBar } from "@/components/sections/Downloadbar";
import { HeroBanner } from "./Herobanner";
import {
  Gift,
  Coins,
  Clock,
  RefreshCcw,
  ShieldAlert,
  Trash2,
  FileEdit,
  Mail,
  CheckCircle2,
  AlertTriangle,
} from "lucide-react";

const GRADIENT = "linear-gradient(135deg, #e91e8c, #2563eb)";

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
        <div
          className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-xl text-white shrink-0"
          style={{ background: GRADIENT }}
        >
          {icon}
        </div>
        <h2 className="text-base sm:text-lg font-bold text-gray-900">{title}</h2>
      </div>
      {children}
    </div>
  );
}

function Bullet({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-2.5 text-sm sm:text-base text-gray-700">
      <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0" style={{ color: "#e91e8c" }} />
      <span>{text}</span>
    </li>
  );
}

function Warning({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-4 flex items-start gap-2.5 rounded-xl px-4 py-3 text-xs sm:text-sm text-yellow-900 bg-yellow-50 border border-yellow-200">
      <AlertTriangle className="w-4 h-4 mt-0.5 text-yellow-600 shrink-0" />
      <span>{children}</span>
    </div>
  );
}

export default function CoinsPolicy() {
  return (
    <div className="bg-[#0b1220] text-white min-h-screen">
      <Navbar />

      <HeroBanner title="Coins Policy" />

      <div className="max-w-[84rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="bg-gray-50 text-black rounded-2xl shadow-lg p-5 sm:p-8 md:p-10 border border-gray-200">

          {/* LAST UPDATED */}
          <p className="mb-5 font-medium text-sm sm:text-base">
            <strong>Last Updated:</strong> 3rd Sep, 2025
          </p>

          {/* INTRO */}
          <div
            className="rounded-xl p-4 sm:p-5 mb-8 text-sm sm:text-base text-gray-700 leading-relaxed border"
            style={{ borderColor: "#e91e8c33", background: "linear-gradient(135deg, #fdf2f8, #eff6ff)" }}
          >
            The Coins feature on Yaari Zone is developed to make your interactions on the platform more
            engaging, rewarding, and enjoyable. Coins are a virtual currency and are subject to the
            following terms and conditions. By purchasing, earning, or using Coins, you agree to this
            Coins Policy as well as our <strong>Terms of Use</strong> and{" "}
            <strong>Community Guidelines</strong>.
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">

            {/* 1 — EARNING COINS */}
            <Card icon={<Gift className="w-5 h-5" />} title="1. Earning Coins">
              <p className="text-sm sm:text-base text-gray-600 mb-3">
                You may obtain Coins in the following ways:
              </p>
              <ul className="space-y-3">
                <Bullet text="Purchase: Buying Coins through in-app purchases using available payment methods (e.g., UPI, debit/credit card, app store billing)." />
                <Bullet text="Rewards & Promotions: Earning Coins via referral programs, bonuses, or promotional campaigns." />
                <Bullet text="Activities: Completing specific tasks or events as may be introduced from time to time." />
              </ul>
              <Warning>
                Promotional or free Coins may have a limited validity and may expire if not used within
                the specified time.
              </Warning>
            </Card>

            {/* 2 — USING COINS */}
            <Card icon={<Coins className="w-5 h-5" />} title="2. Using Coins">
              <ul className="space-y-3">
                <Bullet text="Coins can be utilised to participate in audio/video calls with hosts." />
                <Bullet text="The ways Coins can be used are subject to change at any time." />
                <Bullet text="We reserve the right to add, remove, or modify features that require Coins without prior notice." />
              </ul>
            </Card>

            {/* 3 — VALIDITY */}
            <Card icon={<Clock className="w-5 h-5" />} title="3. Validity of Coins">
              <ul className="space-y-3">
                <Bullet text="Purchased Coins generally do not expire unless otherwise specified." />
                <Bullet text="Bonus or promotional Coins may have an expiry date, which will be specified at the time of issuance." />
                <Bullet text="Once expired, Coins cannot be restored, refunded, or reissued." />
              </ul>
            </Card>

            {/* 4 — REFUNDS */}
            <Card icon={<RefreshCcw className="w-5 h-5" />} title="4. Refunds and Cancellations">
              <ul className="space-y-3">
                <Bullet text="All Coin purchases are final and non-refundable." />
                <Bullet text="No partial or full refunds will be issued for unused Coins, except where required by law." />
                <Bullet text="In the event of payment errors, duplicate charges, or technical issues, users can contact Yaari Zone Support for assistance." />
              </ul>
              <Warning>
                Valid claims will be reviewed and resolved in accordance with our refund process.
              </Warning>
            </Card>

            {/* 5 — MISUSE (full width on sm+) */}
            <div className="sm:col-span-2">
              <Card icon={<ShieldAlert className="w-5 h-5" />} title="5. Misuse and Fraud Prevention">
                <p className="text-sm sm:text-base text-gray-600 mb-3">
                  Users must use Coins fairly and responsibly. Any attempt to manipulate or exploit the
                  Coins system is strictly prohibited.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm font-semibold text-gray-800 mb-2">Prohibited actions:</p>
                    <ul className="space-y-2.5">
                      <Bullet text="Hacking, cheating, or unauthorised transactions" />
                      <Bullet text="Attempting to transfer or trade Coins outside the Yaari Zone platform" />
                      <Bullet text="Using fraudulent payment methods or raising false disputes/chargebacks" />
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-800 mb-2">Violations may result in:</p>
                    <ul className="space-y-2.5">
                      <Bullet text="Suspension or permanent termination of your account" />
                      <Bullet text="Confiscation of Coins or rewards" />
                      <Bullet text="Legal action, wherever applicable" />
                    </ul>
                  </div>
                </div>
              </Card>
            </div>

            {/* 6 — ACCOUNT DELETION */}
            <Card icon={<Trash2 className="w-5 h-5" />} title="6. Account Deletion and Coins">
              <ul className="space-y-3">
                <Bullet text="If you delete your account, any remaining Coins in your balance will be forfeited permanently." />
                <Bullet text="Coins are non-refundable and cannot be reclaimed once the deletion process begins." />
                <Bullet text="We encourage users to utilise their Coins before initiating account deletion." />
              </ul>
              <div className="mt-4 rounded-xl px-4 py-3 text-xs sm:text-sm text-red-800 bg-red-50 border border-red-200">
                ⚠️ Unused Coins will be permanently lost once account deletion begins.
              </div>
            </Card>

            {/* 7 — CHANGES */}
            <Card icon={<FileEdit className="w-5 h-5" />} title="7. Changes to Coins Policy">
              <ul className="space-y-3">
                <Bullet text="Yaari Zone reserves the right to modify, suspend, or discontinue the Coins system at any time." />
                <Bullet text="Such changes may include pricing, validity, earning methods, or usage options." />
                <Bullet text="Any updates will be communicated via email, in-app, or on our official website." />
                <Bullet text="Continued use of Coins after changes indicates acceptance of the updated policy." />
              </ul>
            </Card>

            {/* 8 — CONTACT (full width) */}
            <div className="sm:col-span-2">
              <Card icon={<Mail className="w-5 h-5" />} title="8. Contact Us">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed max-w-lg">
                    For questions or concerns related to Coins, please contact us. Our support team is
                    available <strong>Monday to Friday, 10:00 AM – 6:00 PM</strong>.
                  </p>
                  <a
                    href="mailto:support@yaarizone.com"
                    className="inline-flex items-center justify-center gap-2 text-white text-sm sm:text-base font-semibold px-6 py-2.5 rounded-xl transition-opacity hover:opacity-90 active:scale-[0.98] whitespace-nowrap shrink-0"
                    style={{ background: GRADIENT }}
                  >
                    <Mail className="w-4 h-4" />
                    support@yaarizone.com
                  </a>
                </div>
              </Card>
            </div>

          </div>
        </div>
      </div>

      <Footer />
      <DownloadBar />
    </div>
  );
}