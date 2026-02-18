<script lang="ts">
  import { testimonials } from '../../content/site';
</script>

<section class="section-padding">
  <div class="container-custom">
    <h2 class="section-title">{testimonials.title}</h2>
    <p class="section-subtitle">{testimonials.subtitle}</p>

    <div class="mt-12 grid md:grid-cols-3 gap-6">
      {#each testimonials.items as item}
        <div class="card">
          <!-- Rating Stars -->
          <div class="flex space-x-1 mb-4">
            {#each Array(item.rating) as _}
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            {/each}
          </div>

          <!-- Content -->
          <p class="text-secondary-600 italic">"{item.content}"</p>

          <!-- Author -->
          <div class="mt-6 flex items-center">
            <img
              src={item.avatar}
              alt={item.name}
              class="w-12 h-12 rounded-full"
              width="48"
              height="48"
              loading="lazy"
            />
            <div class="ml-3">
              <p class="font-semibold text-secondary-900">{item.name}</p>
              <p class="text-sm text-secondary-500">{item.role}</p>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>
