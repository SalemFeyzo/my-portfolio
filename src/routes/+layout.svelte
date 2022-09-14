<script lang="ts">
	import { onMount } from 'svelte';
	import TopAppBar, { Row, Section, Title } from '@smui/top-app-bar';
	import IconButton, { Icon } from '@smui/icon-button';
	import { Svg } from '@smui/common/elements';
	import { mdiMenu, mdiWeatherSunny, mdiWeatherNight } from '@mdi/js';

	let darkMode: boolean | undefined = undefined;

	onMount(() => {
		darkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
	});
</script>

<svelte:head>
	<!-- SMUI Styles -->
	{#if darkMode === undefined}
		<link rel="stylesheet" href="/smui.css" media="(prefers-color-scheme: light)" />
		<link rel="stylesheet" href="/smui-dark.css" media="screen and (prefers-color-scheme: dark)" />
	{:else if darkMode === true}
		<link rel="stylesheet" href="/smui.css" />
		<link rel="stylesheet" href="/smui-dark.css" media="screen" />
	{:else}
		<link rel="stylesheet" href="/smui.css" />
	{/if}
</svelte:head>
<div class="flexy">
	<div class="top-app-bar-container">
		<TopAppBar variant="static" color="primary">
			<Row>
				<Section>
					<IconButton touch>
						<Icon component={Svg} viewBox="0 0 24 24">
							<path fill="currentColor" d={mdiMenu} />
						</Icon>
					</IconButton>
					<Title>Home</Title>
				</Section>
				<Section align="end" toolbar>
					<IconButton touch on:click={() => (darkMode = !darkMode)}>
						<Icon component={Svg} viewBox="0 0 24 24">
							<path fill="currentColor" d={darkMode ? mdiWeatherSunny : mdiWeatherNight} />
						</Icon>
					</IconButton>
				</Section>
			</Row>
		</TopAppBar>
	</div>
</div>
<div>
	<slot />
</div>
