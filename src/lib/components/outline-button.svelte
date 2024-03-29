<script lang="ts">
import { createEventDispatcher } from 'svelte';

const dispatch = createEventDispatcher();

function emitClick() {
    dispatch('click');
}
</script>

<button class="uppercase border-dragonfly border-[1px] border-solid text-dragonfly px-3 py-1 rounded-md" on:click={emitClick}>
    <slot />
</button>
