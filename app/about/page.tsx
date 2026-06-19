import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Us | Standpoint GH News',
  description: "Learn about Standpoint GH News — Ghana's premier digital news platform.",
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {/* Page header */}
      <div className="mb-10">
        <span className="bg-[#CE1126] text-white text-xs font-black px-3 py-1 uppercase tracking-widest">
          About
        </span>
        <h1 className="text-4xl md:text-5xl font-black text-[#0F172A] mt-4 mb-2 leading-tight">
          About Standpoint GH News
        </h1>
        <div className="flex gap-1 mt-3 mb-6">
          <span className="h-1 w-12 bg-[#CE1126] block rounded-full" />
          <span className="h-1 w-12 bg-[#FCD116] block rounded-full" />
          <span className="h-1 w-12 bg-[#006B3F] block rounded-full" />
        </div>
        <p className="text-gray-500 text-lg leading-relaxed">
          Ghana&apos;s Voice. Your Standpoint. — the principles we live by every day in our newsroom.
        </p>
      </div>

      {/* Content */}
      <div className="text-gray-700 text-base leading-8 space-y-6
        [&>p]:text-base [&>p]:leading-8
        [&>h2]:text-2xl [&>h2]:font-black [&>h2]:text-[#0F172A] [&>h2]:mt-10 [&>h2]:mb-3
        [&>ul]:list-disc [&>ul]:pl-6 [&>ul>li]:mb-2">

        <p>
          <strong>Standpoint GH News</strong> is Ghana&apos;s premier digital news platform, dedicated to delivering accurate, timely, impartial, and insightful journalism to readers in Ghana and across the Ghanaian diaspora worldwide.
        </p>

        <p>
          Founded in Accra in 2024, Standpoint GH News was born out of a conviction that Ghanaians deserve a trusted, independent source of news — one that holds power to account, amplifies underrepresented voices, and tells the stories of a nation in motion with depth and integrity.
        </p>

        <h2>Our Mission</h2>
        <p>
          Our mission is simple: to inform, to challenge, and to give every Ghanaian — from the market woman in Kumasi to the tech entrepreneur in Accra to the diaspora professional in London — a reliable standpoint from which to understand their world.
        </p>

        <h2>What We Cover</h2>
        <p>
          From the corridors of Parliament to the pitches of the Ghana Premier League, from the boardrooms of Accra&apos;s fastest-growing companies to the red carpets of Ghana&apos;s creative industry — Standpoint GH News covers it all. Our editorial teams span Politics, Business, Sports, Entertainment, Technology, Lifestyle, Education, and international affairs.
        </p>

        <h2>Our Values</h2>
        <ul>
          <li><strong>Accuracy</strong> — We verify before we publish. Every story goes through rigorous editorial checks before it reaches you.</li>
          <li><strong>Independence</strong> — We are not affiliated with any political party, corporation, or special interest group. Our journalism serves only our readers.</li>
          <li><strong>Fairness</strong> — We give all sides of a story a fair hearing. Our reporters are trained to pursue the full picture.</li>
          <li><strong>Relevance</strong> — We focus on what matters to Ghanaians, not what generates easy clicks. Our editorial judgment is guided by public interest.</li>
          <li><strong>Accountability</strong> — We believe journalism exists to speak truth to power. We pursue that mission relentlessly.</li>
        </ul>

        <h2>Our Team</h2>
        <p>
          Our newsroom is staffed by a diverse team of experienced journalists, editors, photographers, and digital producers based in Accra, Kumasi, Tamale, and across the diaspora. We are proud to be a Ghanaian-owned, Ghanaian-led media organisation committed to telling African stories on African terms.
        </p>

        <h2>Corrections Policy</h2>
        <p>
          We take accuracy seriously. When we make errors, we correct them promptly and transparently. If you believe we have made a factual error, please{' '}
          <Link href="/contact" className="text-[#CE1126] hover:underline font-semibold">
            contact our editorial team
          </Link>{' '}
          and we will investigate and respond within 24 hours.
        </p>
      </div>

      {/* Team showcase */}
      <div className="mt-14 pt-10 border-t border-gray-200">
        <h2 className="text-2xl font-black text-[#0F172A] mb-6">Our Correspondents</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            { name: 'Kwame Mensah', title: 'Senior Political Correspondent', area: 'Politics, World' },
            { name: 'Ama Owusu', title: 'Business & Finance Editor', area: 'Business, Economy' },
            { name: 'Yaw Darko', title: 'Sports Correspondent', area: 'Football, Athletics' },
            { name: 'Abena Appiah', title: 'Entertainment Correspondent', area: 'Music, Film, Arts' },
            { name: 'Kwesi Asante', title: 'Technology Reporter', area: 'Tech, Startups' },
            { name: 'Efua Quartey', title: 'Lifestyle & Culture Writer', area: 'Food, Travel, Living' },
          ].map((person) => (
            <div key={person.name} className="bg-gray-50 border border-gray-100 p-4">
              <div className="w-12 h-12 bg-[#0F172A] rounded-full flex items-center justify-center text-white font-black text-lg mb-3">
                {person.name.split(' ').map((n) => n[0]).join('')}
              </div>
              <h3 className="font-black text-[#0F172A]">{person.name}</h3>
              <p className="text-xs text-[#CE1126] font-semibold mt-0.5">{person.title}</p>
              <p className="text-xs text-gray-400 mt-1">{person.area}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
