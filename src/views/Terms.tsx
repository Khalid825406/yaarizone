import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { ParticlesBackground } from '../components/ui-custom/ParticlesBackground';
import { FileText, UserX, Ban, AlertTriangle, CheckCircle } from 'lucide-react';

const sections = [
  {
    id: 'introduction',
    icon: FileText,
    title: 'Introduction',
    content: `
      <p>Welcome to Yaari Zone! These Terms of Service govern your use of our mobile application, website, and services (collectively, the "Services"). By accessing or using our Services, you agree to be bound by these Terms.</p>
      <p class="mt-4">Yaari Zone is a social connection platform that allows users to chat, make video calls, and meet new people. We are committed to providing a safe, enjoyable experience for all our users.</p>
      <p class="mt-4">Please read these Terms carefully before using our Services. If you do not agree to these Terms, you may not access or use the Services.</p>
    `,
  },
  {
    id: 'responsibilities',
    icon: CheckCircle,
    title: 'User Responsibilities',
    content: `
      <p>As a user of Yaari Zone, you are responsible for:</p>
      <ul class="list-disc list-inside mt-4 space-y-2">
        <li>Providing accurate and complete information when creating your account</li>
        <li>Maintaining the security of your account credentials</li>
        <li>All activities that occur under your account</li>
        <li>Ensuring you are at least 13 years of age (or the minimum age in your jurisdiction)</li>
        <li>Complying with all applicable laws and regulations</li>
        <li>Respecting the rights and privacy of other users</li>
        <li>Reporting any unauthorized use of your account</li>
      </ul>
      <p class="mt-4">You agree to use the Services in a manner consistent with these Terms and all applicable laws.</p>
    `,
  },
  {
    id: 'prohibited',
    icon: Ban,
    title: 'Prohibited Activities',
    content: `
      <p>You may not use Yaari Zone for any illegal or unauthorized purpose. Specifically, you agree not to:</p>
      <ul class="list-disc list-inside mt-4 space-y-2">
        <li>Harass, abuse, or harm another person</li>
        <li>Post or transmit content that is illegal, harmful, threatening, abusive, or defamatory</li>
        <li>Impersonate any person or entity</li>
        <li>Use the Services for any commercial purpose without our prior written consent</li>
        <li>Attempt to gain unauthorized access to any portion of the Services</li>
        <li>Interfere with or disrupt the Services or servers</li>
        <li>Collect or store personal data about other users without their consent</li>
        <li>Share explicit or adult content</li>
        <li>Engage in spamming or unsolicited communications</li>
        <li>Use automated systems or software to extract data from the Services</li>
      </ul>
    `,
  },
  {
    id: 'termination',
    icon: UserX,
    title: 'Account Termination',
    content: `
      <p>We reserve the right to suspend or terminate your account at any time, with or without notice, for any reason, including but not limited to:</p>
      <ul class="list-disc list-inside mt-4 space-y-2">
        <li>Violation of these Terms of Service</li>
        <li>Engaging in prohibited activities</li>
        <li>Creating a risk or possible legal exposure for Yaari Zone</li>
        <li>Extended periods of inactivity</li>
        <li>At your request</li>
      </ul>
      <p class="mt-4">Upon termination:</p>
      <ul class="list-disc list-inside mt-4 space-y-2">
        <li>Your right to use the Services immediately ceases</li>
        <li>We may delete your account and all associated data</li>
        <li>Provisions of these Terms that by their nature should survive termination shall survive</li>
      </ul>
      <p class="mt-4">You may terminate your account at any time by contacting our support team or using the account deletion feature in the app settings.</p>
    `,
  },
];

export function Terms() {
  return (
    <div className="relative min-h-screen bg-background overflow-x-hidden">
      <ParticlesBackground />
      <Navbar />

      <main className="relative z-10 pt-32 pb-20">
        <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20 mb-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6">
              <FileText className="w-4 h-4 text-yaari-blue-light" />
              <span className="text-white/80 text-sm font-medium">Legal</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Terms of <span className="gradient-text">Service</span>
            </h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Please read these terms carefully before using Yaari Zone. By using our services, you agree to these terms.
            </p>
            <p className="text-white/40 text-sm mt-4">Last updated: March 18, 2026</p>
          </div>
        </div>

        <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
          <div className="max-w-4xl mx-auto space-y-8">
            {sections.map((section) => (
              <section key={section.id} id={section.id} className="glass-card p-8 lg:p-10 scroll-mt-32">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-yaari-blue to-yaari-pink flex items-center justify-center flex-shrink-0">
                    <section.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-white mb-4">{section.title}</h2>
                    <div
                      className="text-white/70 leading-relaxed prose prose-invert max-w-none"
                      dangerouslySetInnerHTML={{ __html: section.content }}
                    />
                  </div>
                </div>
              </section>
            ))}

            <section className="glass-card-strong p-8 lg:p-10 text-center">
              <AlertTriangle className="w-12 h-12 text-yaari-pink mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-white mb-4">Have Questions?</h2>
              <p className="text-white/60 mb-6">
                If you have any questions about these Terms of Service, please contact our support team.
              </p>
              <a href="mailto:support@yaarizone.com" className="btn-gradient-blue inline-flex items-center gap-2">
                Contact Support
              </a>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Terms;
