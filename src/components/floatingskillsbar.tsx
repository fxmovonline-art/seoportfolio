import React from 'react';
import {
  Search,
  BarChart3,
  Cpu,
  Key,
  Link,
  Target,
  FileText,
  Code,
  MapPin,
  Zap,
  Globe
} from 'lucide-react';
import reactLogo from '../assets/react.svg';

const FloatingSkillsBar = () => {
  const skills = [
    { name: 'Google Search Console', icon: Search, color: 'text-orange-500 bg-orange-50 border-orange-100' },
    { name: 'Google Analytics (GA4)', icon: BarChart3, color: 'text-amber-500 bg-amber-50 border-amber-100' },
    { name: 'Technical SEO', icon: Cpu, color: 'text-indigo-500 bg-indigo-50 border-indigo-100' },
    { name: 'Keyword Research', icon: Key, color: 'text-emerald-500 bg-emerald-50 border-emerald-100' },
    { name: 'Link Building', icon: Link, color: 'text-blue-500 bg-blue-50 border-blue-100' },
    { name: 'Competitor Analysis', icon: Target, color: 'text-rose-500 bg-rose-50 border-rose-100' },
    { name: 'React & JS SEO', logo: reactLogo, isReact: true, color: 'text-sky-500 bg-sky-50 border-sky-100' },
    { name: 'Content Strategy', icon: FileText, color: 'text-violet-500 bg-violet-50 border-violet-100' },
    { name: 'Schema Markup', icon: Code, color: 'text-cyan-500 bg-cyan-50 border-cyan-100' },
    { name: 'Local SEO', icon: MapPin, color: 'text-red-500 bg-red-50 border-red-100' },
    { name: 'Core Web Vitals', icon: Zap, color: 'text-yellow-600 bg-yellow-50 border-yellow-100' },
    { name: 'On-Page SEO', icon: Globe, color: 'text-teal-500 bg-teal-50 border-teal-100' },
  ];

  // Duplicate list to achieve seamless infinite marquee loop
  const doubleSkills = [...skills, ...skills];

  return (
    <section className="py-12 bg-slate-50/50 border-y border-slate-100 overflow-hidden relative">
      {/* Side Fade Gradients for Premium Vignette Effect */}
      <div className="absolute inset-y-0 left-0 w-20 sm:w-32 bg-gradient-to-r from-slate-50 via-slate-50/80 to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-20 sm:w-32 bg-gradient-to-l from-slate-50 via-slate-50/80 to-transparent z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 text-center lg:text-left">
        <h3 className="font-display text-xs sm:text-sm font-extrabold tracking-widest text-slate-400 uppercase">
          Expertise & Tools
        </h3>
      </div>

      {/* Marquee Wrapper with Hover Pause */}
      <div className="hover-pause relative flex w-full overflow-x-hidden py-2 cursor-default">
        <div className="animate-marquee-right flex gap-6 items-center">
          {doubleSkills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={index}
                className="flex items-center gap-3 bg-white border border-slate-100 rounded-2xl px-5 py-3.5 shadow-sm hover:shadow-md hover:border-slate-200/60 transition-all duration-300 select-none shrink-0"
              >
                {skill.isReact && skill.logo ? (
                  <div className="p-1 rounded-lg bg-sky-50 border border-sky-100/80">
                    <img
                      src={skill.logo}
                      alt="React Logo"
                      className="w-5 h-5 animate-spin-slow"
                    />
                  </div>
                ) : (
                  Icon && (
                    <div className={`p-1.5 rounded-lg border ${skill.color.split(' ').slice(1).join(' ')}`}>
                      <Icon className={`w-4 h-4 ${skill.color.split(' ')[0]}`} />
                    </div>
                  )
                )}
                <span className="font-sans font-semibold text-slate-800 text-sm sm:text-base">
                  {skill.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FloatingSkillsBar;
