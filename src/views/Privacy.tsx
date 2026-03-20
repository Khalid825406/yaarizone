"use client";

import Image from "next/image";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { DownloadBar } from "@/components/sections/Downloadbar";
import { HeroBanner } from "./Herobanner";

// ── REUSABLE HERO BANNER ──────────────────────────────────────────
interface HeroBannerProps {
  title: string;
}



// ── PRIVACY PAGE ─────────────────────────────────────────────────
export default function Privacy() {
  return (
    <div className="bg-[#0b1220] text-white min-h-screen">
      <Navbar />

      <HeroBanner title="Privacy Policy" />

      {/* MAIN CONTENT */}
      <div className="max-w-[84rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 ">
        <div className="bg-white text-black rounded-2xl shadow-lg p-5 sm:p-8 md:p-10 border">

          {/* LAST UPDATED */}
          <p className="mb-6 font-medium text-sm sm:text-base">
            <strong>Last Updated:</strong> 17 Sep, 2025
          </p>

          {/* INTRO */}
          <p className="mb-5 leading-relaxed text-sm sm:text-base">
            We, <strong>Real Frnd</strong>, recognise that your privacy is of paramount importance and
            we are deeply committed to protecting it. This Privacy Policy ("Policy") outlines our
            practices for collecting, using, and disclosing your data when you use our mobile application
            called "Real Frnd" (the "Platform" or "Application"). References to "we", "our", or "us"
            shall mean the Platform and/or Real Frnd. Any references to "you" or "your" shall mean any
            person or entity using our Platform, i.e., the Hosts and Users.
          </p>

          <p className="mb-8 leading-relaxed text-sm sm:text-base">
            This Policy is a paramount aspect of, and should be read in conjunction with, the Real Frnd
            Terms of Use and the Content and Community Guidelines. By using this Platform, you expressly
            agree to the terms and conditions of this Policy. You also agree to our use and sharing of
            your Personal Information (as defined below) as described in this Policy. The capitalised
            words used in this Policy but not defined here shall have the meanings given to them in the
            Terms. If you do not agree with the terms and conditions of this Policy, we would request
            that you abstain from using this Platform. We will not use or share your information with
            anyone except as outlined in this Policy.
          </p>

          {/* ── SECTION 1 ── */}
          <h2 className="text-lg sm:text-xl font-bold mb-3">
            1. Information We Collect and How We Use It
          </h2>
          <p className="mb-5 text-sm sm:text-base leading-relaxed">
            To provide and improve our Services, we collect several types of information. This is
            categorised below, along with an explanation of how it is used.
          </p>

          {/* TABLE */}
          <div className="border rounded-lg overflow-x-auto mb-8">
            <table className="w-full min-w-[520px] text-sm">
              <thead>
                <tr className="bg-gray-100 text-left">
                  <th className="p-3 sm:p-4 border-r font-semibold w-1/2">Information We Collect</th>
                  <th className="p-3 sm:p-4 font-semibold w-1/2">How We Use It</th>
                </tr>
              </thead>
              <tbody>
                <Row
                  left={`Account and Log-in Information\nUser ID, mobile phone number, gender, date of birth, and IP address ("Log-in Data"). We may also collect an indicative age range to ensure you meet the minimum age requirements to access our Platform.`}
                  right={[
                    "To set up and facilitate secure log-in to your user account on the Platform.",
                    "To verify your identity and prevent fraudulent account creation.",
                    "To notify you about changes to the Platform, including updates to this Privacy Policy.",
                  ]}
                />
                <Row
                  left={`Additional Profile Information\nThis includes your photo, a brief biography, and any other details you voluntarily provide on your user profile.`}
                  right={[
                    "To personalise your user profile and help other users identify you.",
                    "To facilitate communication and connection with other users who share similar interests or profiles.",
                  ]}
                />
                <Row
                  left={`Content You Shared\nAll information you make available to other users via the Platform, including Host Images that you post on your public profile.`}
                  right={[
                    "To make your content visible to your chosen audience on the Platform.",
                    "To allow for interaction between users.",
                    "To provide and improve our content and personalisation features.",
                  ]}
                />
                <Row
                  left={`Communications and Support Data\nContent of voice/video calls between users (stored on device). Any information provided to our customer support team.`}
                  right={[
                    "To facilitate the delivery of communication to another user.",
                    "We do not monitor your audio/video data, take action based on it, or disclose it to any third party.",
                    "To investigate and resolve your support issues efficiently.",
                    "To improve our customer service and support systems.",
                  ]}
                />
                <Row
                  left={`Log Data (Collected Automatically)\nMobile carrier, browser type, IP address, device ID, search terms, profiles visited, communication metadata, and image metadata.`}
                  right={[
                    "To administer the Platform and for internal operations including troubleshooting, data analysis, and security.",
                    "To better understand how you use the Platform and improve the user experience.",
                    "To detect and prevent fraudulent or unauthorised activity on your account.",
                  ]}
                />
                <Row
                  left={`Device Data\nDevice attributes (OS, battery, storage), operations, identifiers, Bluetooth/Wi-Fi signals, GPS location, camera access, network info, app list, and media access.`}
                  right={[
                    "To facilitate the sharing of media like videos and images.",
                    "To customise our Platform to suit your mobile device.",
                    "To optimise your user experience and improve the Platform's performance.",
                    "To verify your identity and enforce our policies.",
                    "To facilitate content sharing via other applications on your device.",
                  ]}
                />
                <Row
                  left={`Surveys and Contests\nAny information you provide when you choose to participate in a survey or contest.`}
                  right={[
                    "To facilitate your participation in contests and award prizes, if applicable.",
                    "To use feedback from surveys to improve our services and understand user demographics.",
                  ]}
                />
              </tbody>
            </table>
          </div>

          {/* ── DISCLOSURE ── */}
          <h2 className="text-lg sm:text-xl font-bold mb-3">
            Disclosure of Your Information
          </h2>
          <p className="mb-4 text-sm sm:text-base leading-relaxed">
            We may share your information in the following ways, ensuring that we do so in a manner
            that respects your privacy.
          </p>

          <div className="space-y-5 mb-8 text-sm sm:text-base leading-relaxed">
            <div>
              <p className="font-semibold mb-1">a. Public Content and User-to-User Sharing</p>
              <p className="text-gray-700">
                Any content on your public profile or another user's profile, such as a bio, is
                accessible to everyone, including search engines. When you submit or share content you
                choose to make public, it may be re-shared by others. You should think carefully about
                who you share with, as people who can see your activity on our Platform can choose to
                re-share it with others both on and off the platform.
              </p>
            </div>
            <div>
              <p className="font-semibold mb-1">b. Sharing with Our Group of Companies</p>
              <p className="text-gray-700">
                We may share your Personal Information with any member of our Group — any entity
                controlled by us, or in control of us, or under common control with us, whether directly
                or indirectly. We do this to provide consistent services across our products and for the
                purposes outlined in this Policy.
              </p>
            </div>
            <div>
              <p className="font-semibold mb-2">c. Sharing with Service Providers and Business Partners</p>
              <p className="text-gray-700 mb-3">
                We may share your information (including Personal Information) with select third parties,
                including:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>
                  <strong>Business partners and Affiliates</strong> may use this information to
                  facilitate, comprehend, and enhance the Service as well as their own offerings.
                </li>
                <li>
                  <strong>Advertisers and advertising networks</strong> use this data to select and
                  deliver relevant advertisements to you and other users. We do not disclose identifiable
                  personal information to our advertisers; however, we may provide them with aggregate
                  and anonymised data regarding our users.
                </li>
                <li>
                  <strong>Government bodies or law enforcement agencies</strong> may request your data
                  if we have a good-faith belief that such sharing is reasonably necessary to comply with
                  legal obligations, protect our rights, property, or safety, or to detect, prevent, or
                  address issues related to fraud, security, or technical concerns.
                </li>
                <li>
                  <strong>In the event of a business transfer:</strong> If our Company or substantially
                  all of its assets are acquired by a third party, your personal data will be regarded as
                  one of the transferred assets. Should we engage in a merger, acquisition, or sale of
                  assets, we will notify you in advance to enable you to opt out by deleting your account.
                </li>
              </ul>
            </div>
            <p className="text-gray-700">
              We shall never rent or sell your Personal Information to third parties for their
              independent use, except on an anonymised basis, unless expressly stipulated in these Terms.
            </p>
          </div>

          {/* ── SECTION 2 ── */}
          <h2 className="text-lg sm:text-xl font-bold mb-3">
            2. Data Security and Storage
          </h2>
          <p className="mb-4 text-sm sm:text-base leading-relaxed">
            We are dedicated to safeguarding your Personal Information. We have implemented suitable
            technical and security measures to protect the data we collect and process.
          </p>

          <div className="space-y-5 mb-8 text-sm sm:text-base leading-relaxed">
            <div>
              <p className="font-semibold mb-1">a. Where We Store Your Personal Information</p>
              <p className="text-gray-700">
                We store your data on the Amazon Web Services (AWS) cloud platform. These servers are
                located in India and abroad. AWS implements robust security measures to protect your
                information. You are responsible for maintaining the confidentiality of your account and
                not sharing the access with anyone.
              </p>
            </div>
            <div>
              <p className="font-semibold mb-1">b. Your Rights</p>
              <p className="text-gray-700 mb-2">
                You retain the right to modify, update, or delete Personal Information associated with
                your account at any time by accessing your profile page after logging in. You may also
                opt out of receiving unwanted communications by following the instructions provided within
                the respective message. You also have the right to withdraw your consent for the ongoing
                collection of your information. Please be advised that revoking your consent may
                adversely impact your ability to use the Platform.
              </p>
              <p className="text-gray-700">
                To delete your account from the Platform, please use the{" "}
                <strong>'Delete Account'</strong> option in the app's settings.
              </p>
            </div>
          </div>

          {/* ── SECTION 3 ── */}
          <h2 className="text-lg sm:text-xl font-bold mb-3">
            3. Third-Party Links
          </h2>
          <p className="mb-8 text-sm sm:text-base leading-relaxed text-gray-700">
            Our Platform may contain links to and from the websites of our partners, advertisers, and
            other third parties. These websites have their own privacy policies, and we do not accept
            any responsibility or liability for them. Please check their policies before submitting any
            personal data.
          </p>

          {/* ── SECTION 4 ── */}
          <h2 className="text-lg sm:text-xl font-bold mb-3">
            4. User Consent
          </h2>
          <p className="mb-8 text-sm sm:text-base leading-relaxed text-gray-700">
            In situations in which Real Frnd offers you the option to subscribe to any
            Email / RCS / Voice / SMS / WhatsApp service that will keep you updated with news or
            information that it considers may be of interest to you, your use of the content received
            from these services will be subject to these Terms and Conditions.
          </p>

          {/* ── SECTION 5 ── */}
          <h2 className="text-lg sm:text-xl font-bold mb-3">
            5. Grievance Officer
          </h2>
          <p className="mb-4 text-sm sm:text-base leading-relaxed text-gray-700">
            Real Frnd has a dedicated Grievance Officer to address your concerns regarding data safety,
            privacy, and Platform usage. We will resolve the issues you have raised within{" "}
            <strong>7 (seven) days</strong> of receiving them.
          </p>

          <div className="bg-gray-50 border rounded-xl p-4 sm:p-6 space-y-2 text-sm sm:text-base">
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

        </div>
      </div>

      <Footer />
      <DownloadBar />
    </div>
  );
}

// ── TABLE ROW ─────────────────────────────────────────────────────
type RowProps = {
  left: string;
  right: string[];
};

function Row({ left, right }: RowProps) {
  return (
    <tr className="border-t align-top">
      <td className="p-3 sm:p-4 border-r whitespace-pre-line text-gray-700 text-sm leading-relaxed">
        {left}
      </td>
      <td className="p-3 sm:p-4">
        <ul className="list-disc pl-4 space-y-1.5 text-gray-700 text-sm">
          {right.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </td>
    </tr>
  );
}