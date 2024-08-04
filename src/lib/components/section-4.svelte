<script lang="ts">
    import SectionHeader from '$lib/components/section-header.svelte';
    import ScrollIndicator from '$lib/components/scroll-indicator.svelte';

    import puzzleGraphic from '$lib/assets/graphic__puzzle.svg?raw';
</script>

<div id="section-4" class="p-4 mb-12 md:h-[80vh] md:flex md:flex-col md:snap-y md:snap-mandatory relative">
    <SectionHeader text="Working Together" />

    <p class="mb-8 max-w-xl mx-auto">
        Half-Moon Research supports both targeted approaches and the full research process:
    </p>

    <div class="w-full max-w-md max-h-[28rem] mx-auto">
        {@html puzzleGraphic}
    </div>

    <ScrollIndicator />
</div>
