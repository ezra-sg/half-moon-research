<script lang="ts">
    import SectionHeader from '$lib/components/section-header.svelte';

    import headshot from '$lib/assets/photo__jeff.png';
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
            <p class="mb-4 max-w-96 md:mx-auto text-pretty">
                Jeff advances research innovation with a focus on qualitative investigation in the evolving fields of immuno-oncology,
                targetable biomarkers, and novel mechanisms of action. He brings a multidisciplinary skillset that blends business consulting,
                molecular biology, behavioral psychology, and interpersonal communication—enabling him to uncover nuanced insights from healthcare
                professionals.
            </p>

            <p class="mb-4 max-w-96 md:mx-auto md:mb-0 text-pretty">
                His credibility, objectivity, and empathy as an interviewer make him a trusted partner to physicians and other key stakeholders,
                helping foster a deeper, shared understanding of treatment priorities, motivations, and trade-offs.
                Jeff holds a PhD in Political Science from Temple University (2019) and a Master of Bioethics from the University of Pennsylvania (2013).
            </p>
        </div>
    </div>
</div>
