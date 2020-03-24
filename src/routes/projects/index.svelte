<script>
	import PageLayout from '../../components/pageLayout.svelte'
	import Card from '../../components/card.svelte'
	import { projects } from '../../stores/projectStore.js'
</script>

<svelte:head>
	<title>Projects // Matt Brealey</title>
</svelte:head>

<PageLayout>
	<span slot="title">Projects</span>

	<div slot="content">
		<!-- https://tailwindgrids.com/#/ -->
		<div class="flex flex-wrap -mx-2 overflow-hidden sm:-mx-4">

			{#each $projects as project}
				<Card
					desc={project.shortDesc}
					link={`./projects/${project.slug}`}
					smallImage={project.smallImage}
					title={project.name}
				/>
			{/each}

		</div>
	</div>
</PageLayout>