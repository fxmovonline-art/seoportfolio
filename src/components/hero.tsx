import React from 'react';
import pic from '../assets/pic.jpg';

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 via-white to-slate-50 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Side: Profile Image */}
          <div className="lg:col-span-5 flex justify-center lg:justify-start">
            <div className="relative group w-full max-w-[320px] sm:max-w-[380px] md:max-w-[420px] aspect-[4/5] rounded-[2.5rem] p-3 bg-white shadow-2xl shadow-slate-200 border border-slate-100/80 transition-all duration-500 hover:scale-[1.02]">
              {/* Decorative background gradients */}
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 to-purple-500/10 rounded-[2.5rem] blur-2xl -z-10 group-hover:scale-105 transition-transform duration-500" />
              
              {/* Outer boundary padding container */}
              <div className="w-full h-full overflow-hidden rounded-[2.2rem] bg-slate-100">
                <img
                  src={pic}
                  alt="Huzaifa Raheem"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-in-out scale-105 hover:scale-100"
                />
              </div>
            </div>
          </div>

          {/* Right Side: Text & Headline */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              
              {/* Badge/Sticker style name section */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
                  Huzaifa Raheem
                </h1>
                
                {/* Peeled Sticker style SEO Badge */}
                <div className="relative inline-flex items-center shrink-0">
                  <span className="bg-indigo-600 text-white font-display text-base sm:text-lg font-black px-6 py-2 rounded-full shadow-md transform -rotate-1 select-none tracking-wide">
                    SEO
                  </span>
                  {/* Subtle curl fold for sticker look */}
                  <span className="absolute right-0.5 bottom-0.5 w-4 h-4 bg-white/95 border-l border-t border-slate-200/80 rounded-tl-full shadow-inner transform rotate-12" />
                </div>
              </div>

              {/* Main Headline */}
              <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl font-black text-slate-900 tracking-tight leading-none">
                SEO Specialist
              </h2>
            </div>

            {/* 2-line Introduction */}
            <p className="font-sans text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
              I help brands skyrocket their search rankings, optimize technical performance, and dominate organic search results.
            </p>

            {/* CTA Button */}
            <div className="pt-2">
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2.5 bg-slate-950 text-white font-sans text-sm sm:text-base font-semibold px-8 py-4 rounded-full hover:bg-indigo-600 active:scale-[0.97] transition-all duration-300 shadow-lg shadow-slate-900/10 hover:shadow-indigo-500/20 hover:scale-[1.03]"
              >
                <span>Start Now</span>
                <span className="inline-block transition-transform duration-300 group-hover:animate-wave">
                  👋
                </span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
