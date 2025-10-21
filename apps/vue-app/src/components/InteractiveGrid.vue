<script setup>
const items = [
  { title: '自动化流程', desc: '将 AI 能力编排进业务流程，节省 60% 人工操作。' },
  { title: '智能客服', desc: '多渠道一致回复，即插即用，节省座席压力。' },
  { title: '知识助理', desc: '对内知识问答与文档撰写，提高团队效率。' },
  { title: '风控审核', desc: '对内容进行识别与合规审查，降低风险。' },
]

function onMove(e){
  const el = e.currentTarget
  const r = el.getBoundingClientRect()
  const x = e.clientX - r.left
  const y = e.clientY - r.top
  el.style.setProperty('--mx', x + 'px')
  el.style.setProperty('--my', y + 'px')
}
</script>

<template>
  <section id="solutions" class="stack-xl">
    <div class="container">
      <div class="center" style="margin-bottom:34px;">
        <h2 class="h2 reveal">丰富场景，灵活接入</h2>
        <p class="p reveal" style="max-width:680px;margin:10px auto 0;">通过 SDK 与 API 快速集成，或使用零代码工作台立即启用。</p>
      </div>
      <div class="row">
        <div v-for="(it, idx) in items" :key="idx" class="card reveal col magnetic" style="padding:24px;position:relative;" @mousemove="onMove">
          <div style="position:absolute;inset:0;border-radius:16px;pointer-events:none;background:radial-gradient(220px 180px at var(--mx,50%) var(--my,50%), rgba(124,58,237,0.18), transparent 60%);"></div>
          <h3 style="margin-top:6px;">{{ it.title }}</h3>
          <p class="p" style="margin-top:6px;">{{ it.desc }}</p>
          <div style="height:8px;"></div>
          <a class="small" href="#">接入指引 →</a>
        </div>
      </div>
    </div>
  </section>
</template>
