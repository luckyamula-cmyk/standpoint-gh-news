'use client';

import { useState } from 'react';

export default function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    setTimeout(() => {
      setSubmitted(true);
      setLoading(false);
    }, 1000);
  };

  return (
    <section id="newsletter" className="bg-[#0F172A] text-white py-14 px-4 my-12 rounded-sm">
      <div className="max-w-2xl mx-auto text-center">
        <div className="flex justify-center gap-1 mb-5">
          <span className="h-1 w-10 bg-[#CE1126] block rounded-full" />
          <span className="h-1 w-10 bg-[#FCD116] block rounded-full" />
          <span className="h-1 w-10 bg-[#006B3F] block rounded-full" />
        </div>
        <h2 className="text-3xl font-black mb-2 tracking-tight">Stay Informed</h2>
        <p className="text-gray-400 mb-8 text-sm">
          Get Ghana&apos;s most important stories delivered to your inbox every morning — free, no spam, ever.
        </p>

        {submitted ? (
          <div className="bg-[#006B3F] text-white py-5 px-6 rounded-sm">
            <p className="font-black text-lg mb-1">You&apos;re subscribed!</p>
            <p className="text-sm text-green-200">
              Welcome to Standpoint GH News. Your first morning briefing arrives tomorrow.
            </p>
          </div>
        ) : (
          <>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className="flex-1 px-4 py-3 text-[#0F172A] bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#FCD116] rounded-sm"
              />
              <button
                type="submit"
                disabled={loading}
                className="bg-[#CE1126] hover:bg-red-700 text-white font-black px-6 py-3 text-xs uppercase tracking-widest transition-colors disabled:opacity-60 rounded-sm whitespace-nowrap"
              >
                {loading ? 'Subscribing…' : 'Subscribe Free'}
              </button>
            </form>
            <p className="text-gray-600 text-xs mt-4">
              By subscribing you agree to our Privacy Policy. Unsubscribe at any time.
            </p>
          </>
        )}
      </div>
    </section>
  );
}
