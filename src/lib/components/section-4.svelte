<script lang="ts">
    import SectionHeader from '$lib/components/section-header.svelte';

    import puzzleGraphic from '$lib/assets/graphic__puzzle-4.svg?raw';
</script>

<div id="section-4" class="p-4 mb-20 md:flex md:flex-col">
    <SectionHeader text="Working Together" />

    <p class="mb-8 max-w-xl mx-auto">
        We support both targeted approaches and the full research process:
    </p>

    <div class="w-full max-w-md max-h-[28rem] mx-auto">
        {@html puzzleGraphic}
    </div>
</div>
