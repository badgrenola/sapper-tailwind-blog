import { readable } from 'svelte/store';
import marked from 'marked';

const convertToDescHTML = (md) => {
    let html = marked(md)
    
    //Add gaps between h3s
    html = html.replace(/<\/p>\n<p>/g, '</p>\n<p class="mt-6">')

    //Add target/rel attributes to non-local links
    html = html.replace(/<a (href="http\S+")/g, '<a $1 target="_blank" rel="noopener noreferrer"')

    //Add colorLink class to all links
    html = html.replace(/<a href/g, '<a class="colorLink" href')

    return html
}

//Areo Description Markdown
const areoDescMD = `
Areo is a custom Mac app designed for opening, viewing and converting Digital Terrain Models in the _.IMG_ format. 

The released version (available above) was designed specifically to quickly open .IMG files generated from [HiRISE](https://www.uahirise.org/dtm/) imagery, 
and convert them into .OBJ files at a given proxy level (_1/2, 1/4, 1/8_ etc.).
It also includes the ability to generate 3D-printable versions of these models.

It was originally created as part of a month-long project I set myself, to see if I could both understand the data structure, and 
create a tool that not only opens the files quickly, but also converts them into a useful, more-accessible 3D format.

I have been working on a newer version of this app which expands the amount of file formats, and implements a command-line version
of the featureset. This new version currently forms part of my [Areo Browser](./projects/areo-browser) data pipeline, and I plan on
documenting and releasing it here in the near future.
`

//Juno Observer Description Markdown 
const joDescMD = `
Junocam is an instrument onboard NASA's [Juno spacecraft](https://www.jpl.nasa.gov/missions/juno/), which is currently orbiting Jupiter and sending back new imagery every month
and a half as it reaches 'perijove' - it's closest point to the planet. I've written my own processing pipeline for this [image data](https://www.missionjuno.swri.edu/junocam/processing)
(which I'll soon be re-writing, open-sourcing, and documenting here), and Juno Observer (a [React](https://reactjs.org/)/[ThreeJS](https://threejs.org/) web-app) is my way of displaying the results.

It allows you to browse all of the available perijove data, projected onto a 3D representation of Jupiter, giving context to the imagery
in a way that wasn't previously possible.

The live version of the app uses imagery from the original version of my processing pipeline, which has since vastly improved. I'm also currently about
75% of the way through a complete re-write of the app, which already contains a lot more features, thanks to the fact that is now uses
the same base structure as [AreoBrowser](./projects/areo-browser).
`

//Areo Browser Description Markdown 
const abDescMD = `
Areo Browser is a [React](https://reactjs.org/)/[ThreeJS](https://threejs.org/) web-app that allows you to explore nearly 2000 Martian terrain models, in full 3D, directly in your browser and on mobile. 
It currently uses data from both the [HiRISE](https://www.uahirise.org/) camera (on-board NASA's [Mars Reconnaissance Orbiter](https://mars.nasa.gov/mro/)), and the [HRSC](https://www.esa.int/ESA_Multimedia/Images/2004/01/The_High_Resolution_Stereo_Camera_HRSC) (on-board ESA's [Mars Express](http://www.esa.int/Science_Exploration/Space_Science/Mars_Express)).

With options for mesh and image resolution, vertical exaggeration, and displaying a custom [Cividis](https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0199239) gradient with contour mapping on the model,
Areo Browser vastly increases the accessibility of the included data.

This new version of Areo Browser is able to process and view all types of Martian 3D data, so if you'd like to talk about having your data included, [please just get in touch!](mailto:hello@mattbrealey.com)

Each available model consists of two parts - the mesh, and the associated image data.

The mesh is generated on-the-fly in the browser, using [Web Workers](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers) to convert a custom-encoded RGB image into the required height data.
This custom image format is an order-of-magnitude smaller than the original source file, but maintains a high-level of accuracy, and allows different resolutions to be quickly generated as needed.
It is created using an upcoming new version of my Mac-based conversion tool, [Areo](./projects/areo).

Two images are then applied to the model. The first is a colour image, created by combining all available RGB image data from the source files, and displayed at the desired resolution.
The second is a _normal_ map, which is a way of adding extra perceived detail to the model, without needing to increase the poly-count, again helping to ensure that the files can be viewed on older devices.
`

const projects = readable([
    {
        id: 0, 
        slug:"areo",
        name:"Areo", 
        smallImage: "images/areo/splash_small.jpg",
        largeImage : "images/areo/splash.jpg",
        shortDesc:"A Mac app designed for opening, viewing and converting Digital Terrain Models.",
        links:[
            {
                title:"Download Beta 1 v2",
                url:"http://bit.ly/areo1b2"
            }
        ],
        desc:convertToDescHTML(areoDescMD),
        features:[
            {
                title:"Fast. Very Fast.", 
                desc:"Thanks to Areo's crafty use of image proxying, it takes just 4 seconds to load and process a 1.15gb DTM.", 
                image: "https://thumbs.gfycat.com/GlumIdealisticGallinule-small.gif"
            },
            {
                title:"OBJ Export", 
                desc:"Areo can quickly export a UV'd OBJ file of the current model for use in other 3D applications.", 
                image:"https://thumbs.gfycat.com/CluelessEasygoingIceblueredtopzebra-small.gif"
            },
            {
                title:"Generate 3D-Printable Models", 
                desc:"In a few clicks, Areo allows you to generate fully 3D-printable models that can be easily uploaded to your 3D-printing service of choice.", 
                image:"https://thumbs.gfycat.com/OddQuickAfricanbushviper-small.gif"
            },
        ],
        todos:[
            "Clean-up the code in v2 and release"
        ],
        tagName: 'areo'
    },
    {
        id: 1, 
        slug:"juno-observer",
        name:"Juno Observer", 
        smallImage: "images/juno-observer/splash_small.jpeg",
        largeImage : "images/juno-observer/splash_half.jpeg",
        shortDesc:"A web-app allowing you to explore Junocam imagery from NASA's Juno spacecraft, projected onto a 3D Jupiter.",
        links:[
            {
                title:"Website",
                url:"https://juno.observer"
            }
        ],
        desc:convertToDescHTML(joDescMD),
        features: [
            {
                title:"15 Perijoves of Data", 
                desc:"The live version of Juno Observer allows you to browse all of the images from the first 15 perijoves of Junocam data.", 
                image:"images/juno-observer/perijoves.jpg"
            },
            {
                title:"Full Resolution", 
                desc:"Images are projected at full resolution, meaning you can zoom ALL the way in to Jupiter's ludicrous storm features.", 
                image:"images/juno-observer/detail.jpg"
            },
            {
                title:"Fixed Rotation Mode", 
                desc:"Toggle on <i>Fixed Rotation</i> to lock Jupiter's rotation in place, making it easier to view subtle differences between exposures.", 
                image:"images/juno-observer/fixedRot.jpg"
            }
        ],
        todos:[
            "Finish the new pipeline",
            "Finish the new version 🙂"
        ],
        tagName: "junoobserver"
    },
    {
        id: 2,
        slug:"areo-browser",
        name:"Areo Browser", 
        smallImage: "images/areo-browser/splash_small.jpeg",
        largeImage : "images/areo-browser/splash_half.jpeg",
        shortDesc:"A web-app allowing you to explore nearly 2000 3D models of Mars, using data from HiRISE & HRSC.",
        links:[
            {
                title:"Website",
                url:"https://areobrowser.com"
            }
        ],
        desc:convertToDescHTML(abDescMD),
        features: [
            {
                title:"Browse & Search Nearly 2000 Models", 
                desc:"Filtering and sorting options make it SUPER easy to find the DTM you're looking for.", 
                image:"images/areo-browser/fileCount.jpg"
            },
            {
                title:"Multi-resolution Meshes & Imagery", 
                desc:"Easily switch between 4 quality levels for meshes & their associated images, only downloading data when needed.", 
                image:"images/areo-browser/resolution.jpg"
            },
            {
                title:"Works on both Desktop & Mobile", 
                desc:"With a UI designed for phones, tablets and desktops, you can view slices of Mars on any of your devices.", 
                image:"images/areo-browser/mobile.jpg"
            },
            {
                title:"Normal Maps to Provide Extra Detail", 
                desc:"These generated images massively increase the perceived details on the loaded mesh, without requiring a more powerful machine.", 
                image:"images/areo-browser/normal.jpg"
            },
            {
                title:"Vertical Exaggeration Options", 
                desc:"Increase the vertical scale of the loaded mesh up to 5x, to make even the flattest terrain easier to understand.", 
                image:"images/areo-browser/ve.gif"
            },
            {
                title:"Altimetry Mode", 
                desc:"Apply an easy-to-read elevation gradiant to the model, with overlaid contour lines at custom intervals ranging from 5m to 5km.", 
                image:"images/areo-browser/alt.gif" //https://gifmaker.me/
            },
        ],
        todos:[
            "Model downloads",
            "3D-printable model generation and downloads",
            "Ability to save an image of the current view, with a transparent background",
            "Ability to share a link to the current model with the current camera angle",
            "Realistic lighting based upon location and a given time, using a full sun/sky model",
            "WASD navigation",
            "Basic fly-over/animation support",
            "Ability to search by a range of values (e.g. elevation in the range 100-200m)",
            "Apply for a DOI so the site can be easily referenced"
        ],
        tagName: "areobrowser"
    }
]);

export { projects }