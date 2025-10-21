import React, { useEffect, useRef } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Features from './components/Features'
import InteractiveGrid from './components/InteractiveGrid'
import CTA from './components/CTA'
import Footer from './components/Footer'

export default function App(){
  const bgRef = useRef(null)

  useEffect(() => {
    const io = new IntersectionObserver((entries)=>{
      entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('in')
      })
    }, { threshold: 0.15 })
    document.querySelectorAll('.reveal').forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [])

  const onMove = (e) => {
    const el = bgRef.current
    if(!el) return
    const r = el.getBoundingClientRect()
    const x = e.clientX - r.left
    const y = e.clientY - r.top
    el.style.setProperty('--mx', x+'px')
    el.style.setProperty('--my', y+'px')
  }

  return (
    <div>
      <Navbar />
      <main className="grid-bg" ref={bgRef} onMouseMove={onMove}>
        <Hero />
        <Marquee />
        <Features />
        <InteractiveGrid />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
