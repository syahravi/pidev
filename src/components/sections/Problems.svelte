<script lang="ts">
  import { problems } from '../../content/site';

  const icons: Record<string, string> = {
    AlertCircle: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />`,
    Clock: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />`,
    DollarSign: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />`,
    HelpCircle: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />`
  };
</script>

<section class="section-padding bg-secondary-50">
  <div class="container-custom">
    <h2 class="section-title">{problems.title}</h2>
    <p class="section-subtitle">{problems.subtitle}</p>

    <div class="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {#each problems.items as item}
        <div class="card text-center">
          <div class="w-16 h-16 mx-auto bg-red-100 rounded-full flex items-center justify-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {@html icons[item.icon]}
            </svg>
          </div>
          <h3 class="text-lg font-bold text-secondary-900">{item.title}</h3>
          <p class="mt-2 text-secondary-600 text-sm">{item.description}</p>
        </div>
      {/each}
    </div>
  </div>
</section>
