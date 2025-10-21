import React, { useRef } from 'react'

const items = [
  { title: '自动化流程', desc: '将 AI 能力编排进业务流程，节省 60% 人工操作。' },
  { title: '智能客服', desc: '多渠道一致回复，即插即用，节省座席压力。' },
  { title: '知识助理', desc: '对内知识问答与文档撰写，提高团队效率。' },
  { title: '风控审核', desc: '对内容进行识别与合规审查，降低风险。' },
]

export default function InteractiveGrid(){
  return (
    <section id="solutions" className="stack-xl">
      <div className="container">
        <div className="center" style={{marginBottom:34}}>
          <h2 className="h2 reveal">丰富场景，灵活接入</h2>
          <p className="p reveal" style={{maxWidth:680, margin:'10px auto 0'}}>通过 SDK 与 API 快速集成，或使用零代码工作台立即启用。</p>
        </div>
        <div className="row">
          {items.map((it, idx)=> (
            <MagneticCard key={idx} {...it} />
          ))}
        </div>
      </div>
    </section>
  )
}

function MagneticCard({ title, desc }){
  const ref = useRef(null)
  const onMove = (e) => {
    const el = ref.current
    if(!el) return
    const r = el.getBoundingClientRect()
    const x = e.clientX - r.left
    const y = e.clientY - r.top
    el.style.setProperty('--mx', x+'px')
    el.style.setProperty('--my', y+'px')
  }
  return (
    <div ref={ref} onMouseMove={onMove} className="card reveal col magnetic" style={{padding:24, position:'relative'}}>
      <div style={{position:'absolute', inset:0, borderRadius:16, pointerEvents:'none', background:'radial-gradient(220px 180px at var(--mx,50%) var(--my,50%), rgba(124,58,237,0.18), transparent 60%)'}}/>
      <h3 style={{marginTop:6}}>{title}</h3>
      <p className="p" style={{marginTop:6}}>{desc}</p>
      <div style={{height:8}}/>
      <a className="small" href="#">接入指引 →</a>
    </div>
  )
}
