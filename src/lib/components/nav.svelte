<script lang="ts">
    import logo from '$lib/assets/logo--horizontal-color.svg';
	import { onDestroy, onMount } from 'svelte';

    let logoClass = 'c-nav__logo c-nav__logo--invisible';

    function scrollHandler() {
        const scrollAmount = window?.scrollY ?? 0;

        if (scrollAmount > 200) {
            logoClass = 'c-nav__logo';
        } else {
            logoClass = 'c-nav__logo c-nav__logo--invisible';
        }
    }

    onMount(() => {
        if (typeof window === 'undefined') return;
        window?.addEventListener('scroll', scrollHandler);
    });

    onDestroy(() => {
        if (typeof window === 'undefined') return;
        window?.removeEventListener('scroll', scrollHandler);
    });
</script>

<div class="c-nav">
    <img
        src="{logo}"
        alt="Half-Moon Research Logo - Horizontal"
        class="{logoClass}"
        aria-hidden="{logoClass === 'c-nav__logo'}"
    />
    <div class="c-nav__hamburger-container">
        <div class="c-nav__hamburger-line"></div>
        <div class="c-nav__hamburger-line"></div>
        <div class="c-nav__hamburger-line"></div>
    </div>
</div>

<style lang="scss">
.c-nav {
    position: fixed;
    display: flex;
    justify-content: space-between;
    width: 100%;
    top: 0;
    padding: 12px;
    z-index: 999;
    background-color: var(--color-midnight-moon);

    &__logo {
        height: 36px;
        opacity: 1;
        transition: opacity 0.3s ease;

        &--invisible {
            opacity: 0;
        }
    }

    &__hamburger-container {
        padding: 8px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 36px;
        width: 36px;
        cursor: pointer;
        border: 1px solid var(--color-dragonfly-sun);
        border-radius: 8px;
    }

    &__hamburger-line {
        height: 2px;
        width: 100%;
        background-color: var(--color-dragonfly-sun);
    }
}
</style>
