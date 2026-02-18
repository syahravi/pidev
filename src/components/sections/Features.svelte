<script lang="ts">
  import { features } from '../../content/site';
</script>

<section class="section-padding">
  <div class="container-custom">
    <h2 class="section-title">{features.title}</h2>
    <p class="section-subtitle">{features.subtitle}</p>

    <div class="mt-12 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {#each features.items as feature}
        <div class="flex items-start p-4 rounded-lg bg-primary-50/50 border border-primary-100">
          <div class="flex-shrink-0 w-10 h-10 rounded-lg bg-primary-100 flex items-center justify-center mr-3">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-primary-600" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
            </svg>
          </div>
          <span class="text-secondary-700 font-medium text-sm">{feature.title}</span>
        </div>
      {/each}
    </div>
  </div>
</section>
