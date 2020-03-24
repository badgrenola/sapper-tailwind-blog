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
	import Card from '../../components/card.svelte'
	export let articles;
</script>

<svelte:head>
	<title>Articles // Matt Brealey</title>
</svelte:head>

<PageLayout>
	<h1 slot="title">Articles</h1>
	<div slot="content">
		<!-- https://tailwindgrids.com/#/ -->
		<div class="flex flex-wrap -mx-2 overflow-hidden sm:-mx-4">
			{#each articles as article}
				<Card
					date={article.date}
					desc={article.desc}
					link={`./articles/${article.slug}`}
					smallImage={article.smallImage}
					title={article.title}
				/>
			{/each}
		</div>
	</div>
</PageLayout>
