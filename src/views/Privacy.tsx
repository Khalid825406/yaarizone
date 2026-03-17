import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { ParticlesBackground } from '../components/ui-custom/ParticlesBackground';
import { Shield, Database, Lock, Cookie, Eye, Mail } from 'lucide-react';

const sections = [
  {
    id: 'collection',
    icon: Database,
    title: 'Information Collection',
    content: `
      <p>We collect information to provide better services to our users. The types of information we collect include:</p>
      <h4 class="text-white font-semibold mt-4 mb-2">Information You Provide</h4>
      <ul class="list-disc list-inside space-y-2">
        <li>Account information (name, email, phone number, date of birth)</li>
        <li>Profile information (profile picture, bio, interests)</li>
        <li>Content you create, upload, or receive (messages, photos, videos)</li>
        <li>Communications with our support team</li>
      </ul>
      <h4 class="text-white font-semibold mt-4 mb-2">Information Automatically Collected</h4>
      <ul class="list-disc list-inside space-y-2">
        <li>Device information (model, operating system, unique identifiers)</li>
        <li>Log information (IP address, access times, pages viewed)</li>
        <li>Location information (with your consent)</li>
        <li>Usage data (features used, interactions, preferences)</li>
      </ul>
    `,
  },
  {
    id: 'usage',
    icon: Eye,
    title: 'Data Usage',
    content: `
      <p>We use the information we collect for the following purposes:</p>
      <ul class="list-disc list-inside mt-4 space-y-2">
        <li><strong>Providing Services:</strong> To operate, maintain, and improve Yaari Zone</li>
        <li><strong>Communication:</strong> To send you updates, security alerts, and support messages</li>
        <li><strong>Personalization:</strong> To customize your experience and recommend connections</li>
        <li><strong>Safety:</strong> To detect, prevent, and address fraud and abuse</li>
        <li><strong>Analytics:</strong> To understand how users interact with our services</li>
        <li><strong>Research:</strong> To develop new features and improve existing ones</li>
        <li><strong>Legal Compliance:</strong> To comply with applicable laws and regulations</li>
      </ul>
      <p class="mt-4">We do not sell your personal information to third parties. We may share data with service providers who help us operate our services, subject to strict confidentiality obligations.</p>
    `,
  },
  {
    id: 'security',
    icon: Lock,
    title: 'Security',
    content: `
      <p>We take the security of your data seriously and implement appropriate technical and organizational measures to protect it:</p>
      <ul class="list-disc list-inside mt-4 space-y-2">
        <li><strong>Encryption:</strong> All data is encrypted in transit using TLS/SSL</li>
        <li><strong>End-to-End Encryption:</strong> Messages are encrypted end-to-end where applicable</li>
        <li><strong>Secure Storage:</strong> Data is stored in secure, SOC 2 compliant data centers</li>
        <li><strong>Access Controls:</strong> Strict access controls limit who can access your data</li>
        <li><strong>Regular Audits:</strong> We conduct regular security audits and penetration testing</li>
        <li><strong>Incident Response:</strong> We have procedures in place to respond to security incidents</li>
      </ul>
      <p class="mt-4">While we strive to protect your information, no method of transmission over the internet is 100% secure. We encourage you to use strong passwords and enable two-factor authentication.</p>
    `,
  },
  {
    id: 'cookies',
    icon: Cookie,
    title: 'Cookies',
    content: `
      <p>Yaari Zone uses cookies and similar technologies to enhance your experience:</p>
      <h4 class="text-white font-semibold mt-4 mb-2">Types of Cookies We Use</h4>
      <ul class="list-disc list-inside space-y-2">
        <li><strong>Essential Cookies:</strong> Required for the basic functioning of our services</li>
        <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
        <li><strong>Analytics Cookies:</strong> Help us understand how users interact with our services</li>
        <li><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements (with consent)</li>
      </ul>
      <h4 class="text-white font-semibold mt-4 mb-2">Managing Cookies</h4>
      <p class="mt-2">You can control cookies through your browser settings. Most browsers allow you to:</p>
      <ul class="list-disc list-inside space-y-2">
        <li>View what cookies are stored on your device</li>
        <li>Delete cookies</li>
        <li>Block cookies from particular sites</li>
        <li>Block all cookies</li>
      </ul>
      <p class="mt-4">Please note that disabling cookies may affect the functionality of our services.</p>
    `,
  },
];

export function Privacy() {
  return (
    <div className="relative min-h-screen bg-background overflow-x-hidden">
      <ParticlesBackground />
      <Navbar />

      <main className="relative z-10 pt-32 pb-20">
        <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20 mb-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6">
              <Shield className="w-4 h-4 text-yaari-blue-light" />
              <span className="text-white/80 text-sm font-medium">Your Privacy Matters</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Privacy <span className="gradient-text">Policy</span>
            </h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              We are committed to protecting your privacy. This policy explains how we collect, use, and safeguard your personal information.
            </p>
            <p className="text-white/40 text-sm mt-4">Last updated: March 18, 2026</p>
          </div>
        </div>

        <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20 mb-12">
          <div className="max-w-4xl mx-auto">
            <div className="glass-card p-4">
              <p className="text-white/60 text-sm mb-3">Jump to section:</p>
              <div className="flex flex-wrap gap-2">
                {sections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/70 hover:text-white text-sm transition-all duration-300"
                  >
                    {section.title}
                  </a>
                ))}
              </div>
            </div>
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

            <section className="glass-card-strong p-8 lg:p-10">
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-yaari-pink to-yaari-purple flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-white mb-4">Your Rights</h2>
                  <p className="text-white/70 leading-relaxed mb-4">
                    Depending on your location, you may have certain rights regarding your personal data:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-white/70">
                    <li><strong>Access:</strong> Request a copy of your personal data</li>
                    <li><strong>Correction:</strong> Request correction of inaccurate data</li>
                    <li><strong>Deletion:</strong> Request deletion of your personal data</li>
                    <li><strong>Portability:</strong> Request transfer of your data</li>
                    <li><strong>Objection:</strong> Object to certain processing activities</li>
                    <li><strong>Restriction:</strong> Request restriction of processing</li>
                  </ul>
                  <p className="text-white/70 mt-4">
                    To exercise these rights, please contact us at <a href="mailto:privacy@yaarizone.com" className="text-yaari-blue-light hover:underline">privacy@yaarizone.com</a>
                  </p>
                </div>
              </div>
            </section>

            <section className="glass-card p-8 lg:p-10 text-center">
              <Mail className="w-12 h-12 text-yaari-blue-light mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-white mb-4">Questions About Privacy?</h2>
              <p className="text-white/60 mb-6">
                If you have any questions or concerns about our privacy practices, please do not hesitate to contact us.
              </p>
              <a href="mailto:privacy@yaarizone.com" className="btn-gradient-blue inline-flex items-center gap-2">
                Contact Privacy Team
              </a>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Privacy;
