import { readable } from 'svelte/store';
import marked from 'marked';

const convertToDescHTML = (md) => {
    let html = marked(md)
    
    //Add gaps between paras
    html = html.replace(/<\/p>\n<p>/g, '</p>\n<p class="mt-6">')

    //Add target/rel attributes to non-local links
    html = html.replace(/<a (href="http\S+")/g, '<a $1 target="_blank" rel="noopener noreferrer"')

    //Add colorLink class to all links
    html = html.replace(/<a href/g, '<a class="colorLink" href')

    return html
}

//Juno Observer Description Markdown 
const joDescMD = `
Junocam is an instrument onboard NASA's [Juno spacecraft](https://www.jpl.nasa.gov/missions/juno/), which is currently orbiting Jupiter and sending back new imagery every month
and a half as it reaches 'perijove' - it's closest point to the planet. I've written my own processing pipeline for this [image data](https://www.missionjuno.swri.edu/junocam/processing)
(which I'll soon be re-writing, open-sourcing, and documenting here), and Juno Observer is my way of displaying the results.

It allows you to browse all of the available perijove data, projected onto a 3D representation of Jupiter, giving context to the imagery
in a way that wasn't previously possible.

The live app uses imagery from the original version of my processing pipeline, which has since vastly improved. I'm also currently about
75% of the way through a complete re-write of the app, which already contains a lot more features, thanks to the fact that is now uses
the same base structure as [AreoBrowser](./projects/areo-browser).
`

//Areo Browser Description Markdown 
const abDescMD = `
Junocam is an instrument onboard NASA's [Juno spacecraft](https://www.jpl.nasa.gov/missions/juno/), which is currently orbiting Jupiter and sending back new imagery every month
and a half as it reaches 'perijove' - it's closest point to the planet. I've written my own processing pipeline for this [image data](https://www.missionjuno.swri.edu/junocam/processing)
(which I'll soon be re-writing, open-sourcing, and documenting here), and Juno Observer is my way of displaying the results.

It allows you to browse all of the available perijove data, projected onto a 3D representation of Jupiter, giving context to the imagery
in a way that wasn't previously possible.

The live app uses imagery from the original version of my processing pipeline, which has since vastly improved. I'm also currently about
75% of the way through a complete re-write of the app, which already contains a lot more features, thanks to the fact that is now uses
the same base structure as [AreoBrowser](./projects/areo-browser).
`

const projects = readable([
    {
        id: 1, 
        slug:"juno-observer",
        name:"Juno Observer", 
        smallImage: "images/juno-observer/splash_small.jpeg",
        largeImage : "images/juno-observer/splash_half.jpeg",
        shortDesc:"Explore imagery from NASA's Juno spacecraft, projected onto a 3D Jupiter.",
        links:["https://juno.observer"],
        desc:convertToDescHTML(joDescMD),
        features: [
            {
                title:"15 Perijoves of Data", 
                desc:"This version of Juno Observer allows you to browse all of the images from the first 15 perijoves of Junocam data.", 
                image:"images/juno-observer/perijoves.jpg"
            },
            {
                title:"Full Resolution", 
                desc:"Images are projected at full resolution, meaning you can zoom ALL the way in to Jupiter's ludicrous storm features.", 
                image:"images/juno-observer/detail.jpg"
            },
            {
                title:"Fixed Rotation Mode", 
                desc:"Toggle on 'Fixed Rotation' to lock Jupiter's rotation in place, making it easier to view subtle differences between exposures.", 
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
        shortDesc:"Explore nearly 2000 3D models of Mars, using data from HiRISE & HRSC.",
        links:["https://areobrowser.com"],
        desc:convertToDescHTML(abDescMD),
        features: [
            {title:"Feature", desc:"Description of feature", image:"./testImage.jpg"},
            {title:"Feature", desc:"Description of feature", image:"./testImage.jpg"},
            {title:"Feature", desc:"Description of feature", image:"./testImage.jpg"},
            {title:"Feature", desc:"Description of feature", image:"./testImage.jpg"},
            {title:"Feature", desc:"Description of feature", image:"./testImage.jpg"},
            {title:"Feature", desc:"Description of feature", image:"./testImage.jpg"},
            {title:"Feature", desc:"Description of feature", image:"./testImage.jpg"}
        ],
        todos:[
            "Model downloads",
            "3D-printable model downloads",
            "Ability to save an image of the current view, with a transparent background",
            "Ability to share a link to the current model + camera angle",
            "Realistic lighting based upon location + a given time, using a full sun/sky model",
            "WASD navigation",
            "Basic fly-over/animation support"
        ],
        tagName: "areobrowser"
    }
]);

export { projects }