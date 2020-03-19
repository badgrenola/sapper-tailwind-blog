import { readable } from 'svelte/store';

export const projects = readable([
    {title:"Areo Browser", path:"/projects/areo-browser", desc:"Explore nearly 2000 3D models of Mars, using data from HiRISE & HRSC."},
    {title:"Juno Observer", path:"/projects/juno-observer", desc:"Explore imagery from NASA's Juno spacecraft, projected onto a 3D Jupiter."}
]);
