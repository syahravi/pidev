<script lang="ts">
  import { hero } from '../../content/site';
  import { waTemplates } from '../../content/wa';
</script>

<section class="gradient-hero min-h-screen flex items-center pt-20 relative overflow-hidden">
  <!-- Subtle animated dots background like MeowLabs -->
  <div class="absolute inset-0 opacity-30">
    <div class="stars"></div>
  </div>

  <div class="container-custom relative z-10">
    <div class="grid md:grid-cols-5 gap-8 md:gap-12 items-center">
      <!-- Content (60%) -->
      <div class="md:col-span-3 text-white">
        <!-- Badge -->
        <span class="inline-block px-4 py-2 bg-emerald-500/20 text-emerald-400 text-sm font-semibold rounded-full mb-6 border border-emerald-500/30">
          {hero.badge}
        </span>

        <!-- Headline with color contrast -->
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
          {#each hero.headlineParts as part, i}
            {#if part.highlight}
              <span class="text-emerald-400">{part.text}</span>
            {:else}
              <span class="text-white">{part.text}</span>
            {/if}
            {#if i < hero.headlineParts.length - 1}
              <br />
            {/if}
          {/each}
        </h1>

        <!-- Description with highlighted parts -->
        <p class="mt-6 text-lg md:text-xl text-white/70 leading-relaxed">
          {hero.description.text}
          {" "}
          {#each hero.description.highlights as highlight, i}
            {#if highlight.type === 'accent'}
              <span class="text-emerald-400 font-semibold">{highlight.text}</span>
            {:else if highlight.type === 'price'}
              <span class="text-emerald-400 font-bold">{highlight.text}</span>
            {:else}
              <span>{highlight.text}</span>
            {/if}
            {" "}
          {/each}
          {hero.description.suffix}
        </p>

        <!-- USP Bullet Points -->
        <ul class="mt-6 space-y-2">
          {#each hero.uspPoints as usp}
            <li class="text-white/90 text-lg">{usp}</li>
          {/each}
        </ul>

        <!-- CTAs -->
        <div class="mt-8 flex flex-wrap items-center gap-4">
          <a
            href={waTemplates.consultation}
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 px-6 py-3 bg-emerald-500 text-white font-bold rounded-xl hover:bg-emerald-600 transition-all duration-200 shadow-lg shadow-emerald-500/25"
          >
            {hero.ctaPrimary.label}
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
            </svg>
          </a>
          <a
            href={hero.ctaSecondary.href}
            class="inline-flex items-center gap-2 px-6 py-3 text-emerald-400 font-semibold hover:text-emerald-300 transition-colors"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
            {hero.ctaSecondary.label}
          </a>
        </div>

        <!-- Trust Micro -->
        <div class="mt-10 flex flex-wrap gap-6">
          {#each hero.trustMicro as badge}
            <div class="flex items-center text-white/60 text-sm">
              <svg class="h-4 w-4 mr-2 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
              </svg>
              {badge}
            </div>
          {/each}
        </div>
      </div>

      <!-- Founder Image (40%) -->
      <div class="md:col-span-2 hidden md:flex justify-center">
        <div class="relative">
          <!-- Glow effect behind image -->
          <div class="absolute inset-0 bg-emerald-500/20 rounded-2xl blur-3xl"></div>
          <img
            src={hero.founderImage}
            alt="Maulana Syahravi - Founder PI Dev"
            class="relative rounded-2xl shadow-2xl w-full max-w-sm"
            width="400"
            height="500"
            onerror={(e) => { e.currentTarget.src = 'https://placehold.co/400x500/1e293b/22c55e?text=Founder'; }}
          />
          <!-- Floating badge -->
          <div class="absolute -bottom-4 -right-4 bg-slate-800 border border-slate-700 px-4 py-2 rounded-xl shadow-lg">
            <span class="text-emerald-400 font-mono text-sm">&lt;PI Dev /&gt;</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  /* Stars/dots animation like MeowLabs */
  .stars {
    position: absolute;
    width: 100%;
    height: 100%;
    background-image:
      radial-gradient(2px 2px at 20px 30px, white, transparent),
      radial-gradient(2px 2px at 40px 70px, rgba(255,255,255,0.8), transparent),
      radial-gradient(1px 1px at 90px 40px, white, transparent),
      radial-gradient(2px 2px at 160px 120px, rgba(255,255,255,0.6), transparent),
      radial-gradient(1px 1px at 230px 80px, white, transparent),
      radial-gradient(2px 2px at 300px 150px, rgba(255,255,255,0.7), transparent),
      radial-gradient(1px 1px at 370px 50px, white, transparent),
      radial-gradient(2px 2px at 450px 180px, rgba(255,255,255,0.5), transparent),
      radial-gradient(1px 1px at 520px 90px, white, transparent),
      radial-gradient(2px 2px at 600px 200px, rgba(255,255,255,0.8), transparent),
      radial-gradient(1px 1px at 680px 60px, white, transparent),
      radial-gradient(2px 2px at 750px 140px, rgba(255,255,255,0.6), transparent),
      radial-gradient(1px 1px at 820px 100px, white, transparent),
      radial-gradient(2px 2px at 900px 220px, rgba(255,255,255,0.7), transparent),
      radial-gradient(2px 2px at 100px 250px, white, transparent),
      radial-gradient(1px 1px at 200px 300px, rgba(255,255,255,0.5), transparent),
      radial-gradient(2px 2px at 350px 280px, white, transparent),
      radial-gradient(1px 1px at 500px 350px, rgba(255,255,255,0.8), transparent),
      radial-gradient(2px 2px at 650px 320px, white, transparent),
      radial-gradient(1px 1px at 800px 380px, rgba(255,255,255,0.6), transparent);
    background-repeat: repeat;
    background-size: 1000px 500px;
    animation: twinkle 8s ease-in-out infinite;
  }

  @keyframes twinkle {
    0%, 100% { opacity: 0.3; }
    50% { opacity: 0.5; }
  }
</style>
