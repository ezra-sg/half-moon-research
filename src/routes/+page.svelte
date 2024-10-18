<script lang="ts">
    import { injectSpeedInsights } from "@vercel/speed-insights/sveltekit";
    import { inject } from '@vercel/analytics';
    import { dev } from '$app/environment';

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

    const year = new Date().getFullYear();
</script>

<Nav />

<div class="max-w-screen-xl m-auto md:p-6 ">
    <SectionOne />
    <SectionTwo />
    <SectionThree />
    <SectionFour />
    <SectionFive />
    <SectionSix />
</div>

<footer>
    <div class="p-4 text-center">
        <p>
            &copy; {year} Half-Moon Research
        </p>
    </div>
</footer>
