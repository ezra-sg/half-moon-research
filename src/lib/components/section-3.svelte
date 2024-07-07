<script lang="ts">
    import SectionHeader from '$lib/components/section-header.svelte';
    import QualQuantGraphic from '$lib/components/qual-quant-graphic.svelte';
    import InfoCard from '$lib/components/info-card.svelte';

    const items = [{
        text: 'Deep biochemical background',
        icon: 'https://placehold.co/64x64',
    }, {
        text: 'Understanding preferences, heuristics, and point of view of healthcare professionals',
        icon: 'https://placehold.co/64x64',
    }, {
        text: 'Comprehensive interviewing skills, including direct technical probing and indirect projective techniques',
        icon: 'https://placehold.co/64x64',
    }, {
        text: 'Background in pre-existing and emerging market dynamics',
        icon: 'https://placehold.co/64x64',
    }];
</script>

<div id="section-3" class="p-4 mb-12 md:h-[80vh] md:flex md:flex-col md:snap-y md:snap-mandatory">
    <SectionHeader text="Why Us?" />

    <p class="mb-8 max-w-xl mx-auto">
        Half-Moon Research excels at balancing understanding both <span class="font-bold">what</span> and <span class="font-bold">why</span> by unifying expertise over the entire landscape.
    </p>

    <div class="md:flex md:flex-row-reverse md:justify-center md:gap-12">
        <div class="flex justify-center mb-8">
            <QualQuantGraphic />
        </div>

        <div>
            <p class="mb-4">
                We bring together:
            </p>

            <div class="max-w-96">
                {#each items as item}
                    <InfoCard text={item.text} image={item.icon} imageSize={48} />
                {/each}
            </div>
        </div>
    </div>



</div>
