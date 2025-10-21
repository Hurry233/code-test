import React from 'react'
import { site } from '../config'

export default function Navbar() {
  return (
    <header className="nav-blur" style={{position:'sticky', top:0, zIndex:50}}>
      <div className="container" style={{display:'flex', alignItems:'center', justifyContent:'space-between', padding:'14px 20px', gap:12}}>
        <a href="#" style={{display:'flex', alignItems:'center', gap:10, fontWeight:600}}>
          <svg width="28" height="28" viewBox="0 0 64 64" aria-hidden>
            <defs>
              <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor="#7c3aed"/>
                <stop offset="1" stopColor="#06b6d4"/>
              </linearGradient>
            </defs>
            <rect width="64" height="64" rx="12" fill="url(#g1)"/>
          </svg>
          <span>AICorp</span>
        </a>
        <nav className="hide-mobile" style={{display:'flex', gap:22, alignItems:'center'}}>
          {site.nav.map(i => (
            <a key={i.label} href={i.href} className="p" style={{color:'var(--muted)'}}>{i.label}</a>
          ))}
        </nav>
        <div style={{display:'flex', gap:10, alignItems:'center'}}>
          <a className="btn magnetic" href="#"><span>登录</span></a>
          <a className="btn btn-primary magnetic" href="#"><span>免费试用</span></a>
        </div>
      </div>
    </header>
  )
}
