<script lang="ts">
  import { navigation, siteConfig } from '../../content/site';
  import { waTemplates } from '../../content/wa';

  let isMenuOpen = $state(false);
  let isScrolled = $state(false);

  $effect(() => {
    if (typeof window !== 'undefined') {
      const handleScroll = () => {
        isScrolled = window.scrollY > 20;
      };
      window.addEventListener('scroll', handleScroll);
      handleScroll();
      return () => window.removeEventListener('scroll', handleScroll);
    }
  });

  const toggleMenu = () => {
    isMenuOpen = !isMenuOpen;
  };
</script>

<header
  class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 {isScrolled ? 'bg-white shadow-soft' : 'bg-transparent'}"
>
  <nav class="container-custom">
    <div class="flex items-center justify-between h-16 md:h-20">
      <!-- Logo -->
      <a href="/" class="flex items-center space-x-2">
        <span class="text-2xl font-display font-bold {isScrolled ? 'text-primary-600' : 'text-white'}">
          {siteConfig.name}
        </span>
      </a>

      <!-- Desktop Navigation -->
      <div class="hidden md:flex items-center space-x-8">
        {#each navigation as item}
          <a
            href={item.href}
            class="font-medium transition-colors {isScrolled ? 'text-secondary-600 hover:text-primary-600' : 'text-white/90 hover:text-white'}"
          >
            {item.label}
          </a>
        {/each}
        <a
          href={waTemplates.consultation}
          target="_blank"
          rel="noopener noreferrer"
          class="btn-primary text-sm"
        >
          Konsultasi Gratis
        </a>
      </div>

      <!-- Mobile Menu Button -->
      <button
        class="md:hidden p-2"
        onclick={toggleMenu}
        aria-label="Toggle menu"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 {isScrolled ? 'text-secondary-800' : 'text-white'}"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {#if isMenuOpen}
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          {:else}
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          {/if}
        </svg>
      </button>
    </div>

    <!-- Mobile Menu -->
    {#if isMenuOpen}
      <div class="md:hidden bg-white border-t border-secondary-100 py-4">
        {#each navigation as item}
          <a
            href={item.href}
            class="block px-4 py-3 text-secondary-600 hover:text-primary-600 hover:bg-primary-50"
            onclick={() => isMenuOpen = false}
          >
            {item.label}
          </a>
        {/each}
        <div class="px-4 pt-4">
          <a
            href={waTemplates.consultation}
            target="_blank"
            rel="noopener noreferrer"
            class="btn-primary w-full text-center"
          >
            Konsultasi Gratis
          </a>
        </div>
      </div>
    {/if}
  </nav>
</header>
