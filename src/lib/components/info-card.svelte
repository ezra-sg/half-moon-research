<script lang="ts">
    export let text: string;
    export let image: string;
    export let imageSize: number;
</script>

<li class="border-l-[1px] border-glass mb-8 pl-4 flex gap-4 items-center">
    <img src={image} alt="placeholder" height={imageSize} width={imageSize}>

    { text }
</li>
