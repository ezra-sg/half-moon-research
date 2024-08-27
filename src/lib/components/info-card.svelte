<script lang="ts">
    export let text: string;
    export let image: string;
    export let imageSize: number;
    export let imageAlt: string;
    export let noMarginBottom: boolean = false;
</script>

<li class={`border-l-[1px] border-glass pl-4 flex gap-4 items-center ${noMarginBottom ? '' : 'mb-8'}`}>

    <div class="flex items-center justify-center" style="{`width: ${imageSize}px; height: ${imageSize}px;`}">
        <img
            src={image}
            alt={imageAlt}
            height={imageSize}
            width={imageSize}
            style="{`max-width: ${imageSize}px; max-height: ${imageSize}px;`}"
        >
    </div>

    { text }
</li>
