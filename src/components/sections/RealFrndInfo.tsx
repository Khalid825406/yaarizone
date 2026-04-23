"use client";

export default function RealFrndInfo() {
  return (
    <section className="bg-[#f3f4f6] py-16 lg:py-24">
      <div className="max-w-[83%] mx-auto">

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 leading-tight text-center">
          Welcome to YaariZone - India's Trending Friendship App
        </h1>

        {/* Intro */}
        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          In the world of likes, swipes, ghosting, and endless scrolling,
          YaariZone brings back what truly matters - real conversations and genuine human connections.
        </p>

        <p className="text-gray-700 text-lg leading-relaxed mb-8">
          Unlike other platforms focused on looks and profiles, YaariZone helps you connect
          through real experiences. Start with audio conversations to break the ice,
          and when you feel comfortable, switch to video calls for a deeper, face-to-face connection.
          No pressure, no filters - just real people and real vibes.
        </p>

        {/* Section */}
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-6">
          What Makes YaariZone Different?
        </h2>

        <ul className="space-y-4 mb-10">
          <li className="text-gray-700 text-lg">
            <span className="font-semibold text-gray-900">
              Communities Built Around Interests
            </span>{" "}
            - From music to astrology, gaming to everyday talks, join groups where people actually vibe with you.
          </li>

          <li className="text-gray-700 text-lg">
            <span className="font-semibold text-gray-900">
              Audio & Video Conversations
            </span>{" "}
            - Start with voice chats to connect naturally, then move to secure video calls for real-time bonding.
          </li>

          <li className="text-gray-700 text-lg">
            <span className="font-semibold text-gray-900">
              No Pressure, No Filters
            </span>{" "}
            - Connect without worrying about perfect pictures. Be yourself and let conversations lead.
          </li>

          <li className="text-gray-700 text-lg">
            <span className="font-semibold text-gray-900">
              Safe & Moderated
            </span>{" "}
            - Verified spaces, active moderation, and community-driven safety make YaariZone a trusted hangout.
          </li>
        </ul>

        {/* Why Section */}
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-6">
          Why YaariZone?
        </h2>

        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          Because real friendships aren’t built on filters or timelines - they’re built on shared laughs,
          late-night conversations, and meaningful moments. Whether it starts with a simple audio chat
          or grows into a video call, YaariZone helps you create real bonds.
        </p>

        <p className="text-gray-700 text-lg leading-relaxed">
          So whether you’re here to make new friends, explore communities, or just find someone
          to talk to, YaariZone gives you the space to connect - your way.
        </p>

      </div>
    </section>
  );
}