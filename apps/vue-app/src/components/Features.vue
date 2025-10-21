<script setup>
import { site } from '../config'
</script>

<template>
  <section id="features" class="stack-xl">
    <div class="container">
      <div class="center" style="margin-bottom:34px;">
        <h2 class="h2 reveal">为企业而生的核心能力</h2>
        <p class="p reveal" style="max-width:680px;margin:10px auto 0;">以可扩展架构与工作流连接企业内外部系统，从试点到规模化落地。</p>
      </div>
      <div class="row">
        <article v-for="(f, i) in site.features" :key="i" class="card reveal col" style="padding:24px;">
          <div style="display:flex;align-items:center;gap:10px;margin-bottom:10px;">
            <span class="dot"></span>
            <h3 style="margin:0;">{{ f.title }}</h3>
          </div>
          <p class="p" style="margin-top:6px;">{{ f.desc }}</p>
          <div style="height:12px;"></div>
          <a class="small" href="#">了解更多 →</a>
        </article>
      </div>
    </div>
  </section>
</template>
