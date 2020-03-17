<!-- https://github.com/sveltejs/sapper-template/issues/188 -->
<!-- https://github.com/sveltejs/sapper/issues/703 -->

<script>
	import Header from '../components/header.svelte';
	import Footer from '../components/footer.svelte';
	export var segment;
</script>

<div class="container mx-auto flex flex-col min-h-screen">
	<Header />

	<main class="flex-grow">
		<slot></slot>
	</main>

	<Footer />
</div>