<script lang="ts">
    import { onDestroy, onMount } from 'svelte';

    import throttle from '$lib/utils/throttle';

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
        icon: 'https://placehold.co/64x64',
    }, {
        text: 'Branching research excellence with a biomedical expertise',
        icon: 'https://placehold.co/64x64',
    }, {
        text: 'Supported by blending and maximizing the unique benefits of qualitative and quantitative approaches',
        icon: 'https://placehold.co/64x64',
    }, {
        text: 'Grounded in social science expertise, for \'rooting\' into the rationales of human behavior',
        icon: 'https://placehold.co/64x64',
    }];

    function scrollHandler() {
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

<div id="section-2" class="p-4 mb-12">
    <div class="sticky top-6">
        <SectionHeader text="What We Bring" />

        <img
            id={graphicId}
            src="https://www.shutterstock.com/shutterstock/photos/87459215/display_1500/stock-vector-silhouettes-of-tree-with-its-roots-87459215.jpg"
            alt="placeholder"
            class="m-auto mb-12 origin-top invert transition-all duration-700"
            style="width: {graphicScale * 80}%;"
        >

        {#each items as item}
            <InfoCard text={item.text} image={item.icon} imageSize={48} />
        {/each}
    </div>
</div>

