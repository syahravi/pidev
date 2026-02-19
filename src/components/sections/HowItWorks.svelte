<script lang="ts">
  import { howItWorks } from '../../content/site';
</script>

<section class="section-padding bg-white">
  <div class="container-custom">
    <h2 class="section-title">{howItWorks.title}</h2>
    <p class="section-subtitle">{howItWorks.subtitle}</p>

    <div class="mt-12 grid md:grid-cols-3 gap-8">
      {#each howItWorks.steps as step, index}
        <div class="relative text-center">
          <!-- Connector Line (hidden on mobile, last item) -->
          {#if index < howItWorks.steps.length - 1}
            <div class="hidden md:block absolute top-12 left-1/2 w-full h-0.5 bg-emerald-100"></div>
          {/if}

          <!-- Step Number with Emoji -->
          <div class="relative z-10 w-24 h-24 mx-auto bg-emerald-500 rounded-full flex flex-col items-center justify-center shadow-lg">
            <span class="text-2xl">{step.emoji}</span>
            <span class="text-sm font-bold text-white/80">{step.number}</span>
          </div>

          <h3 class="mt-6 text-xl font-bold text-ink">{step.title}</h3>
          <p class="mt-2 text-ink-mid">{step.description}</p>
        </div>
      {/each}
    </div>
  </div>
</section>
