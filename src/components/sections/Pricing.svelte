<script lang="ts">
  import { pricing } from '../../content/site';
  import { getServiceWaLink } from '../../content/wa';
</script>

<section class="section-padding bg-cream">
  <div class="container-custom">
    <h2 class="section-title">{pricing.title}</h2>
    <p class="section-subtitle">{pricing.subtitle}</p>

    <!-- Price Anchor -->
    <div class="mt-8 text-center">
      <p class="text-ink-soft">{pricing.anchor.text}</p>
      <p class="text-xl font-bold text-emerald-500 mt-1">{pricing.anchor.highlight}</p>
    </div>

    <!-- 2 Package Cards -->
    <div class="mt-12 grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
      {#each pricing.categories as category}
        <div
          class="card relative {category.popular ? 'border-emerald-500 border-2 ring-4 ring-emerald-100' : ''}"
        >
          {#if category.popular}
            <div class="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span class="bg-emerald-500 text-white text-sm font-bold px-6 py-2 rounded-full shadow-lg">
                Paling Diminati
              </span>
            </div>
          {/if}

          <div class="text-center pt-4">
            <h3 class="text-2xl font-bold text-ink">{category.title}</h3>
            <p class="mt-2 text-ink-mid">{category.description}</p>

            <div class="mt-6">
              <span class="text-lg text-ink-soft">{category.pricePrefix}</span>
              <span class="text-5xl font-extrabold text-emerald-500">{category.price}</span>
              <span class="text-2xl text-emerald-500">{category.priceSuffix}</span>
            </div>
          </div>

          <!-- Features List -->
          <ul class="mt-8 space-y-3">
            {#each category.features as feature}
              <li class="flex items-center gap-3">
                <svg class="w-5 h-5 text-success flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
                <span class="text-ink-mid">{feature}</span>
              </li>
            {/each}
          </ul>

          <a
            href={getServiceWaLink(category.id)}
            target="_blank"
            rel="noopener noreferrer"
            class="mt-8 w-full text-center {category.popular ? 'btn-whatsapp' : 'btn-secondary'}"
          >
            {category.popular ? 'Pilih Paket Ini' : 'Pilih Paket'}
          </a>
        </div>
      {/each}
    </div>

    <!-- Guarantees -->
    <div class="mt-12 flex flex-wrap items-center justify-center gap-6">
      {#each pricing.guarantees as guarantee}
        <div class="flex items-center gap-2 text-ink-mid">
          <svg class="w-5 h-5 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
          </svg>
          <span class="text-sm font-medium">{guarantee}</span>
        </div>
      {/each}
    </div>

    <!-- Custom Note -->
    <p class="mt-8 text-center text-ink-soft">{pricing.customNote}</p>
  </div>
</section>
