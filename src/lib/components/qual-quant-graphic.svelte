<script lang="ts">
    import moonGraphic from '$lib/assets/graphic__qual-quant-moon.svg';
    import starsGraphic from '$lib/assets/graphic__qual-quant-stars.svg';
    import qualText from '$lib/assets/graphic__qual-quant-text--qual.svg?raw';
    import quantText from '$lib/assets/graphic__qual-quant-text--quant.svg?raw';
</script>

<div class="relative h-48 w-48">
    <div class="absolute h-48 w-48 top-0 right-0 bottom-0 left-0 m-auto">
        {@html quantText}
    </div>
    <div class="absolute h-48 w-48 top-0 right-0 bottom-0 left-0 m-auto">
        {@html qualText}
    </div>
    <div class="absolute h-28 w-28 top-0 right-0 bottom-0 left-0 m-auto">
        <img src={moonGraphic} alt="moon" class="absolute m-auto top-0 left-0 h-28 w-28" />
        <img src={starsGraphic} alt="moon" class="absolute bottom-0 right-1.5 h-20 w-20" />
    </div>
</div>
