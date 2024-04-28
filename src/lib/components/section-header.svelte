<script lang="ts">
    export let text: string;

    const dividerClasses = 'h-[1px] max-w-[200px] basis-40 shrink bg-glass';
</script>

<div class="w-full flex justify-center items-center mb-12 gap-2">
    <div class={dividerClasses}></div>
    <h2 class="flex-shrink-0 uppercase text-glass text-2xl">
        { text }
    </h2>
    <div class={dividerClasses}></div>
</div>
