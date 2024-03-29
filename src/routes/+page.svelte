<script lang="ts">
    import { injectSpeedInsights } from "@vercel/speed-insights/sveltekit";
    import { inject } from '@vercel/analytics';
    import { dev } from '$app/environment';

    import logo from '$lib/assets/logo--horizontal-color.svg';

    import '../app.scss';
    import Nav from '$lib/components/nav.svelte';
    import SectionOne from '$lib/components/section-1.svelte';
    import SectionTwo from '$lib/components/section-2.svelte';
    import SectionThree from '$lib/components/section-3.svelte';
    import SectionFour from '$lib/components/section-4.svelte';
    import SectionFive from '$lib/components/section-5.svelte';
    import SectionSix from '$lib/components/section-6.svelte';

    // inject Vercel analytics
    inject({ mode: dev ? 'development' : 'production' });
    injectSpeedInsights();

</script>

{#if !dev}
    <div class="h-[100svh] w-[100svw] flex items-center flex-col justify-center text-center">
        <img
            src="{logo}"
            alt="Half-Moon Research Logo"
            class="w-64 mb-6"
        />
        <h1>🛠️ Under Construction 🛠️</h1>
        <div>This page is under construction, come back soon!</div>
    </div>
{:else}
    <Nav />
    <SectionOne />
    <SectionTwo />
    <SectionThree />
    <SectionFour />
    <SectionFive />
    <SectionSix />
{/if}

<!-- eztodo add footer -->
