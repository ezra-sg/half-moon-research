<script lang="ts">
    import SectionHeader from '$lib/components/section-header.svelte';
</script>

<div id="section-6" class="p-4">
    <SectionHeader text="Get in touch" />

    <label for="contact-form-name">
        Name
    </label>
    <input id="contact-form-name" type="text" class="mb-4 border-black border-[1px] w-full" />


    <label for="contact-form-email">
        Email
    </label>
    <input id="contact-form-email" type="text" class="mb-4 border-black border-[1px] w-full" />

    <label for="contact-form-message">
        Message
    </label>
    <input id="contact-form-message" type="textarea" class="border-black border-[1px] w-full h-64 mb-4" />
    <div class="flex justify-end">
        <button class="border-black border-[1px] p-2">Submit</button>
    </div>
</div>
