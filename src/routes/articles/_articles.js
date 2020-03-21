import fs from 'fs';
import path from 'path';
import marked from 'marked';

export function getArticles () {
	const slugs = fs.readdirSync('src/articles')
		.filter(file => path.extname(file) === '.md')
		.map(file => file.slice(0, -3));
	return slugs.map(getArticle).sort((a, b) => {
		return a.metadata.pubdate < b.metadata.pubdate ? 1 : -1;
	});
}

export function getArticle(slug) {
	const file = `src/articles/${slug}.md`;
	if (!fs.existsSync(file)) return null;

	const markdown = fs.readFileSync(file, 'utf-8');

	const { content, metadata } = process_markdown(markdown);

	const date = new Date(`${metadata.pubdate} EDT`); // cheeky hack
	metadata.dateString = date.toDateString();

	const html = marked(content);

	return {
		slug,
		metadata,
		html
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
