<script>
    var isOpen = false;

    function handleOnClick() {
        isOpen = !isOpen
    }
</script>

<header class="bg-white sm:flex sm:justify-between sm:items-center sm:p-4 lg:p-8">
    <div class="flex items-center justify-between px-4 py-4 sm:p-0">
        <div class="">
            <img class="h-12 rounded-full" src="profile.jpg" alt="A picture of Matt Brealey's head" />
        </div>
        <div class="sm:hidden">
            <button type="button" id="menuButton" class="block text-black hover:text-gray-800 focus:text-gray-800 focus:outline-none pr-2" on:click={handleOnClick}>
                <svg class="h-8 w-8 fill-current {isOpen ? 'text-pink-600' : 'text-black'}" viewBox="0 0 100 70">
                    <rect width="100" height="10"></rect>
                    <rect y="30" width="100" height="10"></rect>
                    <rect y="60" width="100" height="10"></rect>
                </svg>
            </button>
        </div>
    </div>
    <div class="px-2 pt-2 pb-4 {isOpen ? 'block' : 'hidden'} sm:flex sm:p-0">
        <a href="/" class="block mt-1 px-2 text-pink-600 font-semibold text-center hover:text-pink-500 hover:underline sm:mt-0 sm:ml-2 sm:font-normal sm:text-sm">Hello</a>
        <a href="/about" id="projectsMenuItem" class="block mt-1 px-2 text-pink-600 font-semibold text-center hover:text-pink-500 hover:underline sm:mt-0 sm:ml-2 sm:font-normal sm:text-sm">Projects</a>
        <a href="/blog" class="block mt-1 px-2 text-pink-600 font-semibold text-center hover:text-pink-500 hover:underline sm:mt-0 sm:ml-2 sm:font-normal sm:text-sm">Writing</a>
    </div>
</header>