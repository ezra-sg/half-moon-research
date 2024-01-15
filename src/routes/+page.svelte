<script lang="ts">
    import { injectSpeedInsights } from "@vercel/speed-insights/sveltekit";
    import { dev } from '$app/environment';
    import { inject } from '@vercel/analytics';


    import '../app.scss';
    import SectionOne from '$lib/components/section-1.svelte';

    // inject Vercel analytics
    inject({ mode: dev ? 'development' : 'production' });
    injectSpeedInsights();
</script>

<SectionOne />
