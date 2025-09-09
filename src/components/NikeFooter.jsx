import React, { useState } from "react";

export default function NikeFooter({ compact = false }) {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  function handleSubscribe(e) {
    e.preventDefault();
    if (!email) return;
    // Replace with real subscription call
    setSent(true);
    setTimeout(() => setSent(false), 3500);
    setEmail("");
  }

  return (
    <footer className="w-full border-t border-gray-200 dark:border-neutral-700 bg-white dark:bg-black text-neutral-800 dark:text-neutral-200">
      <div className="max-w-7xl mx-auto px-6 py-10 md:py-14">
        <div className={`grid gap-8 ${compact ? "md:grid-cols-3" : "md:grid-cols-4"}`}> 
          {/* Branding + short blurb */}
          <div className="flex flex-col gap-4">
            <a href="/" aria-label="Nike - Home" className="inline-flex items-center gap-3">
              {/* Simple wordmark + small swoosh-like svg (minimal, non-branded) */}
              <svg width="36" height="14" viewBox="0 0 36 14" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <path d="M1 8c6-2 12-5 34-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="font-semibold text-lg">NIKE</span>
            </a>

            <p className="text-sm leading-relaxed max-w-[20rem] opacity-90">
              Official product, designs and inspiration. Move faster, train better — made for athletes.
            </p>

            <div className="flex gap-3 items-center">
              <a href="#" aria-label="Facebook" className="text-sm hover:underline">Facebook</a>
              <a href="#" aria-label="Twitter" className="text-sm hover:underline">Twitter</a>
              <a href="#" aria-label="Instagram" className="text-sm hover:underline">Instagram</a>
            </div>
          </div>

          {/* Shop Links */}
          <nav className="flex flex-col gap-3" aria-label="Shop links">
            <h4 className="font-medium">Shop</h4>
            <a href="#" className="text-sm hover:underline">Men</a>
            <a href="#" className="text-sm hover:underline">Women</a>
            <a href="#" className="text-sm hover:underline">Kids</a>
            <a href="#" className="text-sm hover:underline">New Releases</a>
            <a href="#" className="text-sm hover:underline">Sale</a>
          </nav>

          {/* Company Links */}
          <nav className="flex flex-col gap-3" aria-label="Company links">
            <h4 className="font-medium">Company</h4>
            <a href="#" className="text-sm hover:underline">About Us</a>
            <a href="#" className="text-sm hover:underline">Careers</a>
            <a href="#" className="text-sm hover:underline">Sustainability</a>
            <a href="#" className="text-sm hover:underline">Press</a>
            <a href="#" className="text-sm hover:underline">Gift Cards</a>
          </nav>

          {/* Newsletter */}
          <div className="flex flex-col gap-3">
            <h4 className="font-medium">Join our newsletter</h4>
            <p className="text-sm opacity-90">Get updates on new drops, exclusive offers and events.</p>

            <form onSubmit={handleSubscribe} className="mt-2 flex gap-2">
              <label htmlFor="footer-email" className="sr-only">Email address</label>
              <input
                id="footer-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@email.com"
                required
                className="flex-1 min-w-0 rounded-md border border-gray-200 dark:border-neutral-700 px-3 py-2 text-sm bg-white dark:bg-neutral-900 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-indigo-500"
              />
              <button
                type="submit"
                className="rounded-md px-4 py-2 text-sm font-medium bg-black text-white dark:bg-white dark:text-black hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-indigo-500"
                aria-label="Subscribe to newsletter"
              >
                {sent ? "Subscribed" : "Subscribe"}
              </button>
            </form>

            <p className="text-xs opacity-80 mt-2">By subscribing you agree to receive marketing emails. You can unsubscribe at any time.</p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-6 border-t border-gray-100 dark:border-neutral-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm opacity-90">© {new Date().getFullYear()} NIKE, Inc. All Rights Reserved.</p>

          <div className="flex items-center gap-4">
            <a href="#" className="text-sm hover:underline">Terms</a>
            <a href="#" className="text-sm hover:underline">Privacy</a>
            <a href="#" className="text-sm hover:underline">Cookies</a>
            <a href="#" className="text-sm hover:underline">Site Map</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
