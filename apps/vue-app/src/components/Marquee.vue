<script setup>
import { onMounted, ref } from 'vue'
import { site } from '../config'

const wrap = ref(null)

onMounted(() => {
  const el = wrap.value
  if (!el) return
  let raf
  const step = () => {
    el.scrollLeft += 0.5
    if (el.scrollLeft >= el.scrollWidth / 2) el.scrollLeft = 0
    raf = requestAnimationFrame(step)
  }
  raf = requestAnimationFrame(step)
  addEventListener('beforeunload', ()=> cancelAnimationFrame(raf))
})

const items = [...site.logos, ...site.logos]
</script>

<template>
  <section aria-label="客户 Logo" class="stack-md">
    <div class="container">
      <div ref="wrap" style="overflow: hidden; white-space: nowrap;">
        <div style="display:inline-flex;">
          <div v-for="(name, i) in items" :key="i" class="logo" style="width:160px;margin-right:16px;">
            <span>{{ name }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
