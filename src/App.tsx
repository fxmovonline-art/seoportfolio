import React from 'react'
import Header from './components/header'
import Hero from './components/hero'
import CustomCursor from './components/customcursor'
import FloatingSkillsBar from './components/floatingskillsbar'
import About from './components/about'
import ExperienceSection from './components/experiencesection'
import CompletedProjects from './components/completedprojects'
import Footer from './components/footer'

const App = () => {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-indigo-100 selection:text-indigo-900">
      <CustomCursor />
      <Header />
      <Hero />
      <FloatingSkillsBar />
      <About />
      <ExperienceSection />
      <CompletedProjects />
      <Footer />
    </div>
  )
}

export default App