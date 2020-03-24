<script>
    import PageLayout from '../../components/pageLayout.svelte'
    import { stores } from '@sapper/app'
    import { projects } from '../../stores/projectStore.js'

    // Get the project with the matching slug
    const { page } = stores()
    let slug = null
    let project = null
    let headerString = "Matt Brealey"
    $: slug = $page.params.slug
    $: project = slug && $projects.find(project => project.slug == slug)

    //Update the header string
    $: headerString = project ? `${project.name} // Matt Brealey` : "Matt Brealey"

    // Get the prev/next projects for display at the bottom of the page
    $: prevProject = project && $projects.find(otherProject => otherProject.id == project.id - 1)
    $: nextProject = project && $projects.find(otherProject => otherProject.id == project.id + 1)

    // TODO : Add related posts based upon article tags
    let relatedPosts = []
</script>

<svelte:head>
    <title>{headerString}</title>
</svelte:head>

{#if project}
    <PageLayout>
        <span slot="title">{project.name}</span>
        <div slot="content">

            <a href="{project.links[0]}" target="_blank" rel="noopener noreferrer">
                <img class="rounded-md object-cover" src={project.largeImage} alt={project.name} />
            </a>

            <h2 class="mt-6 text-xl text-pink-600 font-light">{project.links.length > 1 ? "Links" : "Link"}</h2>
            <ul>
            {#each project.links as link}
                <li>
                    {link.title} : <a class="pl-2 colorLink" href={link.url} target="_blank" rel="noopener noreferrer">{link.url.split("//")[1]}</a>
                </li>
            {/each}
            </ul>

            <h2 class="mt-6 text-xl text-pink-600 font-light">What is it?</h2>
            <p class="mt-2 markdown">{@html project.desc}</p>

            <h2 class="mt-6 text-xl text-pink-600 font-light">Features</h2>
            <!-- https://tailwindgrids.com/#/ -->
            <div class="flex flex-wrap -mx-2 overflow-hidden sm:-mx-4">
                {#each project.features as feature}
                    <div class="my-2 mb-4 px-2 w-full overflow-hidden sm:my-4 sm:px-4 sm:w-full md:w-1/2 xl:w-1/3">
                        <div class="flex flex-col relative h-full">
                            <div class="relative pb-2/3 rounded-md overflow-hidden">
                                {#if feature.image}
                                    <img class="absolute h-full w-full object-cover" src={feature.image} alt={feature.desc} />
                                {:else if feature.video}
                                    <video autoplay loop class="absolute h-full w-full">
                                        <source src={feature.video} type="video/mp4">
                                        Your browser does not support the video tag.
                                    </video>
                                {/if}
                            </div>
                            <div class="font-semibold mt-1 text-gray-900 group-hover:text-pink-500">{feature.title}</div>
                            <span class="text-sm text-gray-800">{@html feature.desc}</span>
                        </div>
                    </div>
                {/each}
            </div>

            {#if project.todos.length}
                <h2 class="mt-6 text-xl text-pink-600 font-light">Todo List</h2>
                <ul class="list-disc">
                    {#each project.todos as todo}
                        <li class="ml-6">{todo}</li>
                    {/each}
                </ul>
            {/if}
            
            {#if relatedPosts.length}
                <h2 class="mt-6 text-xl text-pink-600 font-light">Related Posts</h2>
            {/if}

            <hr class="mt-12 w-full"/>
		    <div class="flex justify-between pt-2">
                <div class="flex-1 pr-6">
                    {#if prevProject}
                        <h3 class="text-sm text-gray-600">Previous Project</h3>
                        <a href="./projects/{prevProject.slug}" class="colorLink">{prevProject.name}</a>
                    {/if}
                </div>
                <div class="flex-1 text-right pl-6">
                    {#if nextProject}
                        <h3 class="text-sm text-gray-600">Next Project</h3>
                        <a href="./projects/{nextProject.slug}" class="colorLink">{nextProject.name}</a>
                    {/if}
                </div>
            </div>
        </div>
    </PageLayout>
{/if}