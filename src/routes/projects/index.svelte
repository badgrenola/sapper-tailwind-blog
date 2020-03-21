<script>
	import PageLayout from '../../components/pageLayout.svelte'
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
				<div class="my-2 mb-4 px-2 w-full overflow-hidden sm:my-4 sm:px-4 sm:w-full md:w-1/2 xl:w-1/3">
					<div class="group flex flex-col relative h-full cursor-pointer">
						<a rel="prefetch" href="projects/{project.slug}" class="absolute w-full h-full z-10"> </a>
						<div class="relative pb-2/3 rounded-md overflow-hidden opacity-75 group-hover:opacity-100 transition-opacity duration-100 ease-in-out">
							<img class="absolute h-full w-full object-cover" src={project.smallImage} alt={project.name} />
						</div>
						<div class="font-semibold mt-1 text-gray-900 group-hover:text-pink-500">{project.name}</div>
						<span class="text-sm text-gray-800">{project.shortDesc}</span>
					</div>
				</div>
			{/each}

		</div>
	</div>
</PageLayout>