<script lang="ts">
  import { problems } from '../../content/site';
</script>

<section class="section-padding bg-cream">
  <div class="container-custom">
    <h2 class="section-title">{problems.title}</h2>
    <p class="section-subtitle">{problems.subtitle}</p>

    <div class="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {#each problems.items as item}
        <div class="card text-center">
          <div class="text-5xl mb-4">{item.emoji}</div>
          <h3 class="text-lg font-bold text-ink">{item.title}</h3>
          <p class="mt-2 text-ink-mid text-sm">{item.description}</p>
        </div>
      {/each}
    </div>
  </div>
</section>
