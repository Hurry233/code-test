<script setup>
import { site } from '../config'
</script>

<template>
  <section class="stack-xxl" style="position: relative;">
    <div class="container center">
      <div class="badge reveal" style="margin:0 auto 14px;">
        <span class="dot"></span>
        <span>{{ site.hero.eyebrow }}</span>
      </div>
      <h1 class="h1 reveal" style="max-width:900px;margin:0 auto 18px;">{{ site.hero.title }}</h1>
      <p class="p-xl reveal" style="max-width:780px;margin:0 auto 28px;">{{ site.hero.desc }}</p>
      <div class="reveal" style="display:flex;gap:12px;justify-content:center;">
        <a class="btn btn-primary magnetic" :href="site.hero.ctaPrimary.href"><span>{{ site.hero.ctaPrimary.label }}</span></a>
        <a class="btn magnetic" :href="site.hero.ctaSecondary.href"><span>{{ site.hero.ctaSecondary.label }}</span></a>
      </div>
      <div class="stack-md"></div>
      <div class="card reveal" style="padding:20px;border-radius:20px;">
        <div style="border-radius:12px;overflow:hidden;border:1px solid var(--line);">
          <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:1px;background:var(--line);">
            <div v-for="i in 27" :key="i" style="aspect-ratio:1.2/1;background:linear-gradient(180deg, rgba(124,58,237,0.08), rgba(6,182,212,0.06));display:grid;place-items:center;color:#99a;font-size:12px;">AI {{ i }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
