<script lang="ts">
  import { statsBar } from '../../content/site';
</script>

<!-- Stats bar yang menyatu dengan hero (dark theme) -->
<section class="bg-slate-900 py-8 border-y border-slate-800">
  <div class="container-custom">
    <div class="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
      {#each statsBar.items as stat}
        <div class="text-center">
          <div class="text-2xl md:text-3xl font-extrabold text-emerald-400">{stat.number}</div>
          <div class="text-sm text-slate-400 mt-1">{stat.label}</div>
        </div>
      {/each}
    </div>
  </div>
</section>
