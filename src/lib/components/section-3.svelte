<script lang="ts">
    import SectionHeader from '$lib/components/section-header.svelte';
    import QualQuantGraphic from '$lib/components/qual-quant-graphic.svelte';


    import bookIcon from '$lib/assets/icons__book.svg';
    import networkIcon from '$lib/assets/icons__network.svg';
    import keyIcon from '$lib/assets/icons__key.svg';

    const items = [{
        header: 'Strategic Learning',
        text: 'Tight, focused, efficient immersion to onboard & upskill quickly in key issues, treatment areas, stakeholders, and research goals',
        icon: bookIcon,
        imgAlt: 'Book icon'
    }, {
        header: 'Analytic Synergy',
        text: 'Qual: In-depth interviews driven by strategic probing, agile and adaptive follow-ups, and innovative projective techniques - delivered with a warm, inviting affect that builds trust<br><br>Quant: Data analytics, hypothesis testing, and visualization that tell the right story clearly & succinctly',
        icon: keyIcon,
        imgAlt: 'key icon'
    }, {
        header: 'Connected Individualism',
        text: 'Iterative understanding and integration of individual perspectives into the broader landscape—seeing the trees, the forest, and how they interrelate',
        icon: networkIcon,
        imgAlt: 'network icon'
    }];
</script>

<div id="section-3" class="p-4 mb-20 md:flex md:flex-col">
    <SectionHeader text="Why Us?" />

    <p class="mb-8 md:mb-12 max-w-xl mx-auto">
        Half-Moon Research excels at understanding outcomes&mdash;the 'what'&mdash;and the reasons behind them&mdash;the 'why'&mdash;by combining deep knowledge with carefully chosen methods.
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

                        <p class="text-pretty">
                            {@html item.text}
                        </p>
                    </div>

                </div>
            {/each}
        </div>
    </div>
</div>
