import React from 'react';
import { Building2, Terminal, ShieldCheck, ArrowUpRight } from 'lucide-react';

const ExperienceSection = () => {
  const experiences = [
    {
      role: 'SEO Executive',
      company: 'Reckvision',
      focus: 'On-Page Optimization & Schema Audit',
      bullets: [
        'Deployed advanced Local Business Schema Markup and structured data schemas, resulting in a [+45%] increase in local map pack visibility and clicks.',
        'Executed end-to-end on-page optimizations and keyword mapping matrices, aligning search intent with pages to drive a [+18%] bump in organic CTR.',
        'Audited Google Search Console daily to fix redirect loops, duplicate pages, canonicalization errors, and XML sitemap indexing issues.',
        'Configured GA4 custom event tracking and build reports to track macro conversions, proving direct ROI from organic search campaigns.'
      ],
      tools: ['SEMrush', 'Google Analytics (GA4)', 'Google Tag Manager', 'Schema Validator', 'WordPress'],
      icon: ShieldCheck,
      color: 'text-emerald-600 bg-emerald-50 border-emerald-100/80',
      glowColor: 'hover:shadow-emerald-500/5 hover:border-emerald-200/50',
    },
    {
      role: 'SEO Specialist',
      company: 'Sky Technologies',
      focus: 'Technical SEO & Organic Scaling',
      bullets: [
        'Spearheaded comprehensive technical SEO audits, resolving crawlability, rendering, and rendering path bottlenecks to achieve a sitewide health score of [95%+].',
        'Scaled organic search traffic by [+150%] year-over-year by conducting deep competitor keyword gap analysis and implementing advanced content clustering.',
        'Optimized Core Web Vitals (LCP, INP, CLS) in collaboration with developers, improving page-load speeds by [1.8s] and boosting overall conversion rate by [+25%].',
        'Acquired high-authority backlinks and built clean internal linking architectures, driving first-page rankings for [30+] high-value commercial keywords.'
      ],
      tools: ['Google Search Console', 'Ahrefs', 'Screaming Frog', 'PageSpeed Insights'],
      icon: Terminal,
      color: 'text-indigo-600 bg-indigo-50 border-indigo-100/80',
      glowColor: 'hover:shadow-indigo-500/5 hover:border-indigo-200/50',
    }
  ];

  return (
    <section id="experience" className="py-24 bg-slate-50/50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-indigo-100/20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/3 left-0 w-80 h-80 bg-emerald-100/20 rounded-full blur-3xl -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="space-y-4 text-center mb-16">
          <span className="text-xs sm:text-sm font-extrabold text-indigo-600 tracking-widest uppercase">
            Work History
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Professional Experience
          </h2>
          <div className="w-12 h-1 bg-indigo-600 mx-auto rounded-full mt-4" />
        </div>

        {/* Timeline container */}
        <div className="relative ml-4 sm:ml-6 pl-6 sm:pl-10 space-y-12">
          {/* Vertical Gradient Timeline Line */}
          <div className="absolute left-0 top-3 bottom-3 w-[2px] bg-gradient-to-b from-emerald-500 via-purple-500 to-indigo-500/20 rounded-full" />

          {experiences.map((exp, index) => {
            const IconComponent = exp.icon;
            return (
              <div key={index} className="relative group">
                {/* Timeline Indicator Dot */}
                <span className="absolute -left-[31px] sm:-left-[47px] top-2.5 w-6 h-6 rounded-full border-4 border-slate-50 bg-indigo-600 shadow-md shadow-indigo-600/30 scale-110 flex items-center justify-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-white" />
                </span>

                {/* Experience Card */}
                <div className={`bg-white/90 backdrop-blur-xs border border-slate-100 rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-2xl transition-all duration-350 transform hover:-translate-y-1 ${exp.glowColor}`}>
                  
                  {/* Top Header Section */}
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                    <div className="flex items-start gap-4">
                      {/* Brand-styled Icon Box */}
                      <div className={`w-12 h-12 rounded-2xl border ${exp.color.split(' ').slice(1).join(' ')} flex items-center justify-center ${exp.color.split(' ')[0]} shrink-0 shadow-sm transition-transform duration-300 group-hover:scale-105`}>
                        <IconComponent className="w-6 h-6" />
                      </div>
                      
                      <div className="space-y-1">
                        <h3 className="font-display font-bold text-slate-900 text-lg sm:text-xl leading-snug">
                          {exp.role}
                        </h3>
                        
                        <div className="flex items-center gap-1.5 text-slate-500 font-sans text-sm sm:text-base">
                          <Building2 className="w-4 h-4 text-slate-400 shrink-0" />
                          <span className="font-semibold text-slate-700">{exp.company}</span>
                        </div>
                      </div>
                    </div>

                    {/* Core Focus Badge */}
                    <span className="text-[11px] font-extrabold text-indigo-700 bg-indigo-50 border border-indigo-100/50 px-3.5 py-1.5 rounded-xl w-fit shrink-0 tracking-wide uppercase">
                      {exp.focus}
                    </span>
                  </div>

                  {/* Bullet Achievements */}
                  <ul className="space-y-4">
                    {exp.bullets.map((bullet, bIndex) => (
                      <li key={bIndex} className="flex items-start gap-3 text-slate-600 font-sans text-sm sm:text-base leading-relaxed group/item">
                        <ArrowUpRight className="w-5 h-5 text-indigo-500 shrink-0 mt-0.5 transition-transform duration-200 group-hover/item:translate-x-0.5 group-hover/item:-translate-y-0.5" />
                        <span>
                          {/* Highlight placeholder metrics inside brackets */}
                          {bullet.split(/(\[.*?\])/).map((part, pIndex) => {
                            if (part.startsWith('[') && part.endsWith(']')) {
                              return (
                                <strong key={pIndex} className="text-slate-950 font-black bg-slate-100 border border-slate-200/50 px-1.5 py-0.5 rounded font-display">
                                  {part.slice(1, -1)}
                                </strong>
                              );
                            }
                            return part;
                          })}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech stack / Tools badge deck */}
                  <div className="mt-8 pt-6 border-t border-slate-100 flex flex-wrap gap-2 items-center">
                    <span className="text-xs font-extrabold text-slate-400 uppercase tracking-widest mr-2">Key Tools:</span>
                    {exp.tools.map((tool, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-xs font-bold text-slate-600 bg-slate-50 border border-slate-100/80 rounded-xl px-3 py-1.5 hover:bg-indigo-50 hover:text-indigo-600 hover:border-indigo-100/50 transition-colors duration-250 select-none cursor-default"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
