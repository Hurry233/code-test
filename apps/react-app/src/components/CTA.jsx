import React from 'react'

export default function CTA(){
  return (
    <section className="stack-xl">
      <div className="container">
        <div className="card reveal" style={{padding:'36px 28px', display:'flex', gap:14, alignItems:'center', justifyContent:'space-between', flexWrap:'wrap'}}>
          <div>
            <div className="badge" style={{marginBottom:10}}>
              <span className="dot"/>
              <span>立即开始</span>
            </div>
            <h3 style={{marginTop:0}} className="h2">十分钟搭建你的第一个 AI 助理</h3>
            <p className="p" style={{marginTop:8, maxWidth:640}}>提供云端托管与私有化部署两种模式，灵活接入企业现有系统。</p>
          </div>
          <div>
            <a className="btn btn-primary magnetic" href="#"><span>免费注册</span></a>
          </div>
        </div>
      </div>
    </section>
  )
}
