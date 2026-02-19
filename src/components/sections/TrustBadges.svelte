<script lang="ts">
  interface Props {
    badges?: string[];
    variant?: 'light' | 'dark';
  }

  let {
    badges = [
      "Bayar setelah lihat hasil",
      "Revisi sampai puas",
      "Garansi 30 hari"
    ],
    variant = 'light'
  }: Props = $props();
</script>

<div class="flex flex-wrap items-center justify-center gap-4 md:gap-6">
  {#each badges as badge}
    <div class="trust-badge {variant === 'dark' ? 'text-white/80' : 'text-ink-mid'}">
      <svg
        class="w-5 h-5 {variant === 'dark' ? 'text-success' : 'text-success'}"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
      </svg>
      <span class="text-sm font-medium">{badge}</span>
    </div>
  {/each}
</div>
