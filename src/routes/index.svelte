<svelte:head>
	<title>Matt Brealey</title>
</svelte:head>

<svelte:window on:resize={updateHandRotation}/>
<script>
  import { onMount } from 'svelte'

  //Setup the data types for the rotating text + store the current index
  let dataTypes = ["VFX", "design", "space"]
  let dataTypeIndex = 0

  //Store the rotation of the pointing hand
  let handRotation = 0
  let handElement = null
  let projectsElement = null
  let menuButton = null

  function updateHandRotation() {
    //Get out if either element doesn't exist
    if (!handElement || !projectsElement) return

    //Get the rects
    let handRect = handElement.getBoundingClientRect()
    let projectsRect = projectsElement.getBoundingClientRect()
    let menuRect = menuButton.getBoundingClientRect()
    
    //Get the positions
    let handPos = {x: handRect.x + (handRect.width/2), y: handRect.y + (handRect.height/2)}
    let projectsPos = {x: projectsRect.x + (projectsRect.width/2), y: projectsRect.y + (projectsRect.height/2)}
    let menuPos = {x: menuRect.x + (menuRect.width/2), y: menuRect.y + (menuRect.height/2)}

    //We need to use the menu if it's visible, otherwise the projects menu item
    //Quick way to do this is just to see if the rect's width/height are 0
    let pointingAt = menuPos
    if (menuRect.width === 0 && menuRect.height === 0) { pointingAt = projectsPos }

    //Get the angle between the points
    handRotation = (Math.atan2(pointingAt.y - handPos.y, pointingAt.x - handPos.x) * 180 / Math.PI) + 90
  }

  //On mount, start the rotation + return a cleanup function
  onMount(async () => {
    //Setup the timer
    const interval = setInterval(() => {
      dataTypeIndex = dataTypeIndex == (dataTypes.length - 1) ? 0 : dataTypeIndex + 1;
    }, 1500)

    //Store the hand/projects menu elements
    handElement = document.getElementById("pointingHand");
    projectsElement = document.getElementById("projectsMenuItem");
    menuButton = document.getElementById("menuButton");

    //Update the initial hand rotation
    updateHandRotation()

    return () => {
      //Clear the timer on unmount
      clearInterval(interval);
    }
  })

</script>

<div class="font-normal text-gray-900 text-base sm:text-base p-6 flex lg:p-8">
  <div class="w-1/5 mr-6 text-sm hidden sm:block">
    <div class="flex flex-col">
      <h2 class="text-pink-600 font-semibold">Latest Projects</h2>
      <a href="#" class="hover:text-pink-500 hover:underline mt-2">Areo Browser</a>
      <a href="#" class="hover:text-pink-500 hover:underline">Juno Observer</a>
    </div>
    <div class="flex flex-col mt-8">
      <h2 class="text-pink-600 font-semibold">Latest Articles</h2>
      <a href="#" class="hover:text-pink-500 hover:underline mt-2">Hello Motivation</a>
    </div>
  </div>
  <div class="w-auto sm:w-4/5 font-light">
    <h1 class="text-3xl text-pink-600 font-thin sm:leading-6">Hello 👋</h1>
    <div class="mt-2 lg:mt-6">
      <p class="pt-4 sm:hidden">I'm Matt.</p>
      <p class="pt-4">
        <span class="hidden sm:inline-block">I'm Matt.</span> And I can help you do
        <span class="font-semibold">awesome</span>
        things with your
        <span class="font-semibold text-pink-600">{dataTypes[dataTypeIndex]}</span>
        data.
      </p>
      <p class="pt-4">
        I love making data more accessible, and getting it to flow between apps in occasionally odd but incredibly useful ways.
      </p>
      <p class="pt-4">
        You can check out some of my personal projects, or read some of my
        <span class="text-gray-700 italic">(hopefully soon-to-be numerous)</span>
        short articles by clicking the links
        <span class="hidden sm:inline-block">
          up the top over there
        </span>
        <span class="sm:hidden">in the dropdown menu up there</span>
        <span id="pointingHand" style="display:inline-block; transform:rotate({handRotation}deg);">
            👆
          </span>
      </p>
      <p class="pt-4">
        Or if you've got a specific project in mind,
        <a class="font-semibold hover:underline text-pink-600 sm:text-pink-700 hover:text-pink-600" href="mailto:hello@mattbrealey.com">why not say hello?</a>
      </p>
    </div>
  </div>
</div>