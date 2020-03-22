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
	$: console.log(articles)
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
				<div class="my-2 mb-4 px-2 w-full overflow-hidden sm:my-4 sm:px-4 sm:w-full md:w-1/2 xl:w-1/3">
					<div class="group flex flex-col relative h-full cursor-pointer">
						<a rel="prefetch" href="./articles/{article.slug}" class="absolute w-full h-full z-10"> </a>
						<div class="relative pb-2/3 rounded-md overflow-hidden group-hover:opacity-90 transition-opacity duration-100 ease-in-out">
							<img class="absolute h-full w-full object-cover bg-gray-300" src={article.smallImage} alt={article.title} />
						</div>
						<div class="font-semibold mt-1 text-gray-900 group-hover:text-pink-500">{article.title}</div>
						<span class="text-sm text-gray-800">{article.desc}</span>
					</div>
				</div>
			{/each}
		</div>
	</div>
</PageLayout>
