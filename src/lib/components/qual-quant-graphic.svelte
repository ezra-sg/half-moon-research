<script lang="ts">
    import moonGraphic from '$lib/assets/graphic__qual-quant-moon.svg';
    import starsGraphic from '$lib/assets/graphic__qual-quant-stars.svg';
    import qualText from '$lib/assets/graphic__qual-quant-text--qual.svg?raw';
    import quantText from '$lib/assets/graphic__qual-quant-text--quant.svg?raw';
</script>

<div class="relative h-48 w-48 md:h-64 md:w-64">
    <div class="absolute h-48 w-48 md:h-64 md:w-64 top-0 right-0 bottom-0 left-0 m-auto">
        {@html quantText}
    </div>
    <div class="absolute h-48 w-48 md:h-64 md:w-64 top-0 right-0 bottom-0 left-0 m-auto">
        {@html qualText}
    </div>
    <div class="absolute h-28 w-28 md:h-36 md:w-36 top-0 right-0 bottom-0 left-0 m-auto">
        <img src={moonGraphic} alt="moon" class="absolute m-auto top-0 left-0 h-28 w-28 md:h-36 md:w-36" />
        <img src={starsGraphic} alt="moon" class="absolute bottom-0 right-1.5 h-20 w-20 md:h-24 md:w-24" />
    </div>
</div>
