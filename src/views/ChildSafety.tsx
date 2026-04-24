'use client';

import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { DownloadBar } from '@/components/sections/Downloadbar';
import { HeroBanner } from './Herobanner';
import {
  ShieldCheck,
  Ban,
  Flag,
  AlertTriangle,
  UserX,
  Eye,
  Lock,
  PhoneCall,
  Mail,
  CheckCircle2,
  Gavel,
  HeartHandshake,
} from 'lucide-react';

const GRADIENT = 'linear-gradient(135deg, #e91e8c, #2563eb)';

function Section({ title }: { title: string }) {
  return (
    <h2 className="text-base sm:text-lg lg:text-xl font-bold mt-8 mb-4 text-black border-l-4 border-blue-600 pl-3">
      {title}
    </h2>
  );
}

function PolicyCard({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-gray-50 border border-gray-100 rounded-2xl p-5 sm:p-6 shadow-sm">
      <div className="flex items-center gap-3 mb-3">
        <div
          className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-xl text-white shrink-0"
          style={{ background: GRADIENT }}
        >
          {icon}
        </div>
        <h3 className="text-sm sm:text-base font-bold text-gray-900">{title}</h3>
      </div>
      {children}
    </div>
  );
}

function Bullet({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-2.5 text-sm sm:text-base text-gray-700">
      <CheckCircle2
        className="w-4 h-4 mt-0.5 shrink-0"
        style={{ color: '#e91e8c' }}
      />
      <span>{text}</span>
    </li>
  );
}

function ProhibitedItem({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-2.5 text-sm sm:text-base text-red-700">
      <Ban className="w-4 h-4 mt-0.5 shrink-0 text-red-500" />
      <span>{text}</span>
    </li>
  );
}

export default function ChildSafety() {
  return (
    <div className="bg-[#0b1220] text-white min-h-screen">
      <Navbar />

      <HeroBanner title="Child Safety Standards" />

      <div className="max-w-[84rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="bg-white text-black rounded-2xl shadow-lg p-5 sm:p-8 md:p-10 border leading-relaxed">

          {/* LAST UPDATED */}
          <p className="mb-6 font-medium text-sm sm:text-base">
            <strong>Last Updated:</strong> 17 Sep, 2025
          </p>

          {/* ── HERO STATEMENT ── */}
          <div
            className="rounded-2xl p-5 sm:p-6 mb-8 border"
            style={{
              borderColor: '#e91e8c33',
              background: 'linear-gradient(135deg, #fdf2f8, #eff6ff)',
            }}
          >
            <div className="flex items-center gap-3 mb-3">
              <div
                className="w-10 h-10 flex items-center justify-center rounded-xl text-white shrink-0"
                style={{ background: GRADIENT }}
              >
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h2 className="text-base sm:text-lg font-bold text-gray-900">
                Our Commitment to Child Safety
              </h2>
            </div>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              Yaari Zone is strictly a platform for users aged{' '}
              <strong>18 and above</strong>. We have an absolute{' '}
              <strong>zero-tolerance policy</strong> for child sexual abuse and
              exploitation (CSAE) or any content, behaviour, or activity
              involving minors in a harmful, sexual, or exploitative manner. The
              safety and dignity of children is non-negotiable, and we actively
              work to ensure our platform remains free from any such content or
              conduct.
            </p>
          </div>

          {/* ── PROHIBITED CONTENT ── */}
          <Section title="STRICTLY PROHIBITED CONTENT & BEHAVIOUR" />

          <div
            className="rounded-2xl border border-red-200 bg-red-50 p-5 sm:p-6 mb-8"
          >
            <div className="flex items-center gap-2.5 mb-4">
              <AlertTriangle className="w-5 h-5 text-red-600 shrink-0" />
              <p className="font-bold text-red-700 text-sm sm:text-base">
                The following are strictly prohibited on Yaari Zone and will
                result in immediate account termination and reporting to
                authorities:
              </p>
            </div>
            <ul className="space-y-3">
              <ProhibitedItem text="Child Sexual Abuse Material (CSAM) of any kind — including images, videos, illustrations, or any other form of media." />
              <ProhibitedItem text="Nudity or sexual content involving minors, whether real or simulated." />
              <ProhibitedItem text="Grooming, solicitation, or any form of exploitative communication directed at minors." />
              <ProhibitedItem text="Sharing, distributing, or requesting content that sexualises or endangers children." />
              <ProhibitedItem text="Any behaviour, content, or activity that facilitates harm, abuse, or exploitation of minors." />
              <ProhibitedItem text="Impersonation of a minor or misrepresentation of age to gain access to the Platform." />
            </ul>
          </div>

          {/* ── SAFETY MEASURES ── */}
          <Section title="SAFETY MEASURES ON OUR PLATFORM" />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 mb-8">
            <PolicyCard icon={<Flag className="w-5 h-5" />} title="In-App Reporting System">
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                Every user can report harmful or inappropriate content directly
                within the app. Reports are reviewed promptly by our moderation
                team and appropriate action is taken without delay.
              </p>
            </PolicyCard>

            <PolicyCard icon={<UserX className="w-5 h-5" />} title="Block & Ban Functionality">
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                Users can block any account at any time to prevent further
                contact. Accounts found in violation of child safety policies
                are permanently banned and reported to relevant law enforcement
                authorities.
              </p>
            </PolicyCard>

            <PolicyCard icon={<Eye className="w-5 h-5" />} title="Continuous Moderation & Monitoring">
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                Our platform employs continuous moderation to detect and remove
                policy-violating content. We monitor activity patterns to
                identify and act against any behaviour that could pose a risk to
                minors or other users.
              </p>
            </PolicyCard>

            <PolicyCard icon={<Lock className="w-5 h-5" />} title="Immediate Account Suspension">
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                Any account found engaging in conduct that violates our child
                safety policy is immediately suspended or permanently terminated.
                We do not issue warnings for CSAE-related violations — action is
                taken instantly.
              </p>
            </PolicyCard>

            <PolicyCard icon={<Gavel className="w-5 h-5" />} title="Law Enforcement Cooperation">
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                We actively cooperate with law enforcement agencies and comply
                with all applicable Indian and international laws regarding child
                safety, including the Protection of Children from Sexual Offences
                (POCSO) Act, 2012, and the IT Act, 2000.
              </p>
            </PolicyCard>

            <PolicyCard icon={<HeartHandshake className="w-5 h-5" />} title="Age Verification & Access Control">
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                Registration on Yaari Zone requires users to confirm they are 18
                years of age or older. Accounts found to belong to minors are
                immediately removed. We take deliberate steps to prevent
                underage access to our platform.
              </p>
            </PolicyCard>
          </div>

          {/* ── REPORTING ── */}
          <Section title="HOW TO REPORT CHILD SAFETY CONCERNS" />

          <p className="mb-5 text-sm sm:text-base text-gray-700 leading-relaxed">
            If you encounter any content or behaviour on Yaari Zone that you
            believe poses a risk to a child's safety, we urge you to report it
            immediately using any of the following methods:
          </p>

          <div className="space-y-4 mb-8">
            <div className="border rounded-xl p-4 sm:p-5 bg-gray-50">
              <p className="font-semibold text-sm sm:text-base mb-1 flex items-center gap-2">
                <Flag className="w-4 h-4 text-pink-500" />
                In-App Report
              </p>
              <p className="text-sm sm:text-base text-gray-700">
                Tap the <strong>"Report"</strong> option on any profile or
                content within the Yaari Zone app. Select the relevant category
                and submit your report. Our team will review it promptly.
              </p>
            </div>

            <div className="border rounded-xl p-4 sm:p-5 bg-gray-50">
              <p className="font-semibold text-sm sm:text-base mb-1 flex items-center gap-2">
                <Mail className="w-4 h-4 text-pink-500" />
                Email Us Directly
              </p>
              <p className="text-sm sm:text-base text-gray-700">
                Send a detailed report with any relevant evidence to our
                dedicated child safety contact:{' '}
                <a
                  href="mailto:deepakshaky615@gmail.com"
                  className="text-blue-600 hover:underline font-medium"
                >
                  deepakshaky615@gmail.com
                </a>
                . We treat all child safety reports with the highest priority.
              </p>
            </div>

            <div className="border rounded-xl p-4 sm:p-5 bg-gray-50">
              <p className="font-semibold text-sm sm:text-base mb-1 flex items-center gap-2">
                <PhoneCall className="w-4 h-4 text-pink-500" />
                Contact Authorities
              </p>
              <p className="text-sm sm:text-base text-gray-700">
                If you believe a child is in immediate danger, please contact
                your local law enforcement or the{' '}
                <strong>National Cyber Crime Helpline (India): 1930</strong> or
                file a report at{' '}
                <a
                  href="https://cybercrime.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline font-medium"
                >
                  cybercrime.gov.in
                </a>
                .
              </p>
            </div>
          </div>

          {/* ── LEGAL COMPLIANCE ── */}
          <Section title="LEGAL COMPLIANCE" />

          <p className="mb-5 text-sm sm:text-base text-gray-700 leading-relaxed">
            Yaari Zone complies fully with all applicable laws related to child
            safety and protection, including:
          </p>

          <ul className="space-y-2.5 mb-8">
            <Bullet text="Protection of Children from Sexual Offences (POCSO) Act, 2012" />
            <Bullet text="Information Technology Act, 2000 [S. 67B — Punishment for publishing child sexually abusive material]" />
            <Bullet text="Juvenile Justice (Care and Protection of Children) Act, 2015" />
            <Bullet text="Bharatiya Nyaya Sanhita, 2023 — provisions relating to offences against children" />
            <Bullet text="IT (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021" />
          </ul>

          {/* ── CONTACT CARD ── */}
          <div className="bg-gray-50 border rounded-xl p-4 sm:p-6 space-y-2 text-sm sm:text-base">
            <p className="font-semibold text-gray-800 mb-3">
              Child Safety Contact:
            </p>
            <p>
              <strong>Platform:</strong> Yaari Zone
            </p>
            <p>
              <strong>Operated by:</strong> Shakya Technology
            </p>
            <p>
              <strong>Email:</strong>{' '}
              <a
                href="mailto:deepakshaky615@gmail.com"
                className="text-blue-600 hover:underline"
              >
                deepakshaky615@gmail.com
              </a>
            </p>
            <p>
              <strong>Response Time:</strong> Within 24 hours for child safety
              concerns
            </p>
            <p className="text-gray-500 text-xs sm:text-sm pt-3 border-t mt-3">
              We are committed to maintaining a safe, responsible, and
              child-protective environment on Yaari Zone. All reports are
              treated with the utmost seriousness and confidentiality.
            </p>
          </div>

        </div>
      </div>

      <Footer />
      <DownloadBar />
    </div>
  );
}