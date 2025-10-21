<script setup>
import { site } from '../config'
</script>

<template>
  <header class="nav-blur" style="position: sticky; top: 0; z-index: 50;">
    <div class="container" style="display:flex;align-items:center;justify-content:space-between;padding:14px 20px;gap:12px;">
      <a href="#" style="display:flex;align-items:center;gap:10px;font-weight:600;">
        <svg width="28" height="28" viewBox="0 0 64 64" aria-hidden="true">
          <defs>
            <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stop-color="#7c3aed" />
              <stop offset="1" stop-color="#06b6d4" />
            </linearGradient>
          </defs>
          <rect width="64" height="64" rx="12" fill="url(#g1)" />
        </svg>
        <span>AICorp</span>
      </a>
      <nav class="hide-mobile" style="display:flex;gap:22px;align-items:center;">
        <a v-for="i in site.nav" :key="i.label" :href="i.href" class="p" style="color:var(--muted)">{{ i.label }}</a>
      </nav>
      <div style="display:flex;gap:10px;align-items:center;">
        <a class="btn magnetic" href="#"><span>登录</span></a>
        <a class="btn btn-primary magnetic" href="#"><span>免费试用</span></a>
      </div>
    </div>
  </header>
</template>
