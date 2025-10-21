import React, { useEffect, useRef } from 'react'
import { site } from '../config'

export default function Marquee(){
  const ref = useRef(null)
  useEffect(()=>{
    const el = ref.current
    if(!el) return
    let raf
    const step = () => {
      el.scrollLeft += 0.5
      if (el.scrollLeft >= el.scrollWidth/2) el.scrollLeft = 0
      raf = requestAnimationFrame(step)
    }
    raf = requestAnimationFrame(step)
    return ()=> cancelAnimationFrame(raf)
  },[])

  const items = [...site.logos, ...site.logos]
  return (
    <section aria-label="客户 Logo" className="stack-md">
      <div className="container">
        <div ref={ref} style={{overflow:'hidden', whiteSpace:'nowrap'}}>
          <div style={{display:'inline-flex'}}>
            {items.map((name, i)=> (
              <div key={i} className="logo" style={{width:160, marginRight:16}}>
                <span>{name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
