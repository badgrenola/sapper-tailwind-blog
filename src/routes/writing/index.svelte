<!-- <script context="module">
	export function preload({ params, query }) {
		return this.fetch(`writing.json`).then(r => r.json()).then(posts => {
			return { posts };
		});
	}
</script> -->

<script>
	import PageLayout from '../../components/pageLayout.svelte'
	export let posts;
</script>

<style>
	ul {
		margin: 0 0 1em 0;
		line-height: 1.5;
	}
</style>

<svelte:head>
	<title>Writing // Matt Brealey</title>
</svelte:head>

<PageLayout>
	<h1 slot="title">Writing</h1>
	<!-- <ul slot="content"> -->
		<!-- {#each posts as post} -->
			<!-- we're using the non-standard `rel=prefetch` attribute to
					tell Sapper to load the data for the page as soon as
					the user hovers over the link or taps it, instead of
					waiting for the 'click' event -->
			<!-- <li><a rel='prefetch' href='writing/{post.slug}'>{post.title}</a></li> -->
		<!-- {/each} -->
	<!-- </ul> -->
</PageLayout>
