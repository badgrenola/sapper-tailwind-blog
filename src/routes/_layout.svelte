<!-- https://github.com/sveltejs/sapper-template/issues/188 -->
<!-- https://github.com/sveltejs/sapper/issues/703 -->

<script>
	import TailwindCSS from '../TailwindCSS.svelte';
	import Header from '../components/header.svelte';
	export var segment;
</script>

<TailwindCSS />
<Header />

<main class="container mx-auto">
	<slot></slot>
</main>