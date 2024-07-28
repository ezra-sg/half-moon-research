<script lang="ts">
    import logo from '$lib/assets/logo--horizontal-color.svg';
	import { onDestroy, onMount } from 'svelte';

    const navClasses = 'fixed flex justify-between items-center w-full top-0 p-2 z-50 bg-midnight transition-transform duration-300 ease shadow-md lg:px-8';
    const hiddenNavClasses = `${navClasses} transform -translate-y-full shadow-none`;
    const logoClasses = 'h-10 opacity-1 transition-opacity duration-300 ease';
    const invisibleLogoClasses = `${logoClasses} opacity-0`;
    const liClasses = 'relative capitalize h-10 flex items-center flex-shrink-0 font-bold pl-4 transition-all duration-300 ease hover:text-dragonfly';
    const activeLiClasses = 'text-dragonfly';
    const liUnderlineClasses = 'absolute bottom-0 left-4 w-[50%] h-[1px] bg-none content-[\'\'] transition-transform duration-500 ease scale-x-0 origin-left';
    const activeLiUnderlineClasses = 'bg-dragonfly scale-x-100';

    let logoClass = invisibleLogoClasses;
    let navClass = navClasses;
    let ulClass = 'hidden md:flex';
    let activeLi = 0;

    let intersectionObserver: IntersectionObserver | null = null;

    let liElements: { text: string, link: string, active: boolean }[] = [];


    let ulHiddenMobile = true;
    let lastScrollTop = 0;

    $: ulClass = ulHiddenMobile ? 'hidden md:flex' : 'flex';

    $: {
        liElements = [{
            text: 'What we bring',
            link: '#section-2',
            active: activeLi === 2,
        },
        {
            text: 'Why Us',
            link: '#section-3',
            active: activeLi === 3,
        },
        {
            text: 'Working Together',
            link: '#section-4',
            active: activeLi === 4,
        },
        {
            text: 'About Us',
            link: '#section-5',
            active: activeLi === 5,
        },
        {
            text: 'Get in Touch',
            link: '#section-6',
            active: activeLi === 6,
        }];
    }

    $: {
        if (!ulHiddenMobile) {
            logoClass = logoClasses;
        }
    }


    // eztodo add throttle to scroll handler

    function scrollHandler() {
        const scrollAmount = window?.scrollY ?? 0;

        if (scrollAmount > 200 || !ulHiddenMobile) {
            logoClass = logoClasses;
        } else {
            logoClass = invisibleLogoClasses;
        }

        if (scrollAmount > lastScrollTop && ulHiddenMobile) {
            navClass = hiddenNavClasses;
        } else {
            navClass = navClasses;
        }

        lastScrollTop = scrollAmount;
    }

    function clickawayHandler(event: MouseEvent) {
        const navElement = document.querySelector('#nav');

        if (!navElement?.contains(event.target as HTMLElement)) {
            ulHiddenMobile = true;
        }
    }

    function toggleMobileMenu() {
        ulHiddenMobile = !ulHiddenMobile;
    }

    function handleLinkClick(link: string) {
        const section = document.querySelector(link);

        if (!section) {
            return;
        }

        window.requestAnimationFrame(() => {
            window.scrollTo({
                top: Math.round(section.getBoundingClientRect().top) - 64
            })

            ulHiddenMobile = true;
        })
    }

    onMount(() => {
        if (typeof window === 'undefined') {
            return;
        }

        window?.addEventListener('scroll', scrollHandler);

        window?.addEventListener('click', clickawayHandler);

        intersectionObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    activeLi = Number(entry.target.id.split('-')[1]);
                }
            });
        }, {
            threshold: 1,
        });

        [1, 2, 3, 4, 5, 6].forEach((num) => {
            const element = document.querySelector(`#section-${num}`);

            if (element) {
                intersectionObserver?.observe(element);
            }
        });

    });

    onDestroy(() => {
        if (typeof window === 'undefined') {
            return;
        }
        window?.removeEventListener('scroll', scrollHandler);
        window?.removeEventListener('click', clickawayHandler);
    });
</script>

<nav id="nav" class="{navClass}">
    <img
        src="{logo}"
        alt="Half-Moon Research Logo"
        class="{logoClass}"
    />
    <div
        class="p-2 flex flex-col justify-between h-9 w-9 cursor-pointer border-[1px] border-dragonfly rounded-md md:hidden"
        role="button"
        tabindex="0"
        aria-label="toggle menu"
        on:click={toggleMobileMenu}
        on:keydown={(event) => {
            if (event.key === 'Enter') {
                toggleMobileMenu();
            }
        }}
    >
        <div class="h-0.5 w-full bg-dragonfly"></div>
        <div class="h-0.5 w-full bg-dragonfly"></div>
        <div class="h-0.5 w-full bg-dragonfly"></div>
    </div>

    <ul class="{ulClass} list-none absolute top-full left-0 right-0 flex-col bg-midnight py-4 shadow-md border-t-[1px] border-slate-800 md:flex-row md:bg-none md:py-0 md:static md:border-none md:shadow-none">
        {#each liElements as { text, link, active }}
            <li class="{liClasses} {active ? activeLiClasses : 'text-white'}">
                <div aria-hidden="true" class="{liUnderlineClasses} {active ? activeLiUnderlineClasses : ''}"></div>
                <a
                    href="#"
                    class="w-full h-full flex items-center"
                    on:click={() => handleLinkClick(link)}
                >
                    {text}
                </a>
            </li>
        {/each}
    </ul>
</nav>
