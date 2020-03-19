<script>
    //Grab the active route
    import { stores } from '@sapper/app'
    const { page } = stores()
    let isIndex; // TODO : svelte should declare these for us in the $: statement, but I'm getting undeclared errors 
    let isProjects;
    let isWriting;
    $: {
        isIndex = $page.path === "/"
        isProjects = $page.path === "/projects"
        isWriting = $page.path === "/writing"
    }

    //Store the mobile menu open state
    var isOpen = false;

</script>

<header class="sm:flex sm:justify-between sm:items-center sm:p-4 lg:p-8">
    <div class="flex items-center justify-between px-4 py-4 sm:p-0">
        <div class="">
            <img class="h-12 rounded-full" src="profile.jpg" alt="A picture of Matt Brealey's head" />
        </div>
        <div class="sm:hidden">
            <button type="button" id="menuButton" class="block text-black hover:text-gray-800 focus:text-gray-800 focus:outline-none pr-2" on:click={() => {isOpen = !isOpen}}>
                <svg class="h-8 w-8 fill-current {isOpen ? 'text-pink-600' : 'text-black'}" viewBox="0 0 100 70">
                    <rect width="100" height="10"></rect>
                    <rect y="30" width="100" height="10"></rect>
                    <rect y="60" width="100" height="10"></rect>
                </svg>
            </button>
        </div>
    </div>
    <div class="px-2 pt-2 pb-4 {isOpen ? 'block' : 'hidden'} sm:flex sm:p-0">
        <a href="/" class="block text-pink-500 opacity-75 font-semibold text-center hover:opacity-100 hover:underline sm:mt-0 sm:ml-2 sm:font-normal sm:text-sm sm:px-2 h-8 sm:h-auto {isIndex ? " opacity-100 underline cursor-default" : ""}">Hello</a>
        <a href="/about" id="projectsMenuItem" class="block text-pink-500 opacity-75 font-semibold text-center hover:opacity-100 hover:underline sm:mt-0 sm:ml-2 sm:font-normal sm:text-sm sm:px-2 h-8 sm:h-auto {isProjects ? " opacity-100 underline cursor-default" : ""}">Projects</a>
        <a href="/blog" class="block text-pink-500 opacity-75 font-semibold text-center hover:opacity-100 hover:underline sm:mt-0 sm:ml-2 sm:font-normal sm:text-sm sm:px-2 h-8 sm:h-auto {isWriting ? " opacity-100 underline cursor-default" : ""}">Writing</a>
    </div>
</header>