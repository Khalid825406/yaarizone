"use client";

import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { DownloadBar } from "@/components/sections/Downloadbar";
import { HeroBanner } from "./Herobanner";
import {
  Scale,
  EyeOff,
  UserX,
  Music,
  Swords,
  Megaphone,
  HeartCrack,
  Ban,
  UserCheck,
  Trash2,
  Flag,
  ShieldCheck,
  MessageSquareWarning,
  CheckCircle2,
  AlertTriangle,
  Mail,
} from "lucide-react";

const GRADIENT = "linear-gradient(135deg, #e91e8c, #2563eb)";

// ── REUSABLE COMPONENTS ───────────────────────────────────────────
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

function SectionHeading({ label }: { label: string }) {
  return (
    <div className="sm:col-span-2 mt-4 mb-1">
      <h2
        className="text-lg sm:text-xl font-bold text-white px-4 py-3 rounded-xl"
        style={{ background: GRADIENT }}
      >
        {label}
      </h2>
    </div>
  );
}

// ── PAGE ─────────────────────────────────────────────────────────
export default function CommunityGuidelines() {
  return (
    <div className="bg-[#0b1220] text-white min-h-screen">
      <Navbar />

      <HeroBanner title="Community Guidelines" />

      <div className="max-w-[84rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="bg-gray-50 text-black rounded-2xl shadow-lg p-5 sm:p-8 md:p-10 border border-gray-200">

          {/* LAST UPDATED */}
          <p className="mb-5 font-medium text-sm sm:text-base">
            <strong>Last Updated:</strong> 17 Sep, 2025
          </p>

          {/* INTRO */}
          <div
            className="rounded-xl p-4 sm:p-5 mb-8 text-sm sm:text-base text-gray-700 leading-relaxed border"
            style={{ borderColor: "#e91e8c33", background: "linear-gradient(135deg, #fdf2f8, #eff6ff)" }}
          >
            <p className="mb-3">
              These Content and Community Guidelines ("Guidelines") govern your use of the Real Frnd
              mobile application ("Platform"). They are a crucial part of and should be read in
              conjunction with the Platform's <strong>Terms of Use</strong> and{" "}
              <strong>Privacy Policy</strong>.
            </p>
            <p className="mb-3">
              Our Platform connects people from across India. While the community is diverse and
              receptive to a variety of content, the Platform is always accessed by users over 18 years
              of age. To ensure a safe environment for creative expression, we have implemented strict
              guidelines governing use of the Platform.
            </p>
            <p>
              We reserve the right to modify these Guidelines from time to time. Your continued use of
              the Platform after the effective date of any changes constitutes your acceptance of the
              new Guidelines.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">

            {/* ── SECTION 1: CONTENT GUIDELINES ── */}
            <SectionHeading label="1. Content Guidelines" />

            {/* FULL WIDTH INTRO */}
            <div className="sm:col-span-2">
              <Card icon={<Flag className="w-5 h-5" />} title="Overview">
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  We actively remove content that is prohibited on our Platform and violates both our
                  Guidelines and applicable Indian laws. If such content comes to our attention, we may
                  take it down or restrict access to user accounts. We encourage you to report any
                  content that violates these Guidelines. We do not welcome content intended to cause
                  discomfort, spread hate speech or abuse, promote violence and illegal activities, or
                  that is deceptive.
                </p>
              </Card>
            </div>

            {/* a. APPLICABLE LAWS */}
            <Card icon={<Scale className="w-5 h-5" />} title="a. Adherence to Applicable Laws">
              <p className="text-sm sm:text-base text-gray-700 mb-3 leading-relaxed">
                All content uploaded, posted, commented on, or shared on our Platform must adhere to
                the laws of India, including the Bharatiya Nyaya Sanhita, 2023 and the Information
                Technology Act, 2000.
              </p>
              <ul className="space-y-2.5">
                <Bullet text="Content must not threaten the unity, integrity, defence, security, or sovereignty of India." />
                <Bullet text="Content that incites violence or public disorder is strictly prohibited." />
                <Bullet text="You must not post content that insults any other nation or obstructs investigation of any offences." />
              </ul>
            </Card>

            {/* b. NUDITY */}
            <Card icon={<EyeOff className="w-5 h-5" />} title="b. Nudity and Pornography">
              <p className="text-sm sm:text-base text-gray-700 mb-3">
                Limited sexual imagery is allowed only for artistic, educational, or satirical purposes.
                The following are strictly prohibited:
              </p>
              <ul className="space-y-2.5">
                <Bullet text="Obscene, sexually explicit, pornographic, or nude content depicting sexual activities or private parts." />
                <Bullet text="Sextortion, revenge pornography, brutality, or zoophilia." />
                <Bullet text="Content that exploits or endangers any individual, including soliciting prostitution or escort services." />
                <Bullet text="Content related to paedophilia, child pornography, or child sexual abuse imagery of any kind." />
                <Bullet text="Content that is indecent, immoral, or related to rape, sexual objectification, or non-consensual activities." />
              </ul>
            </Card>

            {/* c. HARASSMENT */}
            <Card icon={<UserX className="w-5 h-5" />} title="c. Harassment or Bullying">
              <p className="text-sm sm:text-base text-gray-700 mb-3">
                We have a zero-tolerance policy for harassment or bullying. The following are
                violations:
              </p>
              <ul className="space-y-2.5">
                <Bullet text="Posting abusive language, curse words, morphed images, or malicious recordings." />
                <Bullet text="Objectifying, insulting, or harassing someone based on gender, race, ethnicity, caste, colour, disabilities, religion, or sexual preferences." />
                <Bullet text="Contacting someone from a different account if they have blocked you." />
                <Bullet text="Sharing an individual's image or information without consent with the intent to harass or endanger them." />
                <Bullet text="Posting false information with the intent to harass someone or cause emotional, physical, or mental harm." />
              </ul>
            </Card>

            {/* d. IP */}
            <Card icon={<Music className="w-5 h-5" />} title="d. Intellectual Property">
              <p className="text-sm sm:text-base text-gray-700 mb-3">
                We safeguard intellectual property rights and consider violations serious misconduct.
              </p>
              <ul className="space-y-2.5">
                <Bullet text="Do not post content copied from individuals or organisations that own the intellectual property rights." />
                <Bullet text="When re-sharing content, do not remove attributions, watermarks, or original captions." />
                <Bullet text="Avoid using audio or music that violates these Guidelines or applicable laws." />
                <Bullet text="Fair use (criticism, commentary, parody, satire, or teaching) may be permitted — but always get permissions and give proper credit." />
              </ul>
            </Card>

            {/* e. VIOLENCE */}
            <Card icon={<Swords className="w-5 h-5" />} title="e. Violence">
              <p className="text-sm sm:text-base text-gray-700 mb-3">
                Violence includes content that glorifies or incites violence, or depicts physical
                violence or animal cruelty. Prohibited examples:
              </p>
              <ul className="space-y-2.5">
                <Bullet text="Content that promotes dangerous and illegal activities." />
                <Bullet text="Content praising individuals or groups involved in terrorism, organised violence, or criminal activities." />
                <Bullet text="Content that justifies or recruits for terrorist or extremist organisations." />
                <Bullet text="Content providing instructions on how to make or use explosives or firearms." />
              </ul>
              <Warning>
                Educational, newsworthy, or fictional violent content may be permitted in accordance
                with these Guidelines. If you believe someone is in imminent danger, contact local law
                enforcement immediately.
              </Warning>
            </Card>

            {/* f. HATE SPEECH */}
            <Card icon={<Megaphone className="w-5 h-5" />} title="f. Hate Speech and Propaganda">
              <p className="text-sm sm:text-base text-gray-700 mb-3">
                Content that promotes violence or fosters hostility against any individual or group is
                prohibited:
              </p>
              <ul className="space-y-2.5">
                <Bullet text="Content spreading hatred based on religion, caste, ethnicity, community, nationality, disability, disease, or gender." />
                <Bullet text="Content that promotes discrimination or justifies violence based on the attributes above." />
                <Bullet text="Incendiary comments that could offend Gods, religious symbols, or emblems of any faith." />
                <Bullet text="Content fostering hostility between groups based on religion or caste with the intent to incite violence." />
              </ul>
              <Warning>
                Content that seeks to increase awareness about these issues or challenge them may be
                allowed, as long as it is clearly posted with that intention.
              </Warning>
            </Card>

            {/* g. SELF-HARM */}
            <Card icon={<HeartCrack className="w-5 h-5" />} title="g. Abuse, Self-Injury or Suicide">
              <p className="text-sm sm:text-base text-gray-700 mb-3">
                We do not allow content that depicts or promotes suicide, self-injury, or similar
                tendencies:
              </p>
              <ul className="space-y-2.5">
                <Bullet text="Content depicting or encouraging physical, mental, sexual, or psychological abuse of any individual." />
                <Bullet text="Content showing self-harm, glorifying self-injury or suicide, or providing instructions on how to harm oneself." />
                <Bullet text="Content that identifies, tags, derogates, or mocks victims and survivors of abuse, domestic violence, or any other form of violence." />
              </ul>
              <Warning>
                Content that offers support and shares coping experiences in alignment with these
                Guidelines is permitted.
              </Warning>
            </Card>

            {/* h. ILLEGAL */}
            <Card icon={<Ban className="w-5 h-5" />} title="h. Illegal Activities">
              <p className="text-sm sm:text-base text-gray-700 mb-3">
                We have a zero-tolerance policy for content that advocates or promotes illegal
                activities:
              </p>
              <ul className="space-y-2.5">
                <Bullet text="Content related to organised crime, weapons, firearms, explosives, violence, terrorist activities, or kidnapping." />
                <Bullet text="Sale of illegal goods, drugs, controlled substances, or solicitation of sexual services." />
                <Bullet text="Content that is harassing, harmful, or abusive to children, or encourages money laundering or gambling." />
                <Bullet text="Tutorials or instructions educating users about illegal activities, making bombs, or encouraging drug use." />
                <Bullet text="Impersonating another individual or distributing false or misleading information for personal or financial gain." />
              </ul>
            </Card>

            {/* i. NON-CONSENSUAL */}
            <Card icon={<UserCheck className="w-5 h-5" />} title="i. Non-Consensual Content">
              <p className="text-sm sm:text-base text-gray-700 mb-3">
                Content that impersonates another individual is prohibited:
              </p>
              <ul className="space-y-2.5">
                <Bullet text="Do not post pictures or videos of other people who have not given express consent to such content being posted." />
                <Bullet text="Do not post content that is invasive of anyone's privacy." />
                <Bullet text="Revealing someone's personal data — including contact info, passwords, address, financial info, Aadhaar details, or healthcare information — is strictly prohibited." />
                <Bullet text="Threatening someone to reveal or use their sensitive personal information will be considered harassment." />
              </ul>
            </Card>

            {/* j. SPAM */}
            <Card icon={<Trash2 className="w-5 h-5" />} title="j. Spam">
              <ul className="space-y-2.5">
                <Bullet text="Do not post content that misleads users regarding its origin or promotes false, fraudulent, or deceptive representations." />
                <Bullet text="Do not post the same content repeatedly to annoy viewers or promote goods/services as spam." />
                <Bullet text="Avoid using fake and manipulative tactics to generate traffic." />
                <Bullet text="Do not post misleading or deceptive links that promise one type of content but deliver something different." />
                <Bullet text="Do not post content that links to malicious material, like malware or phishing attacks." />
              </ul>
            </Card>

            {/* k. MISINFORMATION */}
            <Card icon={<MessageSquareWarning className="w-5 h-5" />} title="k. Misinformation">
              <ul className="space-y-2.5">
                <Bullet text="Content that is misleading or intentionally spreads misinformation, disinformation, or clearly false information is prohibited." />
                <Bullet text="Hoaxes or fake propaganda designed to deceive users or the public are not allowed." />
                <Bullet text="Content that exaggerates existing news by adding false elements is prohibited." />
                <Bullet text="Manipulated media (deepfakes) that shows people saying or doing things they never said or did is not permitted." />
              </ul>
              <Warning>
                Satire and parody content is permitted, as long as it does not mislead other users or
                spread false information.
              </Warning>
            </Card>

            {/* ── SECTION 2: COMMUNITY GUIDELINES ── */}
            <SectionHeading label="2. Community Guidelines" />

            <Card icon={<UserX className="w-5 h-5" />} title="a. Multiple / Fake Profiles">
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                Creating a fake profile of an individual or organisation, including government officials
                or entities, and impersonating someone in a deceptive manner — regardless of the intent
                to harass or bully — is strictly prohibited.
              </p>
            </Card>

            <Card icon={<ShieldCheck className="w-5 h-5" />} title="b. Safety and Security">
              <ul className="space-y-2.5">
                <Bullet text="Harassing someone or using abusive language while in a call is prohibited." />
                <Bullet text="Do not do anything that may make other users feel uncomfortable." />
                <Bullet text="Action will be taken against you if you try to create hostile situations for other users." />
              </ul>
            </Card>

            <div className="sm:col-span-2">
              <Card icon={<Ban className="w-5 h-5" />} title="d. Enforcement Actions against Violators">
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-3">
                  We act quickly against those who violate these Guidelines. Our decision to take action
                  against any account is final and binding. If your profile violates these Guidelines,
                  we may take appropriate measures and restrict your access.
                </p>
                <ul className="space-y-2.5">
                  <Bullet text="Any attempt to bypass enforcement by creating additional accounts, using false identities, or impersonating others will lead to long-term access restrictions." />
                  <Bullet text="Repeated violations may result in stricter penalties and further restrictions on registering with us." />
                  <Bullet text="We also strictly remove any content that breaches our Guidelines from the Platform." />
                </ul>
              </Card>
            </div>

            {/* ── SECTION 3: PLATFORM SECURITY ── */}
            <SectionHeading label="3. Platform Security" />

            <Card icon={<Flag className="w-5 h-5" />} title="a. Reporting">
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                When you see any content or activity that violates these Guidelines, please tap or click
                on the <strong>'Report'</strong> option. Our Admin team will review it and, if found in
                violation, will remove the content and take appropriate action. For content you dislike
                but which does not violate these Guidelines, use the <strong>'Block'</strong> option.
              </p>
            </Card>

            <Card icon={<ShieldCheck className="w-5 h-5" />} title="b. Intermediary Status">
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                We serve as an intermediary in accordance with applicable laws and regulations. Our
                accountability does not extend to services and features provided by third parties, even
                when accessed through our Services. Any incidents arising on our Platform are subject to
                the jurisdiction and limitations established by Indian law.
              </p>
            </Card>

            {/* GRIEVANCE OFFICER — full width */}
            <div className="sm:col-span-2">
              <Card icon={<Mail className="w-5 h-5" />} title="c. Grievance Officer">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="space-y-1.5 text-sm sm:text-base text-gray-700">
                    <p><strong>Name:</strong> Amit Sharma</p>
                    <p><strong>Address:</strong> D 219, 1st Floor, Sector 63, Noida 201301</p>
                    <p><strong>Office Hours:</strong> 10:00 A.M. to 6:00 P.M. (Mon to Fri)</p>
                    <p className="text-xs sm:text-sm text-gray-500 pt-1">
                      Please send all user-related grievances to the email address provided.
                    </p>
                  </div>
                  <a
                    href="mailto:support@realfrnd.com"
                    className="inline-flex items-center justify-center gap-2 text-white text-sm sm:text-base font-semibold px-6 py-2.5 rounded-xl transition-opacity hover:opacity-90 active:scale-[0.98] whitespace-nowrap shrink-0"
                    style={{ background: GRADIENT }}
                  >
                    <Mail className="w-4 h-4" />
                    support@realfrnd.com
                  </a>
                </div>
              </Card>
            </div>

            {/* ── SECTION 4: RIGHT TO CHALLENGE ── */}
            <SectionHeading label="4. Right to Challenge" />

            <div className="sm:col-span-2">
              <Card icon={<MessageSquareWarning className="w-5 h-5" />} title="Appeal Process">
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
                  If your content is removed from our Platform, we will notify you and explain our
                  reasons. If you believe your content has been unfairly taken down, you can submit an
                  in-app appeal or contact us at{" "}
                  <a href="mailto:support@realfrnd.com" className="text-blue-600 hover:underline font-medium">
                    support@realfrnd.com
                  </a>{" "}
                  to contest the removal. We will review the content again and decide whether the appeal
                  is valid.
                </p>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
                  In addition to actions taken by us, you may also incur personal, civil, and criminal
                  liability for violations. Below is an illustrative list of applicable laws:
                </p>
                <div className="overflow-x-auto rounded-xl border">
                  <table className="w-full min-w-[480px] text-xs sm:text-sm">
                    <thead>
                      <tr style={{ background: GRADIENT }} className="text-white">
                        <th className="p-3 text-left font-semibold border-r border-white/20">Violation</th>
                        <th className="p-3 text-left font-semibold">Applicable Law</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-700">
                      {[
                        ["Infringing on someone else's rights", "Digital Personal Data Protection Act, 2023 [S.33(1)]"],
                        ["Explicit / pornographic / harassing content or illegal activities", "Bharatiya Nyaya Sanhita, 2023 [S. 196, 294, 295]; IT Act, 2000 [S. 66E, 67, 67A]; POCSO Act, 2012 [S. 12]"],
                        ["Content harmful to children", "Juvenile Justice Act, 2015 [S. 75]; IT Act, 2000 [S. 67B]"],
                        ["Infringing patents, trademarks, or copyrights", "Trade Marks Act, 1999 [S. 29]; Copyright Act, 1957 [S.51]"],
                        ["Misinformation / impersonation / false origin", "Bharatiya Nyaya Sanhita, 2023 [S. 212, 319, 336, 353]; IT Act, 2000 [S. 66D]"],
                        ["Threatening national security or inciting offences", "IT Act, 2000 [S. 66F]"],
                        ["Containing malware or disruptive computer code", "IT Act, 2000 [S. 43 and 66]"],
                        ["Advertising or promoting impermissible online games", "Consumer Protection Act, 2019 [S. 89]"],
                      ].map(([violation, law], i) => (
                        <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                          <td className="p-3 border-r border-gray-100 align-top">{violation}</td>
                          <td className="p-3 align-top">{law}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-xs sm:text-sm text-gray-500 mt-3">
                  If necessary, we will cooperate with legal authorities and law enforcement agencies.
                  Please note that we are not obligated to assist you.
                </p>
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