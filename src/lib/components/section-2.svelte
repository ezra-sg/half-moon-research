<script lang="ts">
    import treeGraphic from '$lib/assets/graphic__tree.svg';
    import leafIcon from '$lib/assets/icons__leaves.svg';
    import branchIcon from '$lib/assets/icons__branch.svg';
    import trunkIcon from '$lib/assets/icons__trunk.svg';
    import rootsIcon from '$lib/assets/icons__roots.svg';

    import SectionHeader from '$lib/components/section-header.svelte';
    import InfoCard from '$lib/components/info-card.svelte';

    const items = [{
        text: 'Broad experience in qualitative market research & interview moderation, focused on healthcare professionals',
        icon: leafIcon,
        imgAlt: 'leaf icon'
    }, {
        text: 'Branching excellence in communication, molecular biology, social psychology',
        icon: branchIcon,
        imgAlt: 'branch icon'
    }, {
        text: 'Supported by blending the unique benefits of qualitative and quantitative approaches',
        icon: trunkIcon,
        imgAlt: 'tree trunk icon'
    }, {
        text: 'Grounded in social science expertise, for \'rooting\' into the rationales of human behavior',
        icon: rootsIcon,
        imgAlt: 'tree roots icon'
    }];
</script>

<div id="section-2" class="p-4 mb-12 md:min-h-[80vh] md:flex md:flex-col">
    <SectionHeader text="What We Bring" />

    <div class="md:flex md:flex-row-reverse md:w-max md:mx-auto md:gap-12">
        <img
            src={treeGraphic}
            alt="tree graphic"
            class="w-[40%] m-auto mb-12 md:mb-0 origin-top transition-all duration-700 max-w-72"
        >

        <div class="max-w-96 md:my-auto mx-auto">
            {#each items as item, index}
                <InfoCard
                    text={item.text}
                    image={item.icon}
                    imageSize={48}
                    imageAlt={item.imgAlt}
                    noMarginBottom={index === items.length - 1}
                />
            {/each}
        </div>
    </div>
</div>

