<script>
	export let data;
</script>

{#each data.articles as article}
	<article>
		<figure>
			<img aria-hidden="true" src={article.image_url} alt={article.heading} />
			<img src={article.image_url} alt={article.heading} />
		</figure>
		<header>
			<time>{article.date}</time> • <span>{article.author}</span>
			<h2>{article.heading}</h2>
		</header>
		<main>
			<p>{article.leading_paragraph}</p>
		</main>
		<a href="/" class="stretched-link">
			<div class="visually-hidden">Read more</div>
		</a>
	</article>
{/each}

<style global>
	@layer base, content;

	@layer content {
		article {
			--image-offset: -2rem;
			--p: 2rem;
			--m: 4rem;

			display: grid;
			background: var(--base-100);
			max-inline-size: 24rem;
			padding-inline: var(--p);
			padding-block: calc(var(--p) + var(--image-offset)) var(--p);
			margin-block: calc(var(--m) - var(--image-offset));
			margin-inline: auto;
			border-radius: var(--radius);
			position: relative;
		}

		.stretched-link {
			position: absolute;
			inset: var(--image-offset) 0 0 0;
			z-index: 1;
			scroll-snap-align: center;
			scroll-margin-block-start: 4rem;
		}

		.visually-hidden {
			position: absolute;
			clip: rect(0 0 0 0);
			clip-path: inset(50%);
			height: 1px;
			width: 1px;
			overflow: hidden;
			white-space: nowrap;
		}

		p {
			--lines-to-show: 3;

			display: -webkit-box;
			-webkit-box-orient: vertical;
			-webkit-line-clamp: var(--lines-to-show);
			overflow: hidden;
			margin-block-start: 1rem;
		}

		figure {
			margin-block-start: var(--image-offset);
			margin-block-end: var(--p);
			margin-inline: 0;
			display: grid;
			isolation: isolate;
			transform: rotate(var(--offset));
			transition: transform 300ms;
		}

		article:nth-child(odd):hover figure {
			--offset: 1deg;
		}

		article:nth-child(even):hover figure {
			--offset: 3deg;
		}

		header {
			color: var(--text-color-200);
		}

		header h2 {
			color: var(--text-color-300);
		}

		figure > * {
			grid-area: 1 / 1;
		}

		img {
			aspect-ratio: 600 / 400;
			border-radius: var(--radius);
			position: relative;
			display: block;
			width: 100%;
		}

		img[aria-hidden] {
			filter: blur(12px);
			top: 1rem;
			opacity: 0.5;
		}
	}
</style>
