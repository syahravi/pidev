<script lang="ts">
  import { faq } from '../../content/site';

  let openIndex = $state<number | null>(null);

  const toggle = (index: number) => {
    openIndex = openIndex === index ? null : index;
  };
</script>

<section class="section-padding bg-white">
  <div class="container-custom max-w-3xl">
    <h2 class="section-title">{faq.title}</h2>
    <p class="section-subtitle">{faq.subtitle}</p>

    <div class="mt-12 space-y-4">
      {#each faq.items as item, index}
        <div class="border border-secondary-200 rounded-2xl overflow-hidden">
          <button
            class="w-full flex items-center justify-between p-5 text-left bg-white hover:bg-cream transition-colors"
            onclick={() => toggle(index)}
          >
            <span class="font-bold text-ink pr-4">{item.question}</span>
            <svg
              class="h-5 w-5 text-ink-soft transition-transform flex-shrink-0 {openIndex === index ? 'rotate-180' : ''}"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </button>
          {#if openIndex === index}
            <div class="p-5 bg-cream border-t border-secondary-200">
              <p class="text-ink-mid">{item.answer}</p>
            </div>
          {/if}
        </div>
      {/each}
    </div>
  </div>
</section>
