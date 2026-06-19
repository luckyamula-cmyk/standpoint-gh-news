'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setSent(true);
      setLoading(false);
    }, 1200);
  };

  const update = (field: keyof typeof form) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm({ ...form, [field]: e.target.value });

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {/* Page header */}
      <div className="mb-10">
        <span className="bg-[#CE1126] text-white text-xs font-black px-3 py-1 uppercase tracking-widest">
          Contact
        </span>
        <h1 className="text-4xl md:text-5xl font-black text-[#0F172A] mt-4 mb-2 leading-tight">
          Contact Us
        </h1>
        <div className="flex gap-1 mt-3 mb-6">
          <span className="h-1 w-12 bg-[#CE1126] block rounded-full" />
          <span className="h-1 w-12 bg-[#FCD116] block rounded-full" />
          <span className="h-1 w-12 bg-[#006B3F] block rounded-full" />
        </div>
        <p className="text-gray-500 text-lg">
          Have a news tip, story idea, or feedback? We&apos;d love to hear from you.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Contact info */}
        <div className="space-y-7">
          {[
            {
              label: 'Newsroom',
              content: (
                <p className="text-sm text-gray-600">
                  1 Liberation Road, Adabraka<br />
                  Accra, Ghana
                </p>
              ),
            },
            {
              label: 'Email',
              content: (
                <div className="space-y-1.5">
                  <p className="text-sm">
                    <a href="mailto:news@standpointgh.com" className="text-[#CE1126] hover:underline">
                      news@standpointgh.com
                    </a>
                    <span className="text-gray-400 text-xs ml-2">General</span>
                  </p>
                  <p className="text-sm">
                    <a href="mailto:tips@standpointgh.com" className="text-[#CE1126] hover:underline">
                      tips@standpointgh.com
                    </a>
                    <span className="text-gray-400 text-xs ml-2">Tips &amp; leaks</span>
                  </p>
                  <p className="text-sm">
                    <a href="mailto:ads@standpointgh.com" className="text-[#CE1126] hover:underline">
                      ads@standpointgh.com
                    </a>
                    <span className="text-gray-400 text-xs ml-2">Advertising</span>
                  </p>
                </div>
              ),
            },
            {
              label: 'Social Media',
              content: (
                <div className="flex flex-col gap-1.5 text-sm">
                  {['Twitter / X', 'Facebook', 'Instagram', 'YouTube'].map((s) => (
                    <a key={s} href="#" className="text-[#CE1126] hover:underline">{s}</a>
                  ))}
                </div>
              ),
            },
            {
              label: 'Phone',
              content: <p className="text-sm text-gray-600">+233 (0) 30 000 0000</p>,
            },
          ].map(({ label, content }) => (
            <div key={label}>
              <h3 className="font-black text-[#0F172A] text-sm uppercase tracking-widest mb-2">{label}</h3>
              {content}
            </div>
          ))}
        </div>

        {/* Contact form */}
        <div className="md:col-span-2">
          {sent ? (
            <div className="bg-[#006B3F] text-white p-10 text-center rounded-sm">
              <div className="text-5xl mb-4">✓</div>
              <p className="text-2xl font-black mb-2">Message Received!</p>
              <p className="text-green-100 text-sm">
                Thank you for reaching out to Standpoint GH News. Our team will respond within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-black text-gray-600 uppercase tracking-widest mb-1.5">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={update('name')}
                    className="w-full border border-gray-200 px-3 py-2.5 text-sm focus:outline-none focus:border-[#CE1126] transition-colors"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-xs font-black text-gray-600 uppercase tracking-widest mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={update('email')}
                    className="w-full border border-gray-200 px-3 py-2.5 text-sm focus:outline-none focus:border-[#CE1126] transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-black text-gray-600 uppercase tracking-widest mb-1.5">
                  Subject *
                </label>
                <select
                  required
                  value={form.subject}
                  onChange={update('subject')}
                  className="w-full border border-gray-200 px-3 py-2.5 text-sm focus:outline-none focus:border-[#CE1126] transition-colors bg-white"
                >
                  <option value="">Select a subject</option>
                  <option>News Tip</option>
                  <option>Story Idea</option>
                  <option>Correction Request</option>
                  <option>Advertising Enquiry</option>
                  <option>General Feedback</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-black text-gray-600 uppercase tracking-widest mb-1.5">
                  Message *
                </label>
                <textarea
                  required
                  rows={7}
                  value={form.message}
                  onChange={update('message')}
                  className="w-full border border-gray-200 px-3 py-2.5 text-sm focus:outline-none focus:border-[#CE1126] transition-colors resize-none"
                  placeholder="Tell us what's on your mind..."
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="bg-[#CE1126] hover:bg-red-700 text-white font-black px-8 py-3 text-xs uppercase tracking-widest transition-colors disabled:opacity-60"
              >
                {loading ? 'Sending…' : 'Send Message'}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
