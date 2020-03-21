import { readable } from 'svelte/store';

const projects = readable([
    {
        id: 1, 
        title:"Areo Browser", 
        path:"/projects/areo-browser", 
        desc:"Explore nearly 2000 3D models of Mars, using data from HiRISE & HRSC."
    },
    {
        id: 2, 
        title:"Juno Observer", 
        path:"/projects/juno-observer", 
        desc:"Explore imagery from NASA's Juno spacecraft, projected onto a 3D Jupiter."
    }
]);

export { projects }