<script context="module">

	export async function preload({ params, query }) {
			// the `slug` parameter is available because
			// this file is called [slug].html
			const res = await this.fetch(`./articles/${params.slug}.json`);
			const data = await res.json();

			if (res.status === 200) {
				return { article: data };
			} else {
				this.error(res.status, data.message);
			}
		};

</script>

<script>
    import PageLayout from '../../components/pageLayout.svelte'
	export let article;
</script>

<svelte:head>
	<title>{article.metadata.title} // Matt Brealey</title>
</svelte:head>

<PageLayout>
	<span slot="title">{article.metadata.title}</span>
	
    <section slot="content">

		<span class="markdown">
			{@html article.html}
		</span>
		
		{#if (article.prev || article.next)}
			<hr class="mt-12 w-full"/>
			<div class="flex justify-between pt-2">
				<div class="flex-1 pr-6">
					{#if article.prev}
						<h3 class="text-sm text-gray-600">Previous Article</h3>
						<a href="./articles/{article.prev.slug}" class="colorLink">{article.prev.title}</a>
					{/if}
				</div>
				<div class="flex-1 text-right pl-6">
					{#if article.next}
						<h3 class="text-sm text-gray-600">Next Article</h3>
						<a href="./articles/{article.next.slug}" class="colorLink">{article.next.title}</a>
					{/if}
				</div>
			</div>
		{/if}

	</section>
</PageLayout>    
