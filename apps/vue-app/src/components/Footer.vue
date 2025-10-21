<script setup>
const year = new Date().getFullYear()
</script>

<template>
  <footer class="stack-md">
    <div class="container" style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:12px;">
      <div style="display:flex;align-items:center;gap:10px;">
        <svg width="22" height="22" viewBox="0 0 64 64" aria-hidden="true">
          <defs>
            <linearGradient id="g2" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stop-color="#7c3aed" />
              <stop offset="1" stop-color="#06b6d4" />
            </linearGradient>
          </defs>
          <rect width="64" height="64" rx="12" fill="url(#g2)" />
        </svg>
        <strong>AICorp</strong>
      </div>
      <p class="small">© {{ year }} AICorp. All rights reserved.</p>
    </div>
  </footer>
</template>
