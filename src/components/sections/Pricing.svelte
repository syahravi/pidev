<script lang="ts">
  import { pricing, features } from '../../content/site';
  import { getServiceWaLink } from '../../content/wa';
</script>

<section class="section-padding gradient-subtle">
  <div class="container-custom">
    <h2 class="section-title">{pricing.title}</h2>
    <p class="section-subtitle">{pricing.subtitle}</p>

    <div class="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {#each pricing.categories as category}
        <div
          class="card relative {category.popular ? 'border-primary-500 border-2' : ''}"
        >
          {#if category.popular}
            <div class="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <span class="bg-primary-600 text-white text-sm font-semibold px-4 py-1 rounded-full">
                Populer
              </span>
            </div>
          {/if}

          <h3 class="text-xl font-bold text-secondary-900">{category.title}</h3>
          <p class="mt-2 text-secondary-600">{category.description}</p>

          <div class="mt-6">
            <span class="text-sm text-secondary-500">{category.pricePrefix}</span>
            <span class="text-4xl font-bold text-primary-600">{category.price}</span>
            <span class="text-xl text-primary-600">{category.priceSuffix}</span>
          </div>

          <p class="mt-4 text-sm text-secondary-500">
            Termasuk {features.items.length} fitur premium
          </p>

          <a
            href={getServiceWaLink(category.id)}
            target="_blank"
            rel="noopener noreferrer"
            class="mt-6 w-full text-center {category.popular ? 'btn-primary' : 'btn-secondary'}"
          >
            Pesan Sekarang
          </a>
        </div>
      {/each}
    </div>

    <p class="mt-8 text-center text-secondary-600">{pricing.note}</p>
  </div>
</section>
