<script lang="ts">
    import { writable } from 'svelte/store';
    import emailjs from '@emailjs/browser';

    import SectionHeader from '$lib/components/section-header.svelte';
    import TextInput from '$lib/components/text-input.svelte';
    import OutlineButton from '$lib/components/outline-button.svelte';

    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    let sendLoading = false;
    let sendStatusMessage = '';

    let name = writable('');
    let email = writable('');
    let message = writable('');

    async function sendEmail() {
        sendLoading = true;
        sendStatusMessage = 'Sending...';

        const templateParams = {
            name: $name,
            email: $email,
            message: $message
        };

        const response = await emailjs.send(serviceID, templateID, templateParams, publicKey);

        sendLoading = false;

        if (response.status === 200) {
            sendStatusMessage = 'Message successfully sent!';

            setTimeout(() => {
                sendStatusMessage = ''
            }, 5000);
        } else {
            sendStatusMessage = 'Error sending message, please try again';

            setTimeout(() => {
                sendStatusMessage = ''
            }, 5000);
        }
    }
</script>

<div id="section-6" class="p-4 mb-20 md:flex md:flex-col">
    <SectionHeader text="Get in touch" />

    <div class="w-full max-w-[600px] mx-auto">
        <div class="mb-4">
            <TextInput label="Name" id="contact-form-name" bind:value={$name} />
        </div>

        <div class="mb-4">
            <TextInput label="Email" id="contact-form-email" type="email" bind:value={$email} />
        </div>

        <div class="mb-4">
            <TextInput label="Message" id="contact-form-message" isTextarea={true} bind:value={$message} />
        </div>

        <div class="flex justify-end mb-4">
            <OutlineButton on:click={sendEmail} disabled={sendLoading}>
                Send
            </OutlineButton>
        </div>

        {#if sendStatusMessage}
            <p class="text-dragonfly">{sendStatusMessage}</p>
        {/if}
    </div>
</div>
