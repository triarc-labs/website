<script lang="ts">
  import Container from '$lib/components/Container.svelte'
  import Reveal from '$lib/components/Reveal.svelte'
  import { ourCollaboration } from '$lib/content/collaboration'

  export let content = ourCollaboration
</script>

<section class="relative overflow-hidden bg-white text-black">
  <Container>
    <div class="pb-20 md:pb-28">
      <!-- Dev-role spotlight -->
      <Reveal y={20}>
        <div class="max-w-3xl">
          <span class="text-sm font-bold uppercase tracking-widest text-gray-700">{content.kicker}</span>
          <h2 class="mt-3 text-2xl font-bold">
            {content.title}
          </h2>
          <div class="mt-6 space-y-4">
            {#each content.roleParagraphs as paragraph}
              <p class="text-base leading-6 text-black">{paragraph}</p>
            {/each}
          </div>
        </div>
      </Reveal>

      <!-- Phased workflow with the Tech Lead as the through-line -->
      <Reveal y={20} delay={120}>
        <div class="mt-12 md:mt-16">
          <h3 class="mb-8 text-sm font-bold uppercase tracking-widest text-gray-700">{content.flowTitle}</h3>

          <!-- Accessible, viewport-independent summary for screen readers -->
          <ol class="sr-only" aria-label="Dein Weg als Tech Lead durch das Projekt – Du bist in jeder Phase dabei">
            {#each content.phases as phase, i}
              <li>
                Phase {i + 1}, {phase.name}: {phase.description} Zusammenarbeit mit {phase.collaborators.join(' und ')}.
              </li>
            {/each}
          </ol>

          <!-- Desktop / tablet: horizontal phase stepper -->
          <div class="hidden md:grid md:grid-cols-4 md:gap-x-6" aria-hidden="true">
            <!-- Row 1: phase headers -->
            {#each content.phases as phase, i}
              <div class="text-center">
                <div
                  class="mx-auto flex h-11 w-11 items-center justify-center rounded-full border border-black bg-white text-lg font-bold text-black"
                >
                  {i + 1}
                </div>
                <div class="mt-3 text-base font-bold leading-snug text-black">{phase.name}</div>
                <div class="mx-auto mt-3 h-4 w-px bg-gray-300"></div>
              </div>
            {/each}

            <!-- Row 2: the Tech-Lead spine spanning every phase -->
            <div class="col-span-4">
              <div class="relative min-h-[2.5rem] overflow-hidden rounded-full border border-gray-300 bg-white shadow-sm">
                <!--
                  The pill track mirrors the header grid above (4 columns + gap-x-6) and fills the
                  full bar width, so its columns line up exactly with the phase headers. The pill
                  starts centered in column 1; the keyframes translate it by whole column widths
                  plus the column gaps so every stop is centered under its header.
                -->
                <div class="pointer-events-none absolute inset-0 grid grid-cols-4 gap-x-6">
                  <div class="tech-lead-pill flex items-center justify-center">
                    <span
                      class="inline-flex items-center rounded-full bg-blue-triarc px-3 py-1 text-xs font-bold uppercase tracking-wide text-white shadow-sm"
                    >
                      {content.leadLabel}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Row 3: collaborators + description per phase -->
            {#each content.phases as phase}
              <div class="text-center">
                <div class="mx-auto h-4 w-px bg-gray-300"></div>
                <div class="mt-3 flex flex-wrap justify-center gap-1.5">
                  {#each phase.collaborators as collaborator}
                    <span
                      class="rounded-full px-2.5 py-1 text-xs font-normal text-gray-600 ring-1 ring-gray-400"
                    >
                      {collaborator}
                    </span>
                  {/each}
                </div>
                <p class="mx-auto mt-3 max-w-[26ch] text-sm leading-relaxed text-gray-700">{phase.description}</p>
              </div>
            {/each}
          </div>

          <!-- Mobile: stacked vertical timeline, the spine threads through every phase -->
          <div class="md:hidden" aria-hidden="true">
            <p class="mb-5 flex items-center gap-2 text-sm font-semibold text-black">
              <span
                class="inline-flex items-center rounded-full bg-blue-triarc px-3 py-1 text-xs font-bold uppercase tracking-wide text-white"
              >
                {content.leadLabel}
              </span>
              durchgehend dabei
            </p>
            <ol class="relative">
              {#each content.phases as phase, i}
                <li class="relative flex gap-4 pb-8 last:pb-0">
                  {#if i < content.phases.length - 1}
                    <!-- Spans from below this number all the way down to the next number. -->
                    <div class="absolute left-5 top-10 bottom-0 -ml-px w-px bg-gray-300" aria-hidden="true"></div>
                  {/if}
                  <div class="flex flex-col items-center">
                    <div
                      class="z-10 flex h-10 w-10 items-center justify-center rounded-full border border-black bg-white text-base font-bold text-black"
                    >
                      {i + 1}
                    </div>
                  </div>
                  <div class="flex-1 pb-1">
                    <div class="text-lg font-bold text-black">{phase.name}</div>
                    <p class="mt-1 text-sm leading-relaxed text-gray-700">{phase.description}</p>
                    <div class="mt-2 flex flex-wrap gap-1.5">
                      {#each phase.collaborators as collaborator}
                        <span
                          class="rounded-full px-2.5 py-1 text-xs font-normal text-gray-600 ring-1 ring-gray-400"
                        >
                          {collaborator}
                        </span>
                      {/each}
                    </div>
                  </div>
                </li>
              {/each}
            </ol>
          </div>
        </div>
      </Reveal>
    </div>
  </Container>
</section>

<style lang="postcss">
  /*
   * The Tech-Lead pill walks through the four phase columns, pausing briefly under
   * each one, then glides smoothly back to the start to loop.
   *
   * The pill cell is one column of a grid identical to the header grid, so its width
   * equals a header column (colW). Stepping from column k to column k+1 means moving
   * colW + gap, i.e. 100% of the cell width plus one gap-x-6 (1.5rem). Adding the gap
   * keeps every stop centered under its header instead of drifting left.
   */
  .tech-lead-pill {
    animation: tech-lead-walk 15s cubic-bezier(0.65, 0, 0.35, 1) infinite;
    will-change: transform;
  }

  @keyframes tech-lead-walk {
    0%,
    7% {
      transform: translateX(0); /* Konzept & Planung */
    }
    16%,
    24% {
      transform: translateX(calc(100% + 1.5rem)); /* Development Sprint */
    }
    33%,
    41% {
      transform: translateX(calc(200% + 3rem)); /* Testing */
    }
    50%,
    67% {
      transform: translateX(calc(300% + 4.5rem)); /* Review-Meeting (held a touch longer) */
    }
    92%,
    100% {
      transform: translateX(0); /* smooth return sweep back to the start */
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .tech-lead-pill {
      animation: none;
      transform: translateX(0); /* rests centered under phase 1 */
    }
  }
</style>
