import React from 'react'
import { site } from '../config'

export default function Hero() {
  const { hero } = site
  return (
    <section className="stack-xxl" style={{position:'relative'}}>
      <div className="container center">
        <div className="badge reveal" style={{margin:'0 auto 14px'}}>
          <span className="dot"/>
          <span>{hero.eyebrow}</span>
        </div>
        <h1 className="h1 reveal" style={{maxWidth:900, margin:'0 auto 18px'}}>{hero.title}</h1>
        <p className="p-xl reveal" style={{maxWidth:780, margin:'0 auto 28px'}}>{hero.desc}</p>
        <div className="reveal" style={{display:'flex', gap:12, justifyContent:'center'}}>
          <a className="btn btn-primary magnetic" href={hero.ctaPrimary.href}><span>{hero.ctaPrimary.label}</span></a>
          <a className="btn magnetic" href={hero.ctaSecondary.href}><span>{hero.ctaSecondary.label}</span></a>
        </div>
        <div className="stack-md"/>
        <HeroVisual />
      </div>
    </section>
  )
}

function HeroVisual(){
  return (
    <div className="card reveal" style={{padding:20, borderRadius:20}}>
      <div style={{borderRadius:12, overflow:'hidden', border:'1px solid var(--line)'}}>
        <div style={{display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap:1, background:'var(--line)'}}>
          {Array.from({length:27}).map((_,i)=> (
            <div key={i} style={{
              aspectRatio:'1.2/1',
              background: 'linear-gradient(180deg, rgba(124,58,237,0.08), rgba(6,182,212,0.06))',
              display:'grid', placeItems:'center', color:'#99a', fontSize:12
            }}>
              AI {i+1}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
