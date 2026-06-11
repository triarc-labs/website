/// <reference types="@sveltejs/kit" />
/// <reference types="svelte" />
/// <reference types="vite/client" />

// Plausible analytics, loaded via script tag in app.html
declare function plausible(event: string, options?: { props?: Record<string, string | number> }): void
