import fs from 'fs';
import path from 'path';
import marked from 'marked';

export function getArticles () {
	const slugs = fs.readdirSync('src/articles')
		.filter(file => path.extname(file) === '.md')
		.filter(file => file[0] !== '_')
		.map(file => file.slice(0, -3));
	return slugs.map((slug) => { return getArticle(slug)}).sort((a, b) => {
		return a.metadata.pubdate < b.metadata.pubdate ? 1 : -1;
	});
}

export function getArticle(slug, addPrevAndNext) {
	const file = `src/articles/${slug}.md`;
	if (!fs.existsSync(file)) return null;

	const markdown = fs.readFileSync(file, 'utf-8');

	const { content, metadata } = process_markdown(markdown);

	const date = new Date(`${metadata.pubdate} EDT`); // cheeky hack
	metadata.dateString = date.toDateString();

	const html = marked(content);

	//If addPrevAndNext is true, get the basic info needed for the prev/next article
	let prev = null
	let next = null
	if (addPrevAndNext == true) {

		//Get the articles
		const articles = getArticles()

		//Get the index of the current article
		let indexOfCurrent = null
		articles.forEach((article, index) => {
			const articlePubDate = new Date(`${article.metadata.pubdate} EDT`).toDateString()
			if (articlePubDate === metadata.dateString) {
				indexOfCurrent = index
			}
		})

		//If there's a newer article, grab it
		if (indexOfCurrent > 0) {
			next = {
				slug: articles[indexOfCurrent-1].slug,
				title: articles[indexOfCurrent-1].metadata.title
			}
		}

		//If there's an older article grab it
		if (indexOfCurrent < articles.length - 1) {
			prev = {
				slug: articles[indexOfCurrent+1].slug,
				title: articles[indexOfCurrent+1].metadata.title
			}
		}
	}

	return {
		slug,
		metadata,
		html,
		prev,
		next
	};
}

function process_markdown(markdown) {
	const match = /---\r?\n([\s\S]+?)\r?\n---/.exec(markdown);
	const frontMatter = match[1];
	const content = markdown.slice(match[0].length);

	const metadata = {};
	frontMatter.split('\n').forEach(pair => {
		const colonIndex = pair.indexOf(':');
		metadata[pair.slice(0, colonIndex).trim()] = pair
			.slice(colonIndex + 1)
			.trim();
	});

	return { metadata, content };
}
