<script context="module">
	export async function preload({ params, query }) {
		return this.fetch(`articles.json`).then(
			r => r.json()
		).then(articles => {
			return { articles };
		});
	}
</script>

<script>
	import PageLayout from '../../components/pageLayout.svelte'
	export let articles;
</script>

<svelte:head>
	<title>Articles // Matt Brealey</title>
</svelte:head>

<PageLayout>
	<h1 slot="title">Articles</h1>
	<ul slot="content">
		{#each articles as article}
			<!-- we're using the non-standard `rel=prefetch` attribute to
					tell Sapper to load the data for the page as soon as
					the user hovers over the link or taps it, instead of
					waiting for the 'click' event -->
			<li><a rel='prefetch' href='./articles/{article.slug}'>{article.title}</a></li>
		{/each}
	</ul>
</PageLayout>
