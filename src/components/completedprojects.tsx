import React from 'react';
import { ExternalLink } from 'lucide-react';

interface Project {
  number: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
}

const CompletedProjects = () => {
  const projects: Project[] = [
    {
      number: '01',
      title: 'Texas Windows',
      description:
        'Deployed high-authority Cloud Stacking networks and engineered local business Schema Markup (JSON-LD) and executed an advanced link-building campaign to build high-quality backlinks and launched an optimized blog strategy. ',
      tags: ['SEO', 'Technical Audit', 'Analytics'],
      image: 'src/assets/Picture1.jpg',
      link: 'https://texaswindows.com/',
    },
    {
      number: '02',
      title: 'JMR Blinds Inc',
      description:
        'Generated high-authority backlinks through off-page SEO campaigns to consistently boost domain trust flow and conducted competitor keyword research to architect an optimized blog content strategy that drives targeted organic traffic.',
      tags: ['Local SEO', 'Schema', 'Content'],
      image: 'src/assets/Picture2.jpg',
      link: 'https://jmrblindsinc.com/',
    },
    {
      number: '03',
      title: 'Valley Medical Weight Loss',
      description:
        'Engineered specialized healthcare local business Schema markups to capture highly targeted local search intent and audited the domain structure using Google Search Console to eliminate indexing errors, loops, and duplicate content flags.',
      tags: ['Local SEO on 4 Locations', 'Blog', 'High DA Backlinks'],
      image: 'src/assets/Picture3.png',
      link: 'https://www.valleymedicalweightloss.com/ ',
    },
  ];

  return (
    <section id="projects" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent" />
      <div className="absolute top-1/3 -left-40 w-80 h-80 bg-indigo-900/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-40 w-80 h-80 bg-purple-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="space-y-4 text-center mb-20">
          <span className="text-xs sm:text-sm font-extrabold text-indigo-400 tracking-widest uppercase">
            Portfolio
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            Completed Projects
          </h2>
          <div className="w-12 h-1 bg-indigo-500 mx-auto rounded-full mt-4" />
        </div>

        {/* Projects List */}
        <div className="space-y-24">
          {projects.map((project, index) => {
            const isEven = index % 2 === 1;

            return (
              <div key={index} className="group">
                {/* Divider line with number */}
                <div className="flex items-center gap-4 mb-8">
                  <span className="font-display text-5xl sm:text-6xl font-black text-indigo-500/20 leading-none select-none">
                    {project.number}
                  </span>
                  <div className="flex-1 h-[1px] bg-gradient-to-r from-indigo-500/30 to-transparent" />
                </div>

                {/* Content Grid */}
                <div
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
                    isEven ? 'lg:direction-rtl' : ''
                  }`}
                >
                  {/* Text Side */}
                  <div className={`space-y-6 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-black text-white leading-tight group-hover:text-indigo-300 transition-colors duration-300">
                      {project.title}
                    </h3>

                    <p className="font-sans text-base sm:text-lg text-slate-400 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2.5">
                      {project.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-xs font-bold text-indigo-300 bg-indigo-500/10 border border-indigo-500/20 rounded-full px-4 py-1.5 uppercase tracking-wider select-none"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* CTA */}
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white font-sans text-sm font-bold px-6 py-3 rounded-full transition-all duration-300 hover:scale-[1.03] shadow-lg shadow-indigo-600/20 hover:shadow-indigo-500/30 mt-2 uppercase tracking-wider group/btn"
                    >
                      <span>View Details</span>
                      <ExternalLink className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                    </a>
                  </div>

                  {/* Image / Preview Side */}
                  <div className={`${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-slate-900/50 aspect-video shadow-2xl shadow-black/30 group-hover:border-indigo-500/30 transition-all duration-500">
                      {project.image ? (
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <span className="font-display text-sm font-bold text-slate-600 uppercase tracking-widest">
                            Screenshot Here
                          </span>
                        </div>
                      )}
                      {/* Hover overlay glow */}
                      <div className="absolute inset-0 bg-gradient-to-t from-indigo-600/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                    </div>
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

export default CompletedProjects;
