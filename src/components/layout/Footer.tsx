import Link from 'next/link';
import { Instagram, Twitter, Facebook, Youtube, Mail, MapPin, Phone } from 'lucide-react';

const footerLinks = {
  product: [
    { name: 'Features', href: '#features' },
    { name: 'Download', href: '#download' },
    { name: 'Pricing', href: '#' },
    { name: 'Updates', href: '#' },
  ],
  company: [
    { name: 'About Us', href: '#about' },
    { name: 'Careers', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Press', href: '#' },
  ],
  legal: [
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Cookie Policy', href: '#' },
    { name: 'GDPR', href: '#' },
  ],
  support: [
    { name: 'Help Center', href: '#' },
    { name: 'Contact Us', href: '#' },
    { name: 'Community', href: '#' },
    { name: 'Feedback', href: '#' },
  ],
};

const socialLinks = [
  { name: 'Instagram', icon: Instagram, href: '#' },
  { name: 'Twitter', icon: Twitter, href: '#' },
  { name: 'Facebook', icon: Facebook, href: '#' },
  { name: 'YouTube', icon: Youtube, href: '#' },
];

function FooterLink({ href, name }: { href: string; name: string }) {
  if (href.startsWith('/')) {
    return (
      <Link href={href} className="text-white/60 hover:text-white transition-colors duration-300 text-sm">
        {name}
      </Link>
    );
  }

  return (
    <a href={href} className="text-white/60 hover:text-white transition-colors duration-300 text-sm">
      {name}
    </a>
  );
}

export function Footer() {
  return (
    <footer className="relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-yaari-blue/20 rounded-full blur-[120px]" />
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-yaari-pink/20 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10">
        <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20 py-16 lg:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 lg:gap-8">
            <div className="lg:col-span-2">
              <Link href="/" className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-blue flex items-center justify-center">
                  <span className="text-white font-bold text-xl">Y</span>
                </div>
                <span className="text-2xl font-bold text-white">
                  Yaari <span className="gradient-text">Zone</span>
                </span>
              </Link>
              <p className="text-white/60 mb-6 max-w-sm leading-relaxed">
                Connect with real friends anytime, anywhere. Chat, video call, and meet new people easily with Yaari Zone.
              </p>

              <div className="space-y-3">
                <div className="flex items-center gap-3 text-white/60">
                  <Mail className="w-4 h-4 text-yaari-blue-light" />
                  <span className="text-sm">support@yaarizone.com</span>
                </div>
                <div className="flex items-center gap-3 text-white/60">
                  <Phone className="w-4 h-4 text-yaari-blue-light" />
                  <span className="text-sm">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-3 text-white/60">
                  <MapPin className="w-4 h-4 text-yaari-blue-light" />
                  <span className="text-sm">San Francisco, CA</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-5">Product</h3>
              <ul className="space-y-3">
                {footerLinks.product.map((link) => (
                  <li key={link.name}>
                    <FooterLink href={link.href} name={link.name} />
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-5">Company</h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <FooterLink href={link.href} name={link.name} />
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-5">Legal</h3>
              <ul className="space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <FooterLink href={link.href} name={link.name} />
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-5">Support</h3>
              <ul className="space-y-3">
                {footerLinks.support.map((link) => (
                  <li key={link.name}>
                    <FooterLink href={link.href} name={link.name} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10">
          <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-white/50 text-sm text-center md:text-left">
                Copyright {new Date().getFullYear()} Yaari Zone. All rights reserved.
              </p>

              <div className="flex items-center gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                    aria-label={social.name}
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
