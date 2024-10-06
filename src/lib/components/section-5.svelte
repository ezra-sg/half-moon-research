<script lang="ts">
    import SectionHeader from '$lib/components/section-header.svelte';

    import headshot from '$lib/assets/photo__jeff.jpg';
</script>

<div id="section-5" class="p-4 mb-20 md:flex md:flex-col">
    <SectionHeader text="About" />

    <div class="flex items-center flex-col gap-10 md:flex-row md:justify-center">
        <img
            src={headshot}
            class="mb-10 max-w-[300px] rounded-md md:mb-0"
            alt="Headshot of Jeff Antsen"
        />

        <div>
            <p class="mb-4 max-w-96 md:mx-auto">
                I conduct qualitative market research, specializing in the growing landscape of immuno-oncology,
                targetable biomarkers, and novel mechanisms of action.  My skillset combines business consulting,
                molecular biology, behavioral psychology, and interpersonal communication to learn nuanced insights
                from healthcare professionals.
            </p>

            <p class="mb-4 max-w-96 md:mx-auto">
                This allows MDs and other stakeholders to see me as a credible, objective, and empathic interviewer,
                facilitating our joint ability to build a deeper shared understanding of treatment priorities,
                motivations, and trade-offs.
            </p>
        </div>
    </div>
</div>
