<script lang="ts">
import { createEventDispatcher } from 'svelte';

export let disabled = false;

const dispatch = createEventDispatcher();

function emitClick() {
    dispatch('click');
}
</script>

<button
    class="uppercase border-dragonfly border-[1px] border-solid text-dragonfly px-3 py-1 rounded-md disabled:opacity-50 focus:outline focus:outline-2 focus:outline-dragonfly"
    disabled={disabled}
    on:click={emitClick}
>
    <slot />
</button>
