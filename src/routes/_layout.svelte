<!-- https://github.com/sveltejs/sapper-template/issues/188 -->
<!-- https://github.com/sveltejs/sapper/issues/703 -->

<script>
	import TailwindCSS from '../TailwindCSS.svelte';
</script>

<TailwindCSS />

<main class="min-h-screen bg-red-900 font-sans">
	<slot></slot>
</main>