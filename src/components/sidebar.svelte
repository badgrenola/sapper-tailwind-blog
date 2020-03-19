<script>
  import { projects } from '../stores/projectStore.js'

  //Set the maximum number of projects to display
  let maxProjects = 5
</script>

<sidebar class="w-1/5 mr-6 text-sm hidden sm:block">
  <div class="flex flex-col">
    <h2 class="text-pink-600 font-semibold leading-none">Latest Projects</h2>
    <ul class="mt-2">
      {#each $projects as project, i}
        {#if i < maxProjects}
          <li>
            <a href="{project.path}" class="">{project.title}</a>
          </li>
        {/if}
      {/each}
    </ul>
  </div>
  <div class="flex flex-col mt-8">
    <h2 class="text-pink-600 font-semibold leading-none">Latest Articles</h2>
    <a href="#" class="mt-2">Hello Motivation</a>
  </div>
</sidebar>