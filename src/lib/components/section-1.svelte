<script lang="ts">
    import logo from '$lib/assets/logo--horizontal-color.svg';

    import OutlineButton from '$lib/components/outline-button.svelte';

    function goToContact() {
        window.location.href = '#section-6';
    }
</script>

<div id="section-1" class="p-4 h-[80vh] pt-16 flex items-center flex-col justify-center">
    <img
        class="mb-10"
        src="{logo}"
        alt="Half-moon Research logo"
    />

    <p class="text-white mb-4">
        Half-Moon Research is a research consulting
        firm that specializes in understanding <span class="font-bold">why</span>,
        by <span class="font-bold">unifying qualitative and quantitative
        approaches</span> - especially in the biomedical and
        social sciences.
    </p>

    <hr class="w-[50%] text-glass border-glass bg-glass mb-4 self-start">

    <div class="self-end">
        <OutlineButton on:click={goToContact}>Get in Touch</OutlineButton>
    </div>
</div>

