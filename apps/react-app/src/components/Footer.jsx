import React from 'react'

export default function Footer(){
  return (
    <footer className="stack-md">
      <div className="container" style={{display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap', gap:12}}>
        <div style={{display:'flex', alignItems:'center', gap:10}}>
          <svg width="22" height="22" viewBox="0 0 64 64" aria-hidden>
            <defs>
              <linearGradient id="g2" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor="#7c3aed"/>
                <stop offset="1" stopColor="#06b6d4"/>
              </linearGradient>
            </defs>
            <rect width="64" height="64" rx="12" fill="url(#g2)"/>
          </svg>
          <strong>AICorp</strong>
        </div>
        <p className="small">© {new Date().getFullYear()} AICorp. All rights reserved.</p>
      </div>
    </footer>
  )
}
