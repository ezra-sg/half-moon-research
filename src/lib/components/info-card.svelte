<script lang="ts">
    export let text: string;
    export let image: string;
    export let imageSize: number;
    export let noMarginBottom: boolean = false;
</script>

<li class={`border-l-[1px] border-glass pl-4 flex gap-4 items-center ${noMarginBottom ? '' : 'mb-8'}`}>
    <img src={image} alt="placeholder" height={imageSize} width={imageSize}>

    { text }
</li>
