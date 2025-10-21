<script setup>
import { onMounted, ref } from 'vue'
import NavBar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
import Marquee from './components/Marquee.vue'
import Features from './components/Features.vue'
import InteractiveGrid from './components/InteractiveGrid.vue'
import CTA from './components/CTA.vue'
import SiteFooter from './components/Footer.vue'

const bgRef = ref(null)

onMounted(() => {
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in') })
  }, { threshold: 0.15 })
  document.querySelectorAll('.reveal').forEach(el => io.observe(el))
})

const onMove = (e) => {
  const el = bgRef.value
  if(!el) return
  const r = el.getBoundingClientRect()
  const x = e.clientX - r.left
  const y = e.clientY - r.top
  el.style.setProperty('--mx', x + 'px')
  el.style.setProperty('--my', y + 'px')
}
</script>

<template>
  <div>
    <NavBar />
    <main class="grid-bg" ref="bgRef" @mousemove="onMove">
      <Hero />
      <Marquee />
      <Features />
      <InteractiveGrid />
      <CTA />
    </main>
    <SiteFooter />
  </div>
</template>
