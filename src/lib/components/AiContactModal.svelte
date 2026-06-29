<script lang="ts">
  import { createEventDispatcher } from 'svelte'
  import { fade, scale } from 'svelte/transition'

  /** Controls visibility. Bind from the parent: bind:open */
  export let open = false
  /** Pre-filled subject, set by whichever button opened the modal. */
  export let subject = ''

  const dispatch = createEventDispatcher<{ close: void }>()

  let firstName = '',
    lastName = '',
    phone = '',
    email = '',
    message = '',
    // Editable copy of the incoming subject so the user can still adjust it.
    subjectValue = ''
  let sent = false
  let sending = false

  // Sync the editable subject with the prop on the rising edge of `open`, so each
  // time the modal is opened it shows the subject of the button that triggered it.
  let wasOpen = false
  $: if (open && !wasOpen) {
    subjectValue = subject
    wasOpen = true
  } else if (!open && wasOpen) {
    wasOpen = false
  }

  // Lock body scroll while the modal is open.
  $: if (typeof document !== 'undefined') {
    document.body.classList.toggle('overflow-hidden', open)
  }

  function close() {
    dispatch('close')
  }

  function resetAndClose() {
    // Reset the form so a re-open with a different subject starts clean.
    firstName = ''
    lastName = ''
    phone = ''
    email = ''
    message = ''
    subjectValue = ''
    sent = false
    sending = false
    close()
  }

  function onKeydown(event: KeyboardEvent) {
    if (event.key === 'Escape' && open) {
      resetAndClose()
    }
  }

  async function send() {
    const baseUrl = 'https://chatbot.triarc-labs.com'
    const chatMessage = `Person: ${firstName} ${lastName}\nBetreff: ${subjectValue}\nNachricht: ${message}\nEmail: ${email}\nTelefon: ${
      phone ?? '-'
    }`
    sending = true
    await fetch(`${baseUrl}/chat/send`, {
      body: JSON.stringify({ message: chatMessage }),
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(() => {
      sending = false
      sent = true
    })
  }
</script>

<svelte:window on:keydown={onKeydown} />

{#if open}
  <!-- Full-screen on mobile, centred rounded dialog on desktop -->
  <div class="fixed inset-0 z-[100] flex md:items-center md:justify-center md:p-4" role="presentation">
    <!-- Backdrop -->
    <div
      class="absolute inset-0 bg-black/60"
      transition:fade={{ duration: 200 }}
      on:click={resetAndClose}
      aria-hidden="true"
    />

    <!-- Dialog -->
    <div
      class="relative flex w-full flex-col bg-white shadow-2xl md:max-h-[90vh] md:max-w-2xl md:rounded-2xl"
      role="dialog"
      aria-modal="true"
      aria-labelledby="ai-contact-title"
      transition:scale={{ duration: 200, start: 0.97 }}
    >
      <!-- Header -->
      <div class="flex items-start justify-between gap-4 border-b border-gray-200 px-6 py-5 md:px-8">
        <div>
          <h2 id="ai-contact-title" class="text-xl font-bold text-gray-900 sm:text-2xl">Kontaktformular</h2>
          <p class="mt-1 text-sm text-black">Interessiert? Lassen Sie uns ins Gespräch kommen.</p>
        </div>
        <button
          type="button"
          class="-mr-2 -mt-1 rounded-full p-2 text-gray-500 transition hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-triarc"
          on:click={resetAndClose}
          aria-label="Schliessen"
        >
          <svg
            viewBox="0 0 24 24"
            class="h-6 w-6"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
          >
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>
      </div>

      <!-- Body (scrolls if needed) -->
      <div class="flex-grow overflow-y-auto px-6 py-6 md:px-8">
        <form action="#" method="POST" class="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
          <div class="sm:col-span-2">
            <label for="ai-subject" class="block text-sm font-medium text-gray-900">Betreff</label>
            <div class="mt-1">
              <input
                type="text"
                name="subject"
                id="ai-subject"
                bind:value={subjectValue}
                class="block w-full rounded-md border-gray-300 py-3 px-4 text-gray-900 shadow-sm focus:border-blue-triarc focus:ring-blue-triarc"
              />
            </div>
          </div>
          <div>
            <label for="ai-first-name" class="block text-sm font-medium text-gray-900">Vorname</label>
            <div class="mt-1">
              <input
                type="text"
                name="first-name"
                id="ai-first-name"
                autocomplete="given-name"
                bind:value={firstName}
                class="block w-full rounded-md border-gray-300 py-3 px-4 text-gray-900 shadow-sm focus:border-blue-triarc focus:ring-blue-triarc"
              />
            </div>
          </div>
          <div>
            <label for="ai-last-name" class="block text-sm font-medium text-gray-900">Nachname</label>
            <div class="mt-1">
              <input
                type="text"
                name="last-name"
                id="ai-last-name"
                autocomplete="family-name"
                bind:value={lastName}
                class="block w-full rounded-md border-gray-300 py-3 px-4 text-gray-900 shadow-sm focus:border-blue-triarc focus:ring-blue-triarc"
              />
            </div>
          </div>
          <div>
            <label for="ai-email" class="block text-sm font-medium text-gray-900">Email</label>
            <div class="mt-1">
              <input
                id="ai-email"
                name="email"
                type="email"
                autocomplete="email"
                bind:value={email}
                class="block w-full rounded-md border-gray-300 py-3 px-4 text-gray-900 shadow-sm focus:border-blue-triarc focus:ring-blue-triarc"
              />
            </div>
          </div>
          <div>
            <div class="flex justify-between">
              <label for="ai-phone" class="block text-sm font-medium text-gray-900">Telefon</label>
              <span id="ai-phone-optional" class="text-sm text-gray-500">Optional</span>
            </div>
            <div class="mt-1">
              <input
                type="text"
                name="phone"
                id="ai-phone"
                autocomplete="tel"
                bind:value={phone}
                class="block w-full rounded-md border-gray-300 py-3 px-4 text-gray-900 shadow-sm focus:border-blue-triarc focus:ring-blue-triarc"
                aria-describedby="ai-phone-optional"
              />
            </div>
          </div>
          <div class="sm:col-span-2">
            <label for="ai-message" class="block text-sm font-medium text-gray-900">Nachricht</label>
            <div class="mt-1">
              <textarea
                id="ai-message"
                name="message"
                rows="4"
                bind:value={message}
                class="block w-full rounded-md border-gray-300 py-3 px-4 text-gray-900 shadow-sm focus:border-blue-triarc focus:ring-blue-triarc"
              />
            </div>
          </div>
        </form>
      </div>

      <!-- Footer / actions -->
      <div
        class="flex flex-col gap-3 border-t border-gray-200 px-6 py-5 sm:flex-row sm:items-center sm:justify-end md:px-8"
      >
        {#if sent}
          <div class="rounded-md bg-green-triarc bg-opacity-10 p-3 sm:mr-auto">
            <p class="text-sm font-medium text-green-800">
              Deine Nachricht wurde übermittelt, wir melden uns so rasch wie möglich.
            </p>
          </div>
        {/if}

        <button
          type="button"
          on:click={resetAndClose}
          class="inline-flex items-center justify-center rounded-full border border-gray-300 bg-white px-5 py-2.5 text-base font-medium text-gray-900 shadow-sm transition duration-300 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-triarc focus:ring-offset-2"
        >
          {sent ? 'Schliessen' : 'Abbrechen'}
        </button>

        {#if !sent}
          <button
            on:click={send}
            disabled={sending || !firstName || !lastName || !subjectValue || !message}
            type="button"
            class="inline-flex items-center justify-center gap-x-1 rounded-full bg-black px-5 py-2.5 text-base font-medium text-white shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-lg disabled:cursor-not-allowed disabled:bg-gray-400 disabled:hover:translate-y-0 disabled:hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-triarc focus:ring-offset-2"
          >
            {#if sending}
              <svg
                class="animate-spin -ml-1 mr-2 h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
                <path
                  class="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
            {/if}
            Absenden
            <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path
                fill-rule="evenodd"
                d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        {/if}
      </div>
    </div>
  </div>
{/if}
