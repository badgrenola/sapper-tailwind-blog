import marked from 'marked'

//Customise the rendering of link tags
const renderer = new marked.Renderer()
const linkRenderer = renderer.link
renderer.link = (href, title, text) => {

    //Get the base html
    let html = linkRenderer.call(renderer, href, title, text)

    //Add gaps between paras
    html = html.replace(/<\/p>\n<p>/g, '</p>\n<p class="mt-6">')

    //Add target/rel attributes to non-local links
    html = html.replace(/<a (href="http\S+")/g, '<a $1 target="_blank" rel="noopener noreferrer"')

    //Add colorLink class to all links
    html = html.replace(/<a href/g, '<a class="colorLink" href')

    return html
};

const toHTML = (markdown) => {
    return marked(markdown, { renderer })
}

export { toHTML }