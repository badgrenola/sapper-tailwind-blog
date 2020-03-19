import { readable } from 'svelte/store';

export const projects = readable([
    {title:"Areo Browser", path:"/projects/areo-browser"},
    {title:"Juno Observer", path:"/projects/juno-observer"}
]);
