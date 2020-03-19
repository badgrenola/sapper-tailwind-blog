<script>
	import PageLayout from '../../components/pageLayout.svelte'
	import { projects } from '../../stores/projectStore.js'
</script>

<svelte:head>
	<title>Projects // Matt Brealey</title>
</svelte:head>

<PageLayout>
	<h1 slot="title">Projects</h1>

	<div slot="content">
		<!-- https://tailwindgrids.com/#/ -->
		<div class="flex flex-wrap -mx-2 overflow-hidden sm:-mx-4">

			{#each $projects as project}
			<div class="my-2 px-2 w-full overflow-hidden sm:my-4 sm:px-4 sm:w-full md:w-1/2 lg:w-1/3">
			  {project.title}
			</div>
			{/each}

		</div>
	</div>
</PageLayout>