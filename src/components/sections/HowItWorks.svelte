<script lang="ts">
  import { howItWorks } from '../../content/site';

  const icons: Record<string, string> = {
    MessageCircle: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />`,
    Code: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />`,
    Globe: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />`
  };
</script>

<section class="section-padding">
  <div class="container-custom">
    <h2 class="section-title">{howItWorks.title}</h2>
    <p class="section-subtitle">{howItWorks.subtitle}</p>

    <div class="mt-12 grid md:grid-cols-3 gap-8">
      {#each howItWorks.steps as step, index}
        <div class="relative text-center">
          <!-- Connector Line (hidden on mobile, last item) -->
          {#if index < howItWorks.steps.length - 1}
            <div class="hidden md:block absolute top-12 left-1/2 w-full h-0.5 bg-primary-200"></div>
          {/if}

          <!-- Step Number -->
          <div class="relative z-10 w-24 h-24 mx-auto bg-primary-600 rounded-full flex items-center justify-center shadow-lg">
            <span class="text-3xl font-bold text-white">{step.number}</span>
          </div>

          <!-- Icon -->
          <div class="mt-6 w-12 h-12 mx-auto bg-primary-100 rounded-lg flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {@html icons[step.icon]}
            </svg>
          </div>

          <h3 class="mt-4 text-xl font-bold text-secondary-900">{step.title}</h3>
          <p class="mt-2 text-secondary-600">{step.description}</p>
        </div>
      {/each}
    </div>
  </div>
</section>
