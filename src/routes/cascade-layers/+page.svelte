<script>
	export let data;
</script>

{#each data.articles as article}
	<article class="article">
		<figure class="article__image">
			<img aria-hidden="true" src={article.image_url} alt={article.heading} />
			<img src={article.image_url} alt={article.heading} />
		</figure>
		<header class="article__header">
			<time>{article.date}</time> • <span>{article.author}</span>
			<h2>{article.heading}</h2>
		</header>
		<main class="article__main">
			<p class="text-clamp">{article.leading_paragraph}</p>
		</main>
		<a href="/" class="stretched-link">
			<div class="visually-hidden">Read more</div>
		</a>
	</article>
{/each}

<style global>

	@layer components\.article {
		.article {
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

		.article__main p {
			--lines-to-show: 3;
		}

		.stretched-link {
			inset: var(--image-offset) 0 0 0;
			scroll-snap-align: center;
			scroll-margin-block-start: 4rem;
		}

		.article__image {
			margin-block-start: var(--image-offset);
			margin-block-end: var(--p);
			margin-inline: 0;
			display: grid;
			isolation: isolate;
			transform: rotate(var(--offset));
			transition: transform 300ms;
		}

		.article:nth-child(odd):hover .article__image {
			--offset: 1deg;
		}

		.article:nth-child(even):hover .article__image {
			--offset: 3deg;
		}

		.article__header {
			color: var(--text-color-200);
		}

		.article__header h2 {
			color: var(--text-color-300);
		}

		.article__image > * {
			grid-area: 1 / 1;
		}

		.article__image img {
			border-radius: var(--radius);
			position: relative;
			display: block;
			inline-size: 100%;
			block-size: 260px;
			object-fit: cover;
		}

		.article__header img[aria-hidden] {
			filter: blur(12px);
			top: 1rem;
			opacity: 0.5;
		}
	}
</style>
