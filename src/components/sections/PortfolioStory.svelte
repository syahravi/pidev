<script lang="ts">
  import { portfolioStory } from '../../content/site';

  // Helper function to get initials
  function getInitials(name: string): string {
    return name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
  }
</script>

<section class="section-padding bg-cream">
  <div class="container-custom">
    <h2 class="section-title">{portfolioStory.title}</h2>
    <p class="section-subtitle">{portfolioStory.subtitle}</p>

    {#if portfolioStory.items.length > 0}
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {#each portfolioStory.items as story}
          <div class="card">
            <!-- Header -->
            <div class="flex items-center gap-3 mb-4">
              <span class="text-3xl">{story.emoji}</span>
              <div>
                <span class="inline-block px-2 py-1 bg-emerald-50 text-emerald-600 text-xs font-semibold rounded-full mb-1">
                  {story.niche}
                </span>
                <h3 class="font-bold text-ink">{story.businessName}</h3>
                <p class="text-sm text-ink-soft">{story.location}</p>
              </div>
            </div>

            <!-- Problem & Result -->
            <div class="space-y-3 mb-4">
              <div class="flex items-start gap-2">
                <span class="text-red-500 mt-1">😔</span>
                <p class="text-sm text-ink-mid">{story.problem}</p>
              </div>
              <div class="flex items-start gap-2">
                <span class="text-success mt-1">✨</span>
                <p class="text-sm text-ink font-medium">{story.result}</p>
              </div>
            </div>

            <!-- Quote -->
            <blockquote class="border-l-4 border-emerald-500 pl-4 py-2 bg-emerald-50 rounded-r-lg">
              <p class="text-sm text-ink-mid italic">"{story.quote}"</p>
            </blockquote>

            <!-- Rating -->
            <div class="flex items-center gap-1 mt-4">
              {#each Array(story.rating) as _, i}
                <svg class="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
              {/each}
            </div>
          </div>
        {/each}
      </div>
    {:else}
      <!-- Empty state - waiting for data -->
      <div class="text-center mt-12 py-12 bg-white rounded-2xl border-2 border-dashed border-secondary-200">
        <span class="text-4xl mb-4 block">📚</span>
        <h3 class="text-xl font-bold text-ink mb-2">Cerita Sukses Segera Hadir</h3>
        <p class="text-ink-mid">Kami sedang mengumpulkan cerita sukses dari klien-klien kami.</p>
      </div>
    {/if}

    {#if portfolioStory.items.length > 0}
      <p class="text-center text-ink-soft mt-8">{portfolioStory.closingText}</p>
    {/if}
  </div>
</section>
