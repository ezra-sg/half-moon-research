<script lang="ts">
    export let label: string;
    export let id: string;
    export let isTextarea: boolean = false;
    export let type: string = 'text';
    export let value: string | number = '';

    const inputClasses = 'border-[#BAE5FF44] border-[1px] w-full bg-[#BAE5FF22] rounded p-2 focus:outline focus:outline-2 focus:outline-dragonfly';

    const handleInput = (e: Event) => {
        const target = e.target as HTMLInputElement;
        value = type.match(/^(number|range)$/)
            ? +target.value
            : target.value;
    }
</script>

<div class="flex gap-1.5 flex-col">
    <label for={id} class="text-sm">
        {label}
    </label>
    {#if isTextarea}
        <textarea id={id} bind:value={value} class="{inputClasses} h-64"></textarea>
    {:else}
        <input id={id} type={type} class="{inputClasses}" on:input={handleInput} />
    {/if}
</div>
