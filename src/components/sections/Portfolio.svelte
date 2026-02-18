<script lang="ts">
  import { portfolio } from '../../content/site';
</script>

<section class="section-padding bg-secondary-50">
  <div class="container-custom">
    <h2 class="section-title">{portfolio.title}</h2>
    <p class="section-subtitle">{portfolio.subtitle}</p>

    <div class="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {#each portfolio.items as item}
        <div class="card group overflow-hidden p-0">
          <div class="aspect-video overflow-hidden">
            <img
              src={item.image}
              alt={item.title}
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              width="600"
              height="400"
              loading="lazy"
            />
          </div>
          <div class="p-6">
            <span class="text-xs font-semibold text-primary-600 uppercase tracking-wider">{item.category}</span>
            <h3 class="mt-2 text-lg font-bold text-secondary-900">{item.title}</h3>
          </div>
        </div>
      {/each}
    </div>

    <div class="mt-12 text-center">
      <a href="/portfolio" class="btn-secondary">
        Lihat Semua Portfolio
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </a>
    </div>
  </div>
</section>
