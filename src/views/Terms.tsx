'use client';

import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { DownloadBar } from '@/components/sections/Downloadbar';
import { HeroBanner } from './Herobanner';

export default function Terms() {
  return (
    <div className="bg-[#0b1220] text-white min-h-screen">
      <Navbar />

      <HeroBanner title="Terms & Conditions" />

      {/* CONTENT */}
      <div className="max-w-[84rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="bg-white text-black rounded-2xl shadow-lg p-5 sm:p-8 md:p-10 border leading-relaxed">

          {/* LAST UPDATED */}
          <p className="mb-6 font-medium text-sm sm:text-base">
            <strong>Last Updated:</strong> 17 Sep, 2025
          </p>

          {/* INTRO */}
          <p className="mb-4 text-sm sm:text-base">
            These Terms of Use ("Terms") govern your access to and use of our mobile application called
            "Real Frnd" (the "Platform") provided by Orvantis Technologies LLP. ("Your Company", "we",
            "us" and "our"), a private company registered under Indian law with its registered office in
            Noida, India. The terms "you" and "your" refer to the user/host of the Platform.
          </p>

          <p className="mb-4 text-sm sm:text-base">
            These Terms should be read alongside the Real Frnd Content and Community Guidelines and the
            Privacy Policy. By accessing or using our Platform, you confirm that you have read,
            understood, and agreed to these Terms. If you do not accept the terms and conditions, please
            do not use this Platform.
          </p>

          <p className="mb-4 text-sm sm:text-base">
            Our Services, detailed below, and these Terms are meant to comply with the Indian Penal
            Code, 1860, and the Information Technology Act, 2000, including all amendments and rules
            made under them. When you create an account on our Platform or otherwise use our Platform or
            any of our Services, you enter into a legally binding agreement with us.
          </p>

          <p className="mb-8 text-sm sm:text-base">
            It is essential to note that we do not make any claims or guarantees regarding our
            compliance with the laws of countries other than India. If you decide to use our Services
            from outside India, it is your sole responsibility to ensure that you are legally permitted
            to do so in your location and to comply with all local laws, rules, and regulations.
          </p>

          {/* ── AMENDMENTS ── */}
          <Section title="AMENDMENTS TO TERMS AND CONDITIONS" />

          <p className="mb-4 text-sm sm:text-base">
            Our platform is a constantly evolving service. Consequently, the services we offer may
            change at our discretion. We reserve the right to modify, suspend, or discontinue, either
            temporarily or permanently, the services or any features of the services at any time and for
            any reason, with or without notice, and without any liability to you. For example, we may
            add new features, remove existing ones, or modify the operation of certain features.
          </p>

          <p className="mb-8 text-sm sm:text-base">
            We may also revise these Terms periodically to reflect changes in our Services, business
            practices, or legal obligations. We will notify you of any significant amendments by
            updating the "Last updated" date at the top of this document. It is your duty to review
            these Terms regularly to stay informed about our latest changes and updates. Continued use
            of the Platform after the effective date of any modifications signifies your acceptance of
            the new Terms. We shall not be responsible for any changes, suspensions, or discontinuities
            of the Platform or Services.
          </p>

          {/* ── ELIGIBILITY ── */}
          <Section title="WHO IS ELIGIBLE TO USE OUR SERVICES" />

          <p className="mb-4 text-sm sm:text-base">
            Real Frnd is a platform crafted to facilitate connections with new individuals, fostering
            the development of friendships through audio and video interactions. Our primary service
            aims to enable users to find new friends and participate in one-on-one conversations based
            on common interests, geographical location, or other personalised preferences
            ("Service/Services").
          </p>

          <p className="mb-8 text-sm sm:text-base">
            To use our Services, you must be able to form a legally binding agreement with us and be
            legally allowed to use our Services under the laws of your jurisdiction. This requires you
            to be at least 18 years old. By using our Services, you affirm and guarantee that you are
            of legal age to enter into a binding contract. If you are an individual under 18, you are
            not permitted to use our Services. We may suspend or terminate your account and remove any
            content you have posted if we discover that you are underage.
          </p>

          {/* ── HOW TO USE ── */}
          <Section title="HOW TO USE OUR SERVICES" />

          <p className="mb-4 text-sm sm:text-base">
            Real Frnd offers a unique and user-friendly platform for forming new friendships. To provide
            a personalised experience, we may allow you to set preferences related to your interests,
            language, and other characteristics. Access to our Services requires registration on our
            platform, which can be completed by entering your phone number and the OTP sent to your
            mobile device via SMS.
          </p>

          <p className="mb-3 text-sm sm:text-base">
            When you register with us using the Real Frnd mobile application, you permit us to access
            certain features of your mobile device, including but not limited to:
          </p>

          <ul className="list-disc pl-5 sm:pl-6 mb-4 space-y-2 text-sm sm:text-base text-gray-700">
            <li>
              <strong>Gallery and Camera:</strong> This access is necessary to enable you to upload
              profile pictures, participate in video calls, and capture new content directly within
              the app.
            </li>
            <li>
              <strong>Device Storage:</strong> This permission is required for storing temporary data,
              cache files, and content you may choose to download or save from the platform.
            </li>
          </ul>

          <p className="mb-8 text-sm sm:text-base">
            We do not read or use any information stored on your mobile device without your explicit
            permission. The permissions are strictly to provide and improve our Services for you. If
            you choose to deny any of these permissions, some features of the Platform might not
            function properly.
          </p>

          {/* ── PRIVACY POLICY ── */}
          <Section title="PRIVACY POLICY" />

          <p className="mb-4 text-sm sm:text-base">
            Your privacy is our top priority. To deliver and continually enhance our Services, we gather
            certain personal details from you, such as your phone number, gender, and name. We may also
            collect and store additional information, including your date of birth, location, and
            interests, to tailor your experience. This data is securely stored on cloud servers operated
            by leading providers like Amazon Web Services ("AWS"). By using our Services, you agree to
            the terms and privacy policies of these third-party cloud providers.
          </p>

          <p className="mb-4 text-sm sm:text-base">
            The Real Frnd Privacy Policy offers a comprehensive explanation of the methods by which we
            collect, utilise, share, and store the information provided by you. It also delineates your
            legal rights and the procedures for exercising control over the data you supply to us. We
            recommend that you review the Privacy Policy thoroughly.
          </p>

          <p className="mb-8 text-sm sm:text-base">
            We may also use third-party embeds and services on the Platform to improve functionality and
            user experience, such as analytics and location-based services. The use of these API
            services is subject to the policies of the respective third-party providers. We are not
            liable for the privacy practices or content of these third-party services.
          </p>

          {/* ── YOUR COMMITMENTS ── */}
          <Section title="YOUR COMMITMENTS" />

          <p className="mb-5 text-sm sm:text-base">
            Creating a safe, respectful, and secure environment for our diverse community requires a
            collective effort. Please note that you will be entirely responsible for the costs and
            consequences of any actions you take on the Real Frnd Platform, including any breach of
            these Terms.
          </p>

          <div className="space-y-6 mb-8 text-sm sm:text-base">
            <Commitment letter="a" title="Device and Account Security">
              We have implemented strong security measures to protect our platform and your data.
              However, no system is completely safe. It is your responsibility to ensure that you have
              the necessary anti-malware and antivirus software on your device. You are solely
              responsible for all activities conducted through your account. You must not allow anyone
              to use your phone number to access your account. If you suspect any unauthorised use of
              your account, you must notify us immediately.
            </Commitment>

            <Commitment letter="b" title="No Impersonation or False Information">
              While you are not required to use your legal name on our platform, you must provide your
              correct phone number and gender. You must not falsely represent yourself as another person
              or impersonate someone else. If you are managing a parody account, you must clearly state
              this in your Real Frnd bio. Any form of fraudulent or deceptive conduct is strictly
              forbidden.
            </Commitment>

            <Commitment letter="c" title="Platform Not to Be Used for Anything Unlawful or Illegal">
              You must not use our platform to share any content that is obscene, pornographic, harmful
              to minors, defamatory, discriminatory, or promotes hate speech — including content that
              incites violence or hatred against any person or group based on religion, race, ethnicity,
              or sexual orientation. We reserve the right to remove any such content without prior
              notice. We may also share your information with relevant law enforcement authorities if
              required by law.
            </Commitment>

            <Commitment letter="d" title="Account Termination and Content Removal">
              Your use of our Platform is governed by the Real Frnd Content and Community Guidelines.
              If multiple valid reports are received regarding persistent violations, or if the violation
              is severe, we may temporarily suspend or permanently terminate your account. If you
              believe your content was removed in error or that your account was unjustly terminated,
              you may appeal by contacting us at{" "}
              <a href="mailto:support@yaarizone.com" className="text-blue-600 hover:underline">
                support@yaarizone.com
              </a>.
            </Commitment>

            <Commitment letter="e" title="Content Rights and Liabilities">
              We do not claim ownership of any content shared by you, and the intellectual property
              rights in such content remain with you. By sharing, posting, or uploading content through
              our Services, you grant us a non-exclusive, royalty-free, transferable, sub-licensable,
              worldwide licence to host, use, distribute, copy, publicly perform or display, translate,
              and create derivative works of your content, in line with your privacy and application
              settings. You retain exclusive responsibility and liability for your actions and the
              content you disseminate on our Platform.
            </Commitment>

            <Commitment letter="f" title="No Attempt to Disrupt or Jeopardise Real Frnd Services">
              You agree not to interfere with or access non-public sections of our Platform or technical
              systems. You shall not introduce Trojan horses, viruses, worms, or any other malicious
              software, nor use bots, scripts, or automated tools to extract user information. Any
              tampering with our technological infrastructure will result in immediate action, including
              the termination of your user profile and a permanent ban. Such actions may also be
              reported to relevant law enforcement authorities.
            </Commitment>

            <Commitment letter="g" title="Intermediary Status and Limitation of Liability">
              We act as an intermediary as defined under the Information Technology Act, 2000, and the
              IT (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021. Our role is
              strictly limited to providing a platform that enables users to upload, share, and display
              content. We do not control what you or others may do on the Platform. We are not liable
              for any loss of profits, revenues, information, or data, or for consequential, special,
              indirect, exemplary, punitive, or incidental damages arising to you or others related to
              these Terms.
            </Commitment>
          </div>

          {/* ── COMPLIANCE ── */}
          <Section title="COMPLIANCE REQUIREMENTS" />

          <p className="mb-8 text-sm sm:text-base">
            As a platform, we are committed to strictly adhering to the law. Publishers of relevant news
            and current affairs utilising our platform must furnish details of their Real Frnd user
            accounts to the Ministry of Information and Broadcasting in accordance with applicable
            regulations. By engaging with our platform, you agree to comply with all pertinent legal
            requirements.
          </p>

          {/* ── PERMISSIONS ── */}
          <Section title="PERMISSIONS YOU GRANT TO US" />

          <div className="space-y-5 mb-8 text-sm sm:text-base">
            <Commitment letter="a" title="Automatic Updates and Downloads">
              We are continually working to enhance our Platform and Services. To ensure you have the
              best and most secure user experience, you may need to periodically update the Real Frnd
              mobile application. You give us permission to automatically download and install updates
              to the app without any further action from you. If you do not install the latest version,
              you might not be able to access all our Services.
            </Commitment>

            <Commitment letter="b" title="Retention of Data">
              We reserve the right to retain certain information about your use of the Platform for
              purposes including providing uninterrupted service, improving our services, meeting legal
              requirements, and preventing security and fraud. You agree to allow us to process, store,
              and retain information related to you and provided by you, in accordance with our Privacy
              Policy.
            </Commitment>
          </div>

          {/* ── AGREEMENT & DISPUTES ── */}
          <Section title="OUR AGREEMENT AND WHAT HAPPENS IN THE EVENT OF DISAGREEMENT" />

          <div className="space-y-5 mb-8 text-sm sm:text-base">
            <Commitment letter="a" title="Who Has Rights Under These Terms">
              The rights and obligations under these Terms are granted only to you and shall not be
              assigned to any third party without our prior written consent. However, we are permitted
              to assign our rights and obligations under these Terms to others — for example, in the
              event of a merger, acquisition, or sale of substantially all of our assets.
            </Commitment>

            <Commitment letter="b" title="Our Approach to Dispute Resolution">
              Any disputes originating from or associated with these Terms or your utilisation of the
              Platform shall be governed by the laws of India. The courts situated in Delhi shall
              possess exclusive jurisdiction over all such disputes. Any legal action or proceeding
              related to these Terms shall be initiated within the courts located in Delhi, and you
              agree to submit to the personal jurisdiction of such courts.
            </Commitment>
          </div>

          {/* ── GRIEVANCE REDRESSAL ── */}
          <Section title="GRIEVANCE REDRESSAL" />

          <p className="mb-4 text-sm sm:text-base">
            As part of our commitment to users' safety and privacy, we have established a strong
            Grievance Redressal Mechanism to handle any concerns or complaints about your Real Frnd
            experience. We are committed to resolving issues raised by you within{" "}
            <strong>7 (seven) days</strong> from the date of receiving the complete complaint.
          </p>

          <p className="mb-3 font-semibold text-sm sm:text-base">
            Mechanisms for Grievance Redressal:
          </p>

          <ul className="list-disc pl-5 sm:pl-6 mb-5 space-y-3 text-sm sm:text-base text-gray-700">
            <li>
              <strong>In-App Reporting:</strong> Users and hosts can report profiles and content that
              violates our community guidelines directly within the application — via the content feed,
              during a live interaction, or through the interaction history option.
            </li>
            <li>
              <strong>Report Option:</strong> Users/Hosts can report inappropriate behaviour, content,
              or activity using the "Report" option found in the "Profile" tab. Reported issues are sent
              to the Admin team for review and suitable action.
            </li>
            <li>
              <strong>Block Option:</strong> Users/Hosts can block another account, preventing any form
              of interaction or communication. Once blocked, neither party can contact the other through
              the application unless the block is lifted.
            </li>
            <li>
              <strong>Email Support:</strong> For general concerns or complaints, please send an email
              with subsequent proofs to{" "}
              <a href="mailto:support@yaarizone.com" className="text-blue-600 hover:underline">
                support@yaarizone.com
              </a>. You will receive an auto-generated ticket number to track the status of your
              complaint.
            </li>
          </ul>

          <p className="mb-3 font-semibold text-sm sm:text-base">
            Contacting the Grievance Officer — for concerns regarding:
          </p>
          <ul className="list-disc pl-5 sm:pl-6 mb-5 space-y-1 text-sm sm:text-base text-gray-700">
            <li>Real Frnd Terms of Service</li>
            <li>Real Frnd Privacy Policy</li>
            <li>Real Frnd Content &amp; Community Guidelines</li>
            <li>Questions about your account</li>
            <li>Any other legal or regulatory concerns</li>
          </ul>

          <div className="bg-gray-50 border rounded-xl p-4 sm:p-6 space-y-2 text-sm sm:text-base mb-8">
            <p className="font-semibold text-gray-800 mb-3">Grievance Officer Details:</p>
            <p><strong>Name:</strong> Deepak Shakhya</p>
            <p><strong>Address:</strong> New Delhi</p>
            <p>
              <strong>Email:</strong>{" "}
              <a href="mailto:support@yaarizone.com" className="text-blue-600 hover:underline">
                support@yaarizone.com
              </a>
            </p>
            <p><strong>Office Hours:</strong> 10:00 A.M. to 6:00 P.M. (Mon to Fri)</p>
            <p className="text-gray-500 text-xs sm:text-sm pt-3 border-t mt-3">
              Note: Please send all user-related grievances to the email address mentioned above to
              ensure a prompt and efficient resolution.
            </p>
          </div>

          {/* ── LIMITATION OF LIABILITY ── */}
          <Section title="LIMITATION OF LIABILITY" />

          <p className="mb-4 text-sm sm:text-base">
            We do not assume any liability for any loss or damage, whether directly or indirectly
            caused by any inaccuracy or incompleteness of information, or a breach of any warranty or
            guarantee resulting from the actions of any user of the Platform. The Platform and Services
            are provided on an "as is" and "as available" basis, without any representations or
            warranties, express or implied.
          </p>

          <p className="mb-8 text-sm sm:text-base">
            Should any exclusion in this agreement be deemed invalid, and we or any of our affiliated
            entities become liable for loss or damage, our liability shall be limited to the charges or
            amounts paid to us for using the Platform or the Services in the month prior to the claim
            date.
          </p>

          {/* ── UNSOLICITED MATERIAL ── */}
          <Section title="UNSOLICITED MATERIAL" />

          <p className="mb-8 text-sm sm:text-base">
            We always appreciate feedback and other suggestions. If you provide any feedback, comments,
            or ideas regarding our Services or Platform ("Unsolicited Material"), you agree that we may
            use such Unsolicited Material without any restrictions or obligation to compensate you for
            them. You also agree that we are under no obligation to keep the Unsolicited Material
            confidential.
          </p>

          {/* ── GENERAL TERMS ── */}
          <Section title="GENERAL TERMS" />

          <div className="space-y-4 text-sm sm:text-base text-gray-700">
            <p>
              <strong className="text-black">Severability:</strong> If any part of these Terms is found
              to be unenforceable or invalid, the remaining provisions will continue to be in full
              effect. The invalid or unenforceable part will be replaced with a valid and enforceable
              provision that best reflects the original intent.
            </p>
            <p>
              <strong className="text-black">Reservation of Rights:</strong> We retain all rights not
              explicitly granted to you in these Terms. This encompasses the rights to alter, suspend,
              or terminate the Services, to remove content, and to undertake any actions deemed
              necessary to preserve the integrity of our Platform and ensure the safety of our users.
            </p>
            <p>
              <strong className="text-black">Entire Agreement:</strong> These Terms, in conjunction
              with the Privacy Policy and Community Guidelines, constitute the comprehensive agreement
              between "You and Us" concerning your utilisation of the Platform and Services, and they
              substitute any preceding agreements.
            </p>
            <p>
              <strong className="text-black">Survival:</strong> Any provisions of these Terms that, by
              their nature, should continue after termination — including but not limited to the
              sections on "Limitation of Liability" and "Our Approach to Dispute Resolution" — will
              remain in effect after you stop using the Platform.
            </p>
          </div>

        </div>
      </div>

      <Footer />
      <DownloadBar />
    </div>
  );
}

// ── REUSABLE SECTION HEADING ─────────────────────────────────────
function Section({ title }: { title: string }) {
  return (
    <h2 className="text-base sm:text-lg lg:text-xl font-bold mt-8 mb-4 text-black border-l-4 border-blue-600 pl-3">
      {title}
    </h2>
  );
}

// ── REUSABLE COMMITMENT BLOCK ─────────────────────────────────────
function Commitment({
  letter,
  title,
  children,
}: {
  letter: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <p className="font-semibold mb-1 text-black">
        {letter}. {title}
      </p>
      <p className="text-gray-700">{children}</p>
    </div>
  );
}