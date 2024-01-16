<script lang="ts">
    import logo from '$lib/assets/logo--horizontal.svg';
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
        width="240"
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
    position: sticky;
    display: flex;
    justify-content: space-between;
    width: 100%;
    top: 0;
    padding: 8px;
    background: white;
    z-index: 999;

    &__logo {
        opacity: 1;
        transition: opacity 0.3s ease;

        &--invisible {
            opacity: 0;
        }
    }

    &__hamburger-container {
        padding: 14px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 48px;
        width: 48px;
        cursor: pointer;
    }

    &__hamburger-line {
        height: 2px;
        width: 100%;
        background-color: #000;
    }
}
</style>
