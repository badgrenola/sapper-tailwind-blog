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
    <section slot="content" class="markdown">
        {@html article.html}
    </section>
</PageLayout>    
