<!-- https://github.com/sveltejs/sapper-template/issues/188 -->
<!-- https://github.com/sveltejs/sapper/issues/703 -->

<script>
	import Nav from '../components/Nav.svelte';
	import TailwindCSS from '../TailwindCSS.svelte';

	export let segment;
</script>

<style>
	main {
		@apply bg-red-800;
	}
</style>

<TailwindCSS />
<Nav {segment}/>

<main>
	<slot></slot>
</main>