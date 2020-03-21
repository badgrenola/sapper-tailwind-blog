<script>
  import { projects } from '../stores/projectStore.js'

  //Get the 5 latest projects
  let maxProjects = 5
  let latestProjects = $projects.sort((a, b) => {
    if (a.id > b.id) return 1
    return -1
  }).slice(Math.max($projects.length - maxProjects, 0))

</script>

<sidebar class="w-1/5 mr-6 text-sm hidden sm:block">
  <div class="flex flex-col">
    <h2 class="text-pink-600 font-semibold leading-none">Latest Projects</h2>
    <ul class="mt-2">
      {#each latestProjects as project}
        <li>
          <a href="./projects/{project.slug}" class="">{project.title}</a>
        </li>
      {/each}
    </ul>
  </div>
  <div class="flex flex-col mt-8">
    <h2 class="text-pink-600 font-semibold leading-none">Latest Articles</h2>
    <a href="#" class="mt-2">Hello Motivation</a>
  </div>
</sidebar>