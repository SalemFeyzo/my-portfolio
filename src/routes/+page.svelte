<script lang="ts">
	import { theme } from '$lib/stores';

	import Button from '@smui/button';
	import ThemeSwitch from '$lib/components/ThemeSwitch.svelte';
</script>

<svelte:head>
	<meta name="color-scheme" content={$theme == 'light' ? 'light' : 'dark'} />
	<link rel="stylesheet" href={$theme == 'light' ? '/smui.css' : '/smui-dark.css'} />
</svelte:head>
<body>
	<h1>Welcome to SvelteKit</h1>
	<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
	<ThemeSwitch />
	<Button on:click={() => alert('Hello ...')} touch variant="outlined">Click me</Button>
</body>
