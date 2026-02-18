<script lang="ts">
  import { services } from '../../content/site';
  import { getServiceWaLink } from '../../content/wa';
</script>

<section class="section-padding bg-secondary-50">
  <div class="container-custom">
    <h2 class="section-title">{services.title}</h2>
    <p class="section-subtitle">{services.subtitle}</p>

    <div class="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {#each services.categories as service}
        <div class="card group cursor-pointer hover:border-primary-200">
          <div class="aspect-video rounded-lg overflow-hidden mb-4">
            <img
              src={service.image}
              alt={service.title}
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              width="400"
              height="300"
              loading="lazy"
            />
          </div>
          <h3 class="text-xl font-bold text-secondary-900">{service.title}</h3>
          <p class="mt-2 text-secondary-600">{service.description}</p>
          <div class="mt-4 flex items-center justify-between">
            <span class="text-2xl font-bold text-primary-600">{service.price}</span>
            <a
              href={getServiceWaLink(service.id)}
              target="_blank"
              rel="noopener noreferrer"
              class="text-primary-600 font-semibold hover:text-primary-700 inline-flex items-center"
            >
              Pesan
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>
