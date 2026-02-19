<script lang="ts">
  import { services } from '../../content/site';
  import { getServiceWaLink } from '../../content/wa';
</script>

<section class="section-padding bg-cream">
  <div class="container-custom">
    <h2 class="section-title">{services.title}</h2>
    <p class="section-subtitle">{services.subtitle}</p>

    <div class="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {#each services.categories as service}
        <div class="card group cursor-pointer hover:border-emerald-200 text-center">
          <!-- Emoji Icon -->
          <div class="text-5xl mb-4">{service.emoji}</div>

          <h3 class="text-xl font-bold text-ink">{service.title}</h3>
          <p class="mt-2 text-ink-mid text-sm">{service.description}</p>

          <div class="mt-6 pt-4 border-t border-secondary-100">
            <span class="text-2xl font-bold text-emerald-500">{service.price}</span>
          </div>

          <a
            href={getServiceWaLink(service.id)}
            target="_blank"
            rel="noopener noreferrer"
            class="mt-4 btn-primary w-full"
          >
            Pesan Sekarang
          </a>
        </div>
      {/each}
    </div>
  </div>
</section>
