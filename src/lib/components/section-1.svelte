<script lang="ts">
    import logo from '$lib/assets/logo--horizontal-color.svg';

    import OutlineButton from '$lib/components/outline-button.svelte';
    import ScrollIndicator from '$lib/components/scroll-indicator.svelte';

    function goToContact() {
        window.location.href = '#section-6';
    }
</script>

<div id="section-1" class="p-4 mb-12 h-[100svh] max-w-[640px] mx-auto pt-16 flex items-center flex-col justify-center relative">
    <img
        class="mb-10 max-w-96 self-start md:max-w-[480px]"
        src="{logo}"
        alt="Half-moon Research logo"
    />

    <p class="text-white text-xl mb-8 md:text-2xl text-pretty">
        Half-Moon Research is a consulting firm that specializes in looking deeper to uncover the
        'why' - thoughtfully unifying qualitative and quantitative insights, with a focus in the biomedical and social sciences.
    </p>

    <hr class="w-[50%] text-glass border-glass bg-glass mb-4 self-start">

    <div class="self-end">
        <OutlineButton on:click={goToContact}>Get in Touch</OutlineButton>
    </div>

    <ScrollIndicator />
</div>

