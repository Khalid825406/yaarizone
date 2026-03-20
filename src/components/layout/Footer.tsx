'use client';

import Link from 'next/link';
import {
  Instagram,
  Twitter,
  Facebook,
  Youtube,
  Mail,
} from 'lucide-react';

const socialLinks = [
  { Icon: Instagram, label: 'Instagram', href: '#' },
  { Icon: Twitter, label: 'Twitter', href: '#' },
  { Icon: Facebook, label: 'Facebook', href: '#' },
  { Icon: Youtube, label: 'YouTube', href: '#' },
];

const footerLinks = [
  {
    links: [
      { label: 'About Us', href: '#about' },
      { label: 'Terms & Conditions', href: '/terms' },
      { label: 'Privacy Policy', href: '/privacy' },
    ],
  },
  {
    links: [
      { label: 'Account Deletion', href: '#' },
      { label: 'Become a Host', href: '#' },
      { label: 'Blogs', href: '#' },
    ],
  },
  {
    links: [
      { label: 'Coins Policy', href: '#' },
      { label: 'Community Guidelines', href: '#' },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-[#070B14] text-white">

      {/* ── CONTACT BAND ── */}
      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-[114px] py-8 sm:py-10 lg:py-12 border-b border-white/10">
        <div className="flex flex-col sm:flex-row justify-between gap-6 sm:items-center">

          {/* Left text */}
          <div>
            <h2 className="text-base sm:text-lg font-semibold mb-1.5 sm:mb-2 tracking-wide">
              CONTACT US
            </h2>
            <p className="text-white/60 max-w-sm text-xs sm:text-sm leading-relaxed">
              We're here for you! Our trained experts are ready to help you anytime.
            </p>
          </div>

          {/* Mail card — pink → blue gradient (logo colors) */}
          <a
            href="mailto:support@yaarizone.com"
            className="px-5 py-3.5 sm:px-6 sm:py-4
              rounded-2xl flex items-center gap-3 sm:gap-4
              w-full sm:w-auto
              hover:brightness-110 active:scale-[0.98]
              transition-all duration-200"
            style={{
              background: "linear-gradient(90deg, #E91E8C 0%, #1565D8 100%)",
              boxShadow: "0 4px 20px rgba(233,30,140,0.25)",
            }}
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center bg-white/10 rounded-lg shrink-0">
              <Mail className="text-white w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div className="min-w-0">
              <p className="text-xs sm:text-sm text-white/70">Mail Us:</p>
              <p className="font-semibold text-white text-sm sm:text-base truncate">
                support@yaarizone.com
              </p>
            </div>
          </a>

        </div>
      </div>

      {/* ── MAIN FOOTER GRID ── */}
      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-[114] py-10 sm:py-12">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">

          {/* BRAND + SOCIAL */}
          <div className="col-span-2 lg:col-span-1 ">
            {/* Brand name — pink → blue gradient text */}
            <span
              className="text-2xl sm:text-2xl text-white "
              style={{ fontFamily: "'Pacifico', cursive" }}
            >
              YaariZone
            </span>
            <p className="text-white/50 text-xs sm:text-sm mb-5 max-w-xs leading-relaxed mt-[15px]">
              Connecting real people through real conversations.
            </p>

            {/* Social icons — pink glow on hover */}
            <div className="flex gap-2.5 sm:gap-3">
              {socialLinks.map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center
                    rounded-full bg-white/10 active:scale-95
                    transition-all duration-200"
                  style={{ ["--hover-bg" as string]: "rgba(233,30,140,0.25)" }}
                  onMouseEnter={e => (e.currentTarget.style.background = "rgba(233,30,140,0.25)")}
                  onMouseLeave={e => (e.currentTarget.style.background = "rgba(255,255,255,0.10)")}
                >
                  <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* LINK COLUMNS */}
          {footerLinks.map((group, gi) => (
            <div key={gi} className="space-y-3">
              {group.links.map(({ label, href }) => (
                <Link
                  key={label}
                  href={href}
                  className="block text-white/60 hover:text-white text-xs sm:text-sm
                    transition-colors duration-200 leading-relaxed"
                >
                  {label}
                </Link>
              ))}
            </div>
          ))}

        </div>
      </div>

      {/* ── COPYRIGHT ── */}
      <div className="border-t border-white/10">
        <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-[114px] py-5 sm:py-6
          flex flex-col sm:flex-row items-center justify-between gap-2 text-white/40 text-xs sm:text-sm">
          <span>
            Copyright © {new Date().getFullYear()} – Yaari Zone | All rights reserved
          </span>
          <span className="hidden sm:block">Made with ♥ Brave Solution</span>
        </div>
      </div>

    </footer>
  );
}