'use client';

import { useState } from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { DownloadBar } from '@/components/sections/Downloadbar';
import { HeroBanner } from './Herobanner';
import {
  Trash2,
  ShieldAlert,
  Clock,
  AlertTriangle,
  CheckCircle2,
  Phone,
  Mail,
  ChevronRight,
  Info,
} from 'lucide-react';

const GRADIENT = 'linear-gradient(135deg, #e91e8c, #2563eb)';
const GRADIENT_RED = 'linear-gradient(135deg, #ef4444, #b91c1c)';

export default function DeleteRequest() {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [contactType, setContactType] = useState<'phone' | 'email'>('phone');
  const [contactValue, setContactValue] = useState('');
  const [reason, setReason] = useState('');
  const [confirmed, setConfirmed] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  function handleNext() {
    if (!contactValue.trim()) {
      setError('Please enter your registered ' + (contactType === 'phone' ? 'mobile number' : 'email address') + '.');
      return;
    }
    if (contactType === 'phone' && !/^[6-9]\d{9}$/.test(contactValue.trim())) {
      setError('Please enter a valid 10-digit Indian mobile number.');
      return;
    }
    if (contactType === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contactValue.trim())) {
      setError('Please enter a valid email address.');
      return;
    }
    setError('');
    setStep(2);
  }

  function handleSubmit() {
    if (!confirmed) {
      setError('Please confirm that you understand the account deletion is permanent.');
      return;
    }
    setError('');
    setSubmitted(true);
    setStep(3);
  }

  return (
    <div className="bg-[#0b1220] text-white min-h-screen">
      <Navbar />

      <HeroBanner title="Delete Account" />

      <div className="max-w-[84rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="max-w-2xl mx-auto space-y-6">

          {/* ── INFO CARDS ── */}
          {!submitted && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <InfoCard
                icon={<Trash2 className="w-5 h-5" />}
                title="Permanent Deletion"
                desc="Your profile, chat history, and coins will be permanently removed."
              />
              <InfoCard
                icon={<Clock className="w-5 h-5" />}
                title="Within 7 Days"
                desc="Your account will be deleted within 7 days of your verified request."
              />
              <InfoCard
                icon={<ShieldAlert className="w-5 h-5" />}
                title="Legal Retention"
                desc="Some data may be retained for legal and security purposes for a limited period."
              />
            </div>
          )}

          {/* ── STEP INDICATOR ── */}
          {!submitted && (
            <div className="flex items-center justify-center gap-2 text-sm font-medium">
              <StepDot active={step >= 1} done={step > 1} label="Verify" />
              <div className={`h-px w-10 transition-all duration-500 ${step > 1 ? 'bg-pink-500' : 'bg-gray-600'}`} />
              <StepDot active={step >= 2} done={step > 2} label="Confirm" />
              <div className={`h-px w-10 transition-all duration-500 ${step > 2 ? 'bg-pink-500' : 'bg-gray-600'}`} />
              <StepDot active={step >= 3} done={step > 2} label="Done" />
            </div>
          )}

          {/* ── FORM CARD ── */}
          <div className="bg-white text-black rounded-2xl shadow-lg border overflow-hidden">

            {/* Card Header */}
            <div className="px-6 py-5 border-b" style={{ background: 'linear-gradient(135deg, #fdf2f8, #eff6ff)' }}>
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 flex items-center justify-center rounded-xl text-white shrink-0"
                  style={{ background: submitted ? 'linear-gradient(135deg,#22c55e,#16a34a)' : GRADIENT_RED }}
                >
                  {submitted ? <CheckCircle2 className="w-5 h-5" /> : <Trash2 className="w-5 h-5" />}
                </div>
                <div>
                  <h2 className="text-base sm:text-lg font-bold text-gray-900">
                    {submitted ? 'Request Submitted' : step === 1 ? 'Verify Your Identity' : 'Confirm Deletion'}
                  </h2>
                  <p className="text-xs sm:text-sm text-gray-500">
                    {submitted
                      ? 'Your account deletion request has been received.'
                      : step === 1
                      ? 'Enter your registered mobile number or email to proceed.'
                      : 'Please read carefully before confirming.'}
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 space-y-5">

              {/* ── STEP 1: IDENTITY ── */}
              {step === 1 && (
                <>
                  {/* Toggle */}
                  <div className="flex rounded-xl border overflow-hidden text-sm font-semibold">
                    <button
                      onClick={() => { setContactType('phone'); setContactValue(''); setError(''); }}
                      className={`flex-1 flex items-center justify-center gap-2 py-2.5 transition-all ${
                        contactType === 'phone' ? 'text-white' : 'text-gray-500 bg-gray-50 hover:bg-gray-100'
                      }`}
                      style={contactType === 'phone' ? { background: GRADIENT } : {}}
                    >
                      <Phone className="w-4 h-4" />
                      Mobile Number
                    </button>
                    <button
                      onClick={() => { setContactType('email'); setContactValue(''); setError(''); }}
                      className={`flex-1 flex items-center justify-center gap-2 py-2.5 transition-all ${
                        contactType === 'email' ? 'text-white' : 'text-gray-500 bg-gray-50 hover:bg-gray-100'
                      }`}
                      style={contactType === 'email' ? { background: GRADIENT } : {}}
                    >
                      <Mail className="w-4 h-4" />
                      Email Address
                    </button>
                  </div>

                  {/* Input */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">
                      {contactType === 'phone' ? 'Registered Mobile Number' : 'Registered Email Address'}
                    </label>
                    <input
                      type={contactType === 'phone' ? 'tel' : 'email'}
                      placeholder={contactType === 'phone' ? 'e.g. 9876543210' : 'e.g. you@example.com'}
                      value={contactValue}
                      onChange={(e) => { setContactValue(e.target.value); setError(''); }}
                      className="w-full border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
                    />
                  </div>

                  {/* Reason (optional) */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">
                      Reason for Deletion <span className="font-normal normal-case text-gray-400">(Optional)</span>
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Let us know why you're leaving (optional)..."
                      value={reason}
                      onChange={(e) => setReason(e.target.value)}
                      className="w-full border rounded-xl px-4 py-3 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
                    />
                  </div>

                  {error && <ErrorMsg text={error} />}

                  <button
                    onClick={handleNext}
                    className="w-full flex items-center justify-center gap-2 text-white font-semibold py-3 rounded-xl transition-opacity hover:opacity-90 active:scale-[0.98] text-sm sm:text-base"
                    style={{ background: GRADIENT }}
                  >
                    Continue
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </>
              )}

              {/* ── STEP 2: CONFIRM ── */}
              {step === 2 && (
                <>
                  {/* Summary */}
                  <div className="bg-gray-50 border rounded-xl p-4 space-y-2 text-sm">
                    <p className="font-semibold text-gray-700 mb-2">Request Summary</p>
                    <p className="text-gray-600">
                      <span className="font-medium text-gray-800">
                        {contactType === 'phone' ? 'Mobile: ' : 'Email: '}
                      </span>
                      {contactValue}
                    </p>
                    {reason && (
                      <p className="text-gray-600">
                        <span className="font-medium text-gray-800">Reason: </span>
                        {reason}
                      </p>
                    )}
                  </div>

                  {/* Warning box */}
                  <div className="rounded-xl border border-red-200 bg-red-50 p-4 space-y-2.5 text-sm text-red-800">
                    <div className="flex items-center gap-2 font-bold text-red-700">
                      <AlertTriangle className="w-4 h-4 shrink-0" />
                      This action cannot be undone
                    </div>
                    <ul className="space-y-1.5 text-red-700 pl-1">
                      {[
                        'Your profile and account information will be permanently deleted.',
                        'All chat history and messages will be erased.',
                        'Your coins and in-app balance will be forfeited.',
                        'You will lose access to all features and data immediately.',
                        'Some data may be retained for legal and security purposes for a limited period.',
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="mt-1 w-1.5 h-1.5 rounded-full bg-red-400 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Checkbox */}
                  <label className="flex items-start gap-3 cursor-pointer select-none text-sm text-gray-700">
                    <input
                      type="checkbox"
                      checked={confirmed}
                      onChange={(e) => { setConfirmed(e.target.checked); setError(''); }}
                      className="mt-0.5 w-4 h-4 accent-pink-600 shrink-0"
                    />
                    I understand that deleting my account is <strong className="ml-1">permanent and irreversible</strong>, and I wish to proceed.
                  </label>

                  {error && <ErrorMsg text={error} />}

                  <div className="flex gap-3">
                    <button
                      onClick={() => { setStep(1); setError(''); setConfirmed(false); }}
                      className="flex-1 py-3 rounded-xl border text-sm font-semibold text-gray-600 hover:bg-gray-50 transition"
                    >
                      Go Back
                    </button>
                    <button
                      onClick={handleSubmit}
                      className="flex-1 flex items-center justify-center gap-2 text-white font-semibold py-3 rounded-xl transition-opacity hover:opacity-90 active:scale-[0.98] text-sm"
                      style={{ background: GRADIENT_RED }}
                    >
                      <Trash2 className="w-4 h-4" />
                      Delete My Account
                    </button>
                  </div>
                </>
              )}

              {/* ── STEP 3: SUCCESS ── */}
              {step === 3 && (
                <div className="text-center py-4 space-y-4">
                  <div className="flex justify-center">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center"
                      style={{ background: 'linear-gradient(135deg,#22c55e,#16a34a)' }}>
                      <CheckCircle2 className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">Request Received</h3>
                    <p className="text-sm text-gray-600 leading-relaxed max-w-sm mx-auto">
                      Your account deletion request has been submitted successfully. Your account and
                      all associated data will be permanently deleted within <strong>7 days</strong>.
                    </p>
                  </div>
                  <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-sm text-blue-800 text-left flex items-start gap-2">
                    <Info className="w-4 h-4 mt-0.5 shrink-0 text-blue-500" />
                    <span>
                      Some data may be retained for legal and security purposes for a limited period
                      as per our Privacy Policy. For queries, contact us at{' '}
                      <a href="mailto:deepakshakya9766@gmail.com" className="font-semibold underline">
                        deepakshakya9766@gmail.com
                      </a>.
                    </span>
                  </div>
                </div>
              )}

            </div>
          </div>

          {/* ── NEED HELP ── */}
          {!submitted && (
            <div className="bg-white text-black rounded-2xl border p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <p className="font-semibold text-gray-900 text-sm sm:text-base">Need help instead?</p>
                <p className="text-xs sm:text-sm text-gray-500 mt-0.5">
                  If you're facing an issue, our support team can help you resolve it.
                </p>
              </div>
              <a
                href="mailto:deepakshakya9766@gmail.com"
                className="inline-flex items-center gap-2 text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-opacity hover:opacity-90 whitespace-nowrap shrink-0"
                style={{ background: GRADIENT }}
              >
                <Mail className="w-4 h-4" />
                Contact Support
              </a>
            </div>
          )}

        </div>
      </div>

      <Footer />
      <DownloadBar />
    </div>
  );
}

// ── HELPERS ───────────────────────────────────────────────────────
function InfoCard({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div className="bg-white text-black rounded-2xl border p-4 sm:p-5 shadow-sm">
      <div className="flex items-center gap-2.5 mb-2">
        <div
          className="w-8 h-8 flex items-center justify-center rounded-lg text-white shrink-0"
          style={{ background: GRADIENT }}
        >
          {icon}
        </div>
        <p className="font-bold text-sm text-gray-900">{title}</p>
      </div>
      <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">{desc}</p>
    </div>
  );
}

function StepDot({ active, done, label }: { active: boolean; done: boolean; label: string }) {
  return (
    <div className="flex flex-col items-center gap-1">
      <div
        className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${
          done ? 'text-white' : active ? 'text-white' : 'bg-gray-700 text-gray-400'
        }`}
        style={active || done ? { background: done ? 'linear-gradient(135deg,#22c55e,#16a34a)' : GRADIENT } : {}}
      >
        {done ? <CheckCircle2 className="w-4 h-4" /> : label[0]}
      </div>
      <span className={`text-xs ${active ? 'text-white' : 'text-gray-500'}`}>{label}</span>
    </div>
  );
}

function ErrorMsg({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-2 text-red-600 text-xs sm:text-sm bg-red-50 border border-red-200 rounded-lg px-3 py-2">
      <AlertTriangle className="w-4 h-4 shrink-0" />
      {text}
    </div>
  );
}