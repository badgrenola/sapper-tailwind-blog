# Sapper + TailwindCSS = 👍

This repo is my attempt at writing a new portfolio/blog site using [Sapper](https://sapper.svelte.dev/) and [TailwindCSS](https://tailwindcss.com/) - both of which were new to me at the start of the process!

The main goals were simple : 

1. Allow for a brief description of what I do on the main page.
2. Allow for a custom page for each of my bigger projects. This page should follow a set layout, but be flexible enough to allow for ThreeJS/WebGL content down the line.
3. Have a simple Markdown based blog system.

Other than the ThreeJS/WebGL bit which I've yet to need/implement, the rest is now up and running. 

Check out it running live here : [mattbrealey.com](http://mattbrealey.com)

On top of the above, I've added : 

* Latest projects and articles sections to the side bar. These currently show the latest 5 of each.
* Prev/Next Project/Article links at the bottom of each Project/Article.

Some of previous projects have used React, and whilst it's obviously __super__ capable I've come to realise that its APIs don't match how I think about my code. In fact they've started to get in the way, slowing me down.

Refreshingly, the combo of Sapper and Tailwind has been a _absolute_ joy to work with. I had the basic bones of this entire site up and running in a few hours, including the routes and basic styles (I heartily recommend checking out [Adam Wathan's Youtube Channel](https://www.youtube.com/channel/UCy1H38XrN7hi7wHSClfXPqQ) to quickly get up to speed with Tailwind).

And Svelte is just __LUDICROUSLY__ awesome. Simple, easy, and once I get my head around the fact that it's a _different_ way of approaching the bundle problem, it really did speed up the process.

---

## Package Scripts

### Long story short 
* For development : `npm run dev`
* For building your static app bundle : `npm run export`

### Hot Reloading
I found that running two processes (one that watches for Tailwind updates, and one that builds sapper) gave me the quickest hot-reload results.

### Publish?
The exported bundle is hosted on Github Pages in a [separate repo](https://github.com/badgrenola/badgrenola.github.io). 

Triggering `npm run publish` exports the code, and then _rsyncs_ it to that repo's local folder so all I have to manually do is check it and then commit. Nothing too crazy, but it saves a bit of time.

---
I'll no doubt add more info here as and when I think of it, but in the meantime, if you've got any questions either leave an issue above or you can find me over on [Twitter](https://twitter.com/badgrenola)

Cheers!