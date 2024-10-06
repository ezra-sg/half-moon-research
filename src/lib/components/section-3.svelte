<script lang="ts">
    import SectionHeader from '$lib/components/section-header.svelte';
    import QualQuantGraphic from '$lib/components/qual-quant-graphic.svelte';


    import bookIcon from '$lib/assets/icons__book.svg';
    import networkIcon from '$lib/assets/icons__network.svg';
    import keyIcon from '$lib/assets/icons__key.svg';

    const items = [{
        header: 'Strategic Learning',
        text: 'Tight, focused, efficient immersion to onboard & upskill quickly in key treatment areas and topics',
        icon: bookIcon,
        imgAlt: 'Book icon'
    }, {
        header: 'Connected Individualization',
        text: 'Iterative understanding and integration of individual perspectives into the broader landscape—seeing the trees, the forest, and how they interrelate',
        icon: networkIcon,
        imgAlt: 'network icon'
    }, {
        header: 'Key Approaches',
        text: 'Qual: Direct technical probing, agile adaptive follow-ups, innovative projective techniques, deployed with a warm, inviting affect that builds trust<br><br>Quant: Data analytics, hypothesis testing, and visualization that tell the right story clearly & succinctly',
        icon: keyIcon,
        imgAlt: 'key icon'
    }];
</script>

<div id="section-3" class="p-4 mb-12 md:min-h-[80vh] md:flex md:flex-col">
    <SectionHeader text="Why Us?" />

    <p class="mb-8 md:mb-12 max-w-xl mx-auto">
        Half-Moon Research excels at balancing understanding both <span class="font-bold">what</span> and <span class="font-bold">why</span> by unifying expertise over the entire landscape.
    </p>

    <div class="md:flex md:flex-row-reverse md:justify-center md:gap-12">
        <div class="flex justify-center mb-8 md:mb-0">
            <QualQuantGraphic />
        </div>

        <div class="max-w-96 flex gap-8 flex-col">
            {#each items as item}
                <div class="flex gap-6">
                    <img
                        src={item.icon}
                        alt={item.imgAlt}
                        class="self-start mt-1"
                    />

                    <div>
                        <h3 class="mb-3 font-bold text-lg">
                            { item.header }
                        </h3>

                        <p>
                            {@html item.text}
                        </p>
                    </div>

                </div>
            {/each}
        </div>
    </div>
</div>
