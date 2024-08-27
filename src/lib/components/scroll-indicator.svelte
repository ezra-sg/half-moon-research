<script lang="ts">
    import { onDestroy, onMount, tick } from 'svelte';

    import throttle from '$lib/utils/throttle';

    import chevron from '$lib/assets/icon__chevron.svg';

    let indicatorId: null | string = null;
    let scrollIndicator: null | HTMLElement = null;

    const throttledScrollHandler = throttle(() => {
        if (!scrollIndicator) {
            return;
        }
        const distanceToBottomOfScreen = window.innerHeight - (scrollIndicator?.getBoundingClientRect().bottom ?? 0);

        if (distanceToBottomOfScreen > 200) {
            scrollIndicator.style.opacity = '0';
        } else if (scrollIndicator) {
            scrollIndicator.style.opacity = '1';
        }
    }, 100)

    onMount(async () => {
        if (typeof document !== 'undefined') {
            indicatorId = `scroll-indicator-${self.crypto.randomUUID()}`;

            await tick();

            scrollIndicator = document.getElementById(indicatorId);
            document.addEventListener('scroll', throttledScrollHandler);
        }
    });

    onDestroy(() => {
        if (typeof document !== 'undefined') {
            document.removeEventListener('scroll', throttledScrollHandler);
        }
    });
</script>

<div id={indicatorId} class="rounded-full border-dragonfly border-[1px] border-solid h-[32px] w-[32px] absolute bottom-10 md:bottom-20 left-0 right-0 mx-auto motion-safe:animate-bounce transition-all duration-300 opacity-100">
    <img src={chevron} alt="chevron icon" height="24" width="24" aria-hidden="true" class="absolute top-0 right-0 bottom-0 left-0 m-auto -translate-y-0.5">
    <img src={chevron} alt="chevron icon" height="24" width="24" aria-hidden="true" class="absolute top-0 right-0 bottom-0 left-0 m-auto translate-y-0.5">
</div>
