import React from 'react';
import {
  Cpu,
  Key,
  Target,
  BarChart3
} from 'lucide-react';

const About = () => {
  const specializations = [
    {
      title: 'Technical SEO & Audits',
      desc: 'Optimizing site speed, fixing crawl errors, and implementing advanced Local Business Schema.',
      icon: Cpu,
      color: 'text-indigo-600 bg-indigo-50 border-indigo-100',
    },
    {
      title: 'On-Page & Content Strategy',
      desc: 'High-converting keyword research, semantic content mapping, and perfect site architecture.',
      icon: Key,
      color: 'text-emerald-600 bg-emerald-50 border-emerald-100',
    },
    {
      title: 'Competitor Intelligence',
      desc: 'Analyzing competitor keyword gaps and backlink profiles to steal traffic opportunities.',
      icon: Target,
      color: 'text-rose-600 bg-rose-50 border-rose-100',
    },
    {
      title: 'Data-Driven Tracking',
      desc: 'Monitoring Google Search Console & GA4 to constantly improve and maintain top rankings.',
      icon: BarChart3,
      color: 'text-amber-600 bg-amber-50 border-amber-100',
    },
  ];

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Background Decorative Blobs */}
      <div className="absolute top-1/4 -left-64 w-96 h-96 bg-indigo-200/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/4 -right-64 w-96 h-96 bg-emerald-200/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          
          {/* Header */}
          <div className="space-y-4 text-center">
            <span className="text-xs sm:text-sm font-extrabold text-indigo-600 tracking-widest uppercase">
              About Me
            </span>
            <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Turning Search Traffic <br />
              <span className="text-indigo-600">Into Business Revenue</span>
            </h3>
            <div className="w-12 h-1 bg-indigo-650 mx-auto rounded-full mt-4" />
          </div>

          {/* Biography Text */}
          <div className="space-y-6 font-sans text-base sm:text-lg text-slate-600 leading-relaxed text-center sm:text-left">
            <p>
              Hey, I’m <strong className="text-slate-900 font-semibold">Huzaifa Raheem</strong> — an SEO Expert & Technical Strategist dedicated to turning search traffic into business revenue. I don't just chase vanity metrics like "impressions"; I focus on driving targeted organic traffic that <strong className="text-slate-900 font-semibold">actually converts</strong>.
            </p>
            <p>
              With a strong technical background, I understand exactly how search algorithms work. From running deep technical audits to dominating local search rankings, I build data-driven strategies that outrank competitors and deliver sustainable, long-term growth.
            </p>
          </div>

          {/* Specialization List */}
          <div className="space-y-6 pt-4">
            <h4 className="font-display font-bold text-slate-900 text-lg flex items-center justify-center sm:justify-start gap-2">
              <span>🎯</span> What I Specialize In:
            </h4>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {specializations.map((spec, index) => {
                const Icon = spec.icon;
                return (
                  <div
                    key={index}
                    className="p-6 bg-slate-50/50 border border-slate-100 rounded-2xl hover:bg-white hover:border-slate-200 hover:shadow-md transition-all duration-300 group"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`p-2 rounded-xl border ${spec.color.split(' ').slice(1).join(' ')} group-hover:scale-105 transition-transform duration-300 shrink-0`}>
                        <Icon className={`w-4.5 h-4.5 ${spec.color.split(' ')[0]}`} />
                      </div>
                      <h5 className="font-display font-bold text-slate-900 text-sm sm:text-base">
                        {spec.title}
                      </h5>
                    </div>
                    <p className="font-sans text-xs sm:text-sm text-slate-500 leading-relaxed">
                      {spec.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Quote block */}
          <div className="relative bg-indigo-50/40 border border-indigo-100/50 p-6 sm:p-8 rounded-3xl flex items-center justify-center text-center overflow-hidden pt-8">
            {/* Left accent bar */}
            <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-indigo-600" />
            
            <p className="font-display font-bold text-slate-900 text-base sm:text-lg lg:text-xl italic leading-relaxed max-w-2xl">
              "Let’s stop guessing and start ranking. I’m here to get your business to the First Page of Google."
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
