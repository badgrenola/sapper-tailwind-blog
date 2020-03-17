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

  function updateHandRotation() {
    //Get out if either element doesn't exist
    if (!handElement || !projectsElement) return

    //Get the rects
    let handRect = handElement.getBoundingClientRect()
    let projectsRect = projectsElement.getBoundingClientRect()
    
    //Get the positions
    let handPos = {x: handRect.x + (handRect.width/2), y: handRect.y + (handRect.height/2)}
    let projectsPos = {x: projectsRect.x + (projectsRect.width/2), y: projectsRect.y + (projectsRect.height/2)}

    //Get the angle between the points
    handRotation = (Math.atan2(projectsPos.y - handPos.y, projectsPos.x - handPos.x) * 180 / Math.PI) + 90
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

    //Update the initial hand rotation
    updateHandRotation()

    return () => {
      //Clear the timer on unmount
      clearInterval(interval);
    }
  })

</script>

<div class="font-normal text-gray-900 text-base sm:text-base p-6">
  <h1>Hello 👋</h1>
  <p class="pt-4 sm:hidden">I'm Matt.</p>
  <p class="pt-4">
    <span class="hidden sm:inline-block">I'm Matt.</span> I can help you do awesome things with your
    <span class="font-semibold text-pink-600">{dataTypes[dataTypeIndex]}</span>
    data.
  </p>
  <p class="pt-4">
    I love making data more accessible, and making it flow between apps in occassionally odd but incredibly useful ways.
  </p>
  <p class="pt-4">
    You can check out some of my personal projects, or read some of my
    <span class="text-gray-700 italic">(hopefully soon-to-be numerous)</span>
    short articles by clicking the links
    <span class="hidden sm:inline-block">
      up the top over there
      <span id="pointingHand" style="display:inline-block; transform:rotate({handRotation}deg);">
        👆
      </span>
    </span>
    <span class="sm:hidden">in the dropdown menu up there 👆</span>
  </p>
  <p class="pt-4">
    Or if you've got a project in mind,
    <a class="text-pink-600 sm:text-pink-700 hover:text-pink-600" href="mailto:hello@mattbrealey.com">why not say hello?</a>
  </p>
</div>