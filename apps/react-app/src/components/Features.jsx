import React from 'react'
import { site } from '../config'

export default function Features(){
  return (
    <section id="features" className="stack-xl">
      <div className="container">
        <div className="center" style={{marginBottom:34}}>
          <h2 className="h2 reveal">为企业而生的核心能力</h2>
          <p className="p reveal" style={{maxWidth:680, margin:'10px auto 0'}}>以可扩展架构与工作流连接企业内外部系统，从试点到规模化落地。</p>
        </div>
        <div className="row">
          {site.features.map((f, i)=> (
            <article key={i} className="card reveal col" style={{padding:24}}>
              <div style={{display:'flex', alignItems:'center', gap:10, marginBottom:10}}>
                <span className="dot"/>
                <h3 style={{margin:0}}>{f.title}</h3>
              </div>
              <p className="p" style={{marginTop:6}}>{f.desc}</p>
              <div style={{height:12}}/>
              <a className="small" href="#">了解更多 →</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
