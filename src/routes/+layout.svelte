<script>
	import favicon from '$lib/assets/favicon.svg';
	import '../app.css';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="bg-grid"></div>
<main>
	{@render children()}
</main>

<style>
	main {
		position: relative;
		z-index: 1;
	}
</style>
