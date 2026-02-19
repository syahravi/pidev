<script lang="ts">
  import { features } from '../../content/site';
</script>

<section class="section-padding bg-white">
  <div class="container-custom">
    <h2 class="section-title">{features.title}</h2>
    <p class="section-subtitle">{features.subtitle}</p>

    <div class="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {#each features.items as feature}
        <div class="flex items-center p-4 rounded-2xl bg-cream border border-secondary-100">
          <svg class="flex-shrink-0 w-6 h-6 text-success mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
          </svg>
          <span class="text-ink-mid font-medium text-sm">{feature.title}</span>
        </div>
      {/each}
    </div>
  </div>
</section>
