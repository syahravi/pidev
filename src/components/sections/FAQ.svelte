<script lang="ts">
  import { faq } from '../../content/site';

  let openIndex = $state<number | null>(null);

  const toggle = (index: number) => {
    openIndex = openIndex === index ? null : index;
  };
</script>

<section class="section-padding">
  <div class="container-custom max-w-3xl">
    <h2 class="section-title">{faq.title}</h2>
    <p class="section-subtitle">{faq.subtitle}</p>

    <div class="mt-12 space-y-4">
      {#each faq.items as item, index}
        <div class="border border-secondary-200 rounded-lg overflow-hidden">
          <button
            class="w-full flex items-center justify-between p-4 text-left bg-white hover:bg-secondary-50 transition-colors"
            onclick={() => toggle(index)}
          >
            <span class="font-semibold text-secondary-900 pr-4">{item.question}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 text-secondary-500 transition-transform flex-shrink-0 {openIndex === index ? 'rotate-180' : ''}"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </button>
          {#if openIndex === index}
            <div class="p-4 bg-secondary-50 border-t border-secondary-200">
              <p class="text-secondary-600">{item.answer}</p>
            </div>
          {/if}
        </div>
      {/each}
    </div>
  </div>
</section>
