import React from 'react';
import { ArrowUpRight, TrendingUp } from 'lucide-react';

// ── Inline SVG Brand Icons ──────────────────────────────────
const LinkedInIcon = () => (
  <svg role="img" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const XIcon = () => (
  <svg role="img" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg role="img" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12c0 3.259.014 3.668.072 4.948.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24c3.259 0 3.668-.014 4.948-.072 1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.689.072-4.948 0-3.259-.014-3.667-.072-4.947-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.259 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06zm0 3.678a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405a1.441 1.441 0 0 1-2.88 0 1.441 1.441 0 0 1 2.88 0z"/>
  </svg>
);

const FacebookIcon = () => (
  <svg role="img" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const WhatsAppIcon = () => (
  <svg role="img" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
  </svg>
);

const Footer = () => {
  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
  ];

  const services = [
    { label: 'Technical SEO', href: '#' },
    { label: 'Keyword Research', href: '#' },
    { label: 'Local SEO', href: '#' },
    { label: 'SEO Audits', href: '#' },
  ];

  const socials = [
    {
      Icon: LinkedInIcon,
      href: 'https://www.linkedin.com/in/huzaifa-raheem-8628643b2/',
      label: 'LinkedIn',
      color: 'hover:bg-blue-600 hover:border-blue-600',
    },
    {
      Icon: XIcon,
      href: 'https://x.com/just_Huzaifa_',
      label: 'X (Twitter)',
      color: 'hover:bg-slate-700 hover:border-slate-700',
    },
    {
      Icon: InstagramIcon,
      href: 'https://www.instagram.com/huzaifaraheemawan?igsh=N2MwZTh6cHV6MG8%3D',
      label: 'Instagram',
      color: 'hover:bg-rose-500 hover:border-rose-500',
    },
    {
      Icon: FacebookIcon,
      href: 'https://www.facebook.com/huzaifa.rahim.35',
      label: 'Facebook',
      color: 'hover:bg-blue-700 hover:border-blue-700',
    },
    {
      Icon: WhatsAppIcon,
      href: 'https://wa.me/923435156058',
      label: 'WhatsApp',
      color: 'hover:bg-emerald-500 hover:border-emerald-500',
    },
  ];

  return (
    <footer className="bg-[#0e0f1a] text-white relative overflow-hidden">
      {/* Subtle top gradient line */}
      <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-indigo-500 via-purple-500 to-emerald-500" />

      {/* Background Blobs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-indigo-800/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-800/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ─── Hero CTA Row ─── */}
        <div className="pt-20 pb-14 border-b border-white/10">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
            {/* Left headline */}
            <div className="max-w-2xl">
              <p className="font-display text-base font-semibold text-slate-400 mb-3 tracking-wide">
                Excited?
              </p>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black leading-tight text-white">
                Let's Work{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-emerald-400">
                  Together!
                </span>
              </h2>
              <p className="mt-4 font-sans text-slate-400 text-base sm:text-lg max-w-lg leading-relaxed">
                Ready to dominate the first page of Google? Let's build a data-driven SEO strategy that converts organic traffic into real business revenue.
              </p>
            </div>

            {/* CTA arrow button */}
            <a
              href="https://wa.me/923435156058"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-white/20 flex items-center justify-center shrink-0 hover:bg-indigo-600 hover:border-indigo-600 transition-all duration-300 hover:scale-105"
              aria-label="Contact on WhatsApp"
            >
              <ArrowUpRight className="w-7 h-7 sm:w-8 sm:h-8 text-white transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          {/* Email contact */}
          <a
            href="mailto:huzaifaraheem2001@gmail.com"
            className="mt-8 inline-block font-display text-2xl sm:text-3xl font-bold text-indigo-400 hover:text-indigo-300 transition-colors duration-200 tracking-tight underline-offset-4 hover:underline"
          >
            huzaifaraheem2001@gmail.com
          </a>

          {/* Social Icons */}
          <div className="mt-8 flex items-center gap-3">
            {socials.map((s) => {
              const Icon = s.Icon;
              return (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className={`w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-slate-400 hover:text-white transition-all duration-300 hover:scale-110 hover:-translate-y-0.5 ${s.color}`}
                >
                  <Icon />
                </a>
              );
            })}
          </div>
        </div>

        {/* ─── Links Grid Row ─── */}
        <div className="py-14 grid grid-cols-2 sm:grid-cols-4 gap-8 border-b border-white/10">
          {/* Brand */}
          <div className="col-span-2 sm:col-span-1">
            <a href="#home" className="flex items-center gap-2 mb-4 group w-fit">
              <div className="w-8 h-8 rounded-lg bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center">
                <TrendingUp className="w-4 h-4 text-indigo-400 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <span className="font-display font-extrabold text-white text-lg tracking-tight group-hover:text-indigo-400 transition-colors duration-300">
                Huzaifa Raheem
              </span>
            </a>
            <p className="font-sans text-sm text-slate-500 leading-relaxed max-w-[200px]">
              SEO Expert helping brands rank, convert, and grow — sustainably.
            </p>
          </div>

          {/* Navigation links */}
          <div>
            <h4 className="font-display font-extrabold text-xs uppercase tracking-widest text-slate-400 mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-sans text-sm text-slate-400 hover:text-white transition-colors duration-200 flex items-center gap-1.5 group w-fit"
                  >
                    <span className="w-1 h-1 rounded-full bg-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-extrabold text-xs uppercase tracking-widest text-slate-400 mb-5">
              Services
            </h4>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    className="font-sans text-sm text-slate-400 hover:text-white transition-colors duration-200 flex items-center gap-1.5 group w-fit"
                  >
                    <span className="w-1 h-1 rounded-full bg-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-extrabold text-xs uppercase tracking-widest text-slate-400 mb-5">
              Contact
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://wa.me/923435156058"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-sm text-slate-400 hover:text-white transition-colors duration-200 w-fit block"
                >
                  +92 343 5156058
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/huzaifa-raheem-8628643b2/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-sm text-slate-400 hover:text-white transition-colors duration-200 w-fit block"
                >
                  LinkedIn Profile
                </a>
              </li>
              <li>
                <a
                  href="https://x.com/just_Huzaifa_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-sm text-slate-400 hover:text-white transition-colors duration-200 w-fit block"
                >
                  X / Twitter
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* ─── Copyright Bar ─── */}
        <div className="py-7 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-sans text-slate-600">
          <p>
            © {new Date().getFullYear()} <span className="text-slate-400 font-semibold">Huzaifa Raheem</span>. All Rights Reserved.
          </p>
          <p className="text-center sm:text-right">
            Designed & Built with ❤️ for the{' '}
            <span className="text-indigo-500 font-semibold">First Page of Google</span>
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
