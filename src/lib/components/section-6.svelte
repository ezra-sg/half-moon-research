<script lang="ts">
    import SectionHeader from '$lib/components/section-header.svelte';
    import TextInput from '$lib/components/text-input.svelte';
	import OutlineButton from '$lib/components/outline-button.svelte';
</script>

<div id="section-6" class="p-4 mb-12">
    <SectionHeader text="Get in touch" />

    <div class="mb-4">
        <TextInput label="Name" id="contact-form-name" />
    </div>

    <div class="mb-4">
        <TextInput label="Email" id="contact-form-email" type="email" />
    </div>

    <div class="mb-4">
        <TextInput label="Message" id="contact-form-message" isTextarea={true} />
    </div>

    <div class="flex justify-end">
        <OutlineButton>
            Send
        </OutlineButton>
    </div>
</div>
