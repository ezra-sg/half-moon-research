<script lang="ts">
    import { onDestroy, onMount } from 'svelte';

    import throttle from '$lib/utils/throttle';
    import treeGraphic from '$lib/assets/graphic__tree.svg';
    import leafIcon from '$lib/assets/icons__leaves.svg';
    import branchIcon from '$lib/assets/icons__branch.svg';
    import trunkIcon from '$lib/assets/icons__trunk.svg';
    import rootsIcon from '$lib/assets/icons__roots.svg';

    import SectionHeader from '$lib/components/section-header.svelte';
    import InfoCard from '$lib/components/info-card.svelte';

    const graphicId = 'section-2-graphic-lg';

    let observer: IntersectionObserver | null = null;
    let throttledScrollHandler = throttle(scrollHandler, 100);
    let scrollHandlerAttached = false;
    let graphicScale = 1;
    let lastScrollY = 0;
    let scrollDirection = 'down';

    const items = [{
        text: 'Broad experience in qualitative market research & moderation with healthcare professionals',
        icon: leafIcon,
        imgAlt: 'leaf icon'
    }, {
        text: 'Branching research excellence with a biomedical expertise',
        icon: branchIcon,
        imgAlt: 'branch icon'
    }, {
        text: 'Supported by blending and maximizing the unique benefits of qualitative and quantitative approaches',
        icon: trunkIcon,
        imgAlt: 'tree trunk icon'
    }, {
        text: 'Grounded in social science expertise, for \'rooting\' into the rationales of human behavior',
        icon: rootsIcon,
        imgAlt: 'tree roots icon'
    }];

    function scrollHandler() {
        if (window.innerWidth > 640) {
            graphicScale = 1;
            return;
        }

        if (lastScrollY > window.scrollY) {
            scrollDirection = 'up';
        } else {
            scrollDirection = 'down';
        }

        lastScrollY = window.scrollY;

        if (graphicScale > 0.5 && scrollDirection === 'down') {
            requestAnimationFrame(() => {
                graphicScale = 0.5;
            });
        } else if (graphicScale < 1 && scrollDirection === 'up') {
            requestAnimationFrame(() => {
                graphicScale = 1;
            });
        }
    }

    onMount(() => {
        let callback: IntersectionObserverCallback = (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting && scrollHandlerAttached === false) {
                    document.addEventListener('scroll', throttledScrollHandler);
                } else if (!entry.isIntersecting) {
                    document.removeEventListener('scroll', throttledScrollHandler);
                    scrollHandlerAttached = false;
                }
            });
        };
        observer = new IntersectionObserver(callback, {
            rootMargin: '0px',
            threshold: 1.0,
        });

        let target = document.querySelector(`#${graphicId}`);
        if (target) {
            observer.observe(target);
        }
    });

    onDestroy(() => {
        if (scrollHandlerAttached) {
            document.removeEventListener('scroll', throttledScrollHandler);
        }
    });

</script>

<div id="section-2" class="p-4 mb-12 md:h-[80vh] md:flex md:flex-col">
    <SectionHeader text="What We Bring" />

    <div class="md:flex md:flex-row-reverse md:w-max md:mx-auto md:gap-12">
        <img
            id={graphicId}
            src={treeGraphic}
            alt="tree graphic"
            class="m-auto mb-12 md:mb-0 origin-top transition-all duration-700 max-w-72"
            style="width: {graphicScale * 80}%;"
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

